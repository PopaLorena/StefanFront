import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerSave } from 'src/models/customerSave';
import { CustomerGet } from 'src/models/customerGet';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  token = localStorage.getItem('jwt');
  header = { Authorization: `Bearer ${this.token}` };
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = "https://localhost:44321/api/customer";

  getCustomer(): Observable<CustomerGet[]>{
    return this.httpClient.get(this.baseUrl + '/get') as Observable<CustomerGet[]>;
  }

  getCustomerById(customerId: number): Observable<CustomerGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + customerId, {headers: this.header}) as Observable<CustomerGet>;
  }

  getCustomerByRouteId(routeId: number): Observable<CustomerGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + routeId, {headers: this.header}) as Observable<CustomerGet>;
  }
  saveCustomer(newCustomer: CustomerSave): Observable<CustomerSave>{
    return this.httpClient.post(this.baseUrl + '/post', newCustomer, {headers: this.header}) as Observable<CustomerSave>;
  }
}
