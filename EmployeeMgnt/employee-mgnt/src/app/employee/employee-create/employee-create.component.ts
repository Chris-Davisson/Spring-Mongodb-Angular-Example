import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../employee.service';

export interface DialogData {
  name: string;
  email: string;
  dob: Date;
  designation: string;
  department: string;
  loginId: string;
}



@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})

export class EmployeeCreateComponent implements OnInit {

  //Validation needed
  createForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    designation: new FormControl(),
    department: new FormControl(),
    loginId: new FormControl()

  });

  constructor(public employeeService: EmployeeService , public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  onAddEmployee(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.employeeService.addEmployee(this.createForm.value.name, this.createForm.value.email, this.createForm.value.dob, this.createForm.value.designation, this.createForm.value.department, this.createForm.value.loginId);
    form.resetForm();
  }

  openCreateDialog(){
    const dialogRef = this.dialog.open(EmployeeCreateDialog, {
      width: '250px',
      data: {name: '', email: '', dob: new Date(), designation: '', department: '', loginId: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.employeeService.addEmployee(result.value.name, result.value.email, result.value.dob, result.value.designation, result.value.department, result.value.loginId);
    });
  }

}

@Component({
  selector: 'app-employee-create-dialog',
  templateUrl: './employee-create-dialog.html',
})
export class EmployeeCreateDialog {

  //Validation needed
  createForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    designation: new FormControl(),
    department: new FormControl(),
    loginId: new FormControl()

  });

  constructor(
    public dialogRef: MatDialogRef<EmployeeCreateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddEmployee(): void {}
}
