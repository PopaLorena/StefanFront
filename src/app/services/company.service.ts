import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyGet } from 'src/models/companyGet';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  token = localStorage.getItem('jwt');
  header = { Authorization: `Bearer ${this.token}` };
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = "https://localhost:44321/api/company";

  getCompany(): Observable<CompanyGet>{
    return this.httpClient.get(this.baseUrl + '/get') as Observable<CompanyGet>;
  }

}
