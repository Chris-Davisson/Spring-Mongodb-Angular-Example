import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {
  name = '';
  email = '';
  dob = new Date();
  designation = '';
  department = '';
  loginId = '';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  private editMode = false;
  private ID: string;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {

  }

  onAddEmployee(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addEmployee(form.value.name, form.value.email, form.value.dob, form.value.designation, form.value.department, form.value.loginId);
    form.resetForm();
  }

}
