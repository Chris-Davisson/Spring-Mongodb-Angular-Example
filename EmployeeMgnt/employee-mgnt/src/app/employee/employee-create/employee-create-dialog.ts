/*
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  email: string;
  dob: Date;
  designation: string;
  department: string;
  loginId: string;
}

@Component({
  selector: 'employee-create-dialog',
  templateUrl: 'employee-create-dialog.html',
})

export class EmployeeCreateDialog {

  constructor(public dialog: MatDialog){}

  openDialog(): void {
    const dialogRef = this.dialog.open(EmployeeCreateDialog, {
      width: '250px',
      data: {name: '', email: '', dob: new Date(), designation: '', department: '', loginId: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

*/

