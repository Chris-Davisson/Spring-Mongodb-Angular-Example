import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  emps: Employee[] = [];
  private empsSub: Subscription = new Subscription;
  isEditing: boolean = false;
  editForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    designation: new FormControl(),
    department: new FormControl(),
    loginId: new FormControl()

  });
  loading: boolean = false;
  private empSub: Subscription;
  displayedColumns: string[] = ['name', 'email', 'dob', 'designation', 'department', 'loginId', 'edit', 'delete'];
  dataSource = this.emps;

  constructor(public employeeService: EmployeeService) { }



  ngOnDestroy(): void {
    this.empsSub.unsubscribe();
  }

  ngOnInit(): void {
    this.employeeService.getEmployees();
    this.empsSub = this.employeeService.getEmployeeUpdateListener().subscribe((emps: Employee[]) => {
    this.emps = emps;
    });

  }

  onDelete(empId: string) {
    this.employeeService.deleteEmployee(empId);
  }
   onEdit(empId: string) {
    this.isEditing = !this.isEditing;
  }

  onUpdate(emp: Employee) {
    console.log(emp);
    if(this.editForm.value.name != null) {
      emp.name = this.editForm.value.name;
    }
    if(this.editForm.value.email != null) {
      emp.email = this.editForm.value.email;
    }
    if(this.editForm.value.dob != null) {
      emp.dob = this.editForm.value.dob;
    }
    if(this.editForm.value.department != null) {
      emp.department = this.editForm.value.department;
    }
    if(this.editForm.value.designation != null) {
      emp.designation = this.editForm.value.designation;
    }

    this.employeeService.updateEmployee(emp);

    }

}
