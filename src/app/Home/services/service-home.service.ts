import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceHomeService {

  constructor(private http: HttpClient) { }

  getServicesOffer(): Observable<any>{
      const URL = `https://fake-api-go2climb.herokuapp.com/services?isOffer=1`;
      return this.http.get<any>(URL);
  }
  getServicesPopular(): Observable<any>{
      const URL = `https://fake-api-go2climb.herokuapp.com/services?isPopular=1`;
      return this.http.get<any>(URL);
  }
  getServices(): Observable<any>{
      const URL = `https://fake-api-go2climb.herokuapp.com/services`;
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
