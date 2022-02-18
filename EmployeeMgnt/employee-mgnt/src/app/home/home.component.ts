import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeCreateComponent } from '../employee/employee-create/employee-create.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreateDialog(){
    const dialogRef = this.dialog.open(EmployeeCreateComponent, {
      width: '500px',
      height: '500px',
      data: { name: '', designation: '', salary: '' }
    });
  }
}
