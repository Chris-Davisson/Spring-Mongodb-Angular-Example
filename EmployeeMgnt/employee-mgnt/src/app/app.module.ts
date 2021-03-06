import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeCreateComponent, EmployeeCreateDialog } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    HomeComponent,
    EmployeeCreateDialog,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,

    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
