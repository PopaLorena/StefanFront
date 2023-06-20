import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarsGet } from 'src/models/carsGet';
import { CarsSave } from 'src/models/carsSave';
import { CarsUpdate } from 'src/models/carsUpdate';


@Injectable({
  providedIn: 'root'
})
export class CarsService {
  token = localStorage.getItem('jwt');
  header = { Authorization: `Bearer ${this.token}` };
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = "https://localhost:44321/api/cars";

  getCars(): Observable<CarsGet[]>{
    return this.httpClient.get(this.baseUrl + '/get') as Observable<CarsGet[]>;
  }

  getCarsById(carId: number): Observable<CarsGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + carId, {headers: this.header}) as Observable<CarsGet>;
  }

  saveCars(newCar: CarsSave): Observable<CarsSave>{
    return this.httpClient.post(this.baseUrl + '/post', newCar, {headers: this.header}) as Observable<CarsSave>;
  }

  deleteCars(carId: number): Observable<null>{
    return this.httpClient.delete(this.baseUrl + '/delete/' + carId, {Headers: this.header}) as unknown as Observable<null>;
  }

  updateCars(carId: number,updateCars: CarsUpdate): Observable<CarsUpdate>{
    return this.httpClient.patch(this.baseUrl + '/edit/' + carId, updateCars, {Headers: this.header}) as Observable<CarsUpdate>;
  }
}
