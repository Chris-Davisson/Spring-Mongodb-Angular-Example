import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Employee } from "./employee.model";
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class EmployeeService {


  private emps: Employee[] = [];

  private employeeUpdated = new Subject<Employee[]>();
  emp: any;

  constructor(private http: HttpClient) { }

  private baseURL = 'http://localhost:8080/employee/';

  getEmployees() {
    this.http.get(this.baseURL).forEach((res: Employee[]) => {
      this.emps = res;
      this.employeeUpdated.next([...this.emps]);

    });



    /*
    Found a much simplier way to do this.
    .subscribe(transEmp => {
      let x = 0;
      while(transEmp[x] != null) {
        const employee: Employee = {
          name: transEmp[x].name,
          email: transEmp[x].email,
          dob: transEmp[x].dob,
          designation: transEmp[x].designation,
          department: transEmp[x].department,
          loginId: transEmp[x].loginId
        };
        this.emps.push(employee);
        x++;
      }
      this.employeeUpdated.next([...this.emps]);

    });
  */
  }
  getEmployeeUpdateListener() {

    return this.employeeUpdated.asObservable();
  }

  addEmployee(name: string, email: string, dob: Date, designation: string, department: string, loginId: string) {
    const employee: Employee = {
      name: name,
      email: email,
      dob: dob,
      designation: designation,
      department: department,
      loginId: loginId
    };

    this.http.post(this.baseURL, employee).subscribe();
    this.emps.push(employee);
    this.employeeUpdated.next([...this.emps]);
  }

  deleteEmployee(empId: string){

    this.http.delete(this.baseURL+ empId)
    .subscribe(() => {
      const updatedEmps = this.emps.filter(emp => emp.loginId !== empId);
      this.emps = updatedEmps;
      this.employeeUpdated.next([...this.emps]);
    });
  }

  updateEmployee(employee: Employee) {
    console.log("updateEmployee in employeeService.ts");
    this.http.post(this.baseURL, employee).subscribe();
  }


}
