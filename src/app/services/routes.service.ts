import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoutesGet } from 'src/models/routesGet';
import { RoutesSave } from 'src/models/routesSave';
import { RoutesUpdate } from 'src/models/routesUpdate';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  token = localStorage.getItem('jwt');
  header = { Authorization: `Bearer ${this.token}` };
  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = "https://localhost:44321/api/routes";

  getRoutes(): Observable<RoutesGet[]>{
    return this.httpClient.get(this.baseUrl + '/get') as Observable<RoutesGet[]>;
  }

  getRoutesById(routesId: number): Observable<RoutesGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + routesId, {headers: this.header}) as Observable<RoutesGet>;
  }

  getRoutesBySearchRoute(routeDestination: string, routeDeparture:string, routePeriod: Date, routePasNumber: number): Observable<RoutesGet>{
    return this.httpClient.get(this.baseUrl + '/get/' + routeDestination + '/' + routeDeparture + '/' + routePeriod + '/' + routePasNumber, {headers: this.header}) as Observable<RoutesGet>;
  }

  saveRoutes(newRoute: RoutesSave): Observable<RoutesSave>{
    return this.httpClient.post(this.baseUrl + '/post', newRoute, {headers: this.header}) as Observable<RoutesSave>;
  }

  deleteRoutes(routeId: number): Observable<null>{
    return this.httpClient.delete(this.baseUrl + '/delete/' + routeId, {Headers: this.header}) as unknown as Observable<null>;
  }

  updateRoutes(routeId: number,updateRoutes: RoutesUpdate): Observable<RoutesUpdate>{
    return this.httpClient.patch(this.baseUrl + '/edit/' + routeId, updateRoutes, {Headers: this.header}) as Observable<RoutesUpdate>;
  }
}