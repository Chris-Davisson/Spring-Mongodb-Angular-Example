import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const   EMP_SCHEMA = {
  "name": "text",
  "email": "text",
  "dob": "date",
  "department": "text",
  "designation": "text",
  "loginId": "text",
  "isEdit": "isEdit",
  "isDelete": "isDelete"
};

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  emps: Employee[] = [];
  date: Date = new Date();
  // emps2: Employee[] = [{name: 'chris', email: 'email', dob: this.date, department: 'asdf', designation: 'asdf', loginId: 'asdf'}];
  private empsSub: Subscription = new Subscription;

  // isEditing: boolean = false;

  editForm: FormGroup = new FormGroup({
    name: new FormControl(Validators.required, Validators.minLength(3)),
    email: new FormControl(),
    dob: new FormControl(),
    designation: new FormControl(),
    department: new FormControl(),
    loginId: new FormControl()
  });



  loading: boolean = false;
  private empSub: Subscription;
  displayedColumns: string[] = ['name', 'email', 'dob', 'designation', 'department', 'loginId', 'isEdit' , 'isDelete'];

  dataSchema = EMP_SCHEMA;

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
  //  onEdit(isEdit: boolean, name: string, email: string, dob: Date, designation: string, department: string , loginId: string): boolean {
  //   // this.isEditing = !this.isEditing;
  //   // console.log(this.isEditing);
  //   let employee = this.emps.filter(emp => emp.loginId === loginId)[0];
  //   console.log(employee);
  //   this.employeeService.updateEmployee(employee);

  //   return !isEdit;
  // }

  onEdit(isEdit: boolean, emp: Employee) {
    this.editForm.get('name').setValue(emp.name);
    this.editForm.get('email').setValue(emp.email);
    this.editForm.get('dob').setValue(emp.dob);
    this.editForm.get('department').setValue(emp.department);
    this.editForm.get('designation').setValue(emp.designation);
    this.editForm.get('loginId').setValue(emp.loginId);
    return !isEdit;
  }

  onUpdate(isEdit: boolean,emp: Employee) {
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

    return !isEdit;

    }

}
