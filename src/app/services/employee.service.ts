import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeGet } from 'src/models/employeeGet';
import { EmployeeSave } from 'src/models/employeeSave';
import { EmployeeUpdate } from 'src/models/employeeUpdate';
import { CarsUpdate } from 'src/models/carsUpdate';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  token = localStorage.getItem('jwt');
  header = { Authorization: `Bearer ${this.token}` };
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = "https://localhost:44395/Employee";

  async getEmployee(): Promise<Observable<EmployeeGet[]>>{
    return this.httpClient.get(this.baseUrl + '/get') as Observable<EmployeeGet[]>;
  }

  getEmployeeById(employeeId: number): Observable<EmployeeGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + employeeId, {headers: this.header}) as Observable<EmployeeGet>;
  }

  saveEmployee(newEmployee: EmployeeSave): Observable<EmployeeSave>{
    return this.httpClient.post(this.baseUrl + '/post', newEmployee, {headers: this.header}) as Observable<EmployeeSave>;
  }

  deleteEmployee(employeeId: number): Observable<null>{
    return this.httpClient.delete(this.baseUrl + '/delete/' + employeeId, {headers: this.header}) as unknown as Observable<null>;
  }

  updateEmployee(employeeId: number,updateEmployee: EmployeeUpdate): Observable<EmployeeUpdate>{
    return this.httpClient.patch(this.baseUrl + '/edit/' + employeeId, updateEmployee, {headers: this.header}) as Observable<EmployeeUpdate>;
  }

  
}

