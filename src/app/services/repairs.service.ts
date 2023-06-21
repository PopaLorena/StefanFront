import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RepairsGet } from 'src/models/repairsGet';
import { RepairsSave } from 'src/models/repairsSave';
import { RepairsUpdate } from 'src/models/repairsUpdate';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  token = localStorage.getItem('jwt');
  header = { Authorization: `Bearer ${this.token}` };
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = "https://localhost:44395/api/Repairs";

  getRepairs(): Observable<RepairsGet[]>{
    return this.httpClient.get(this.baseUrl + '/get') as Observable<RepairsGet[]>;
  }

  getRepairsById(repairsId: number): Observable<RepairsGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + repairsId, {headers: this.header}) as Observable<RepairsGet>;
  }

  getRepairsByEmployeeId(employeeId: number): Observable<RepairsGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + employeeId, {headers: this.header}) as Observable<RepairsGet>;
  }

  saveRepairs(newRepair: RepairsSave): Observable<RepairsSave>{
    return this.httpClient.post(this.baseUrl + '/post', newRepair, {headers: this.header}) as Observable<RepairsSave>;
  }

  deleteRepairs(repairId: number): Observable<null>{
    return this.httpClient.delete(this.baseUrl + '/delete/' + repairId, {headers: this.header}) as unknown as Observable<null>;
  }

  updateRepairs(repairId: number,updateRepairs: RepairsUpdate): Observable<RepairsUpdate>{
    return this.httpClient.patch(this.baseUrl + '/edit/' + repairId, updateRepairs, {headers: this.header}) as Observable<RepairsUpdate>;
  }
}