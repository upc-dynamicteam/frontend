import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {
    private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getServicesOffer(): Observable<any>{
      const URL = `${this.baseUrl}/services/isOffer=1`;
      return this.http.get<any>(URL);
  }
  getServicesPopular(): Observable<any>{
      const URL = `${this.baseUrl}/services/isPopular=1`;
      return this.http.get<any>(URL);
  }
  getServices(): Observable<any>{
      const URL = `${this.baseUrl}/services`;
      return this.http.get<any>(URL);
  }
  createAccountCustomer(data: any): Observable<any>{
      const URL = `https://fake-api-go2climb.herokuapp.com/customers`;
      return this.http.post<any>(URL, data);
  }
  createAccountAgency(data: any): Observable<any>{
      const URL = `https://fake-api-go2climb.herokuapp.com/agencies`;
      return this.http.post<any>(URL, data);
  }
  /*signIn(data): Observable<any>{

  }*/

}
