import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceAgencyService {

    private baseUrl: string = environment.baseUrl;

   constructor(private http: HttpClient) { }

   getInfoServiceById(id: string): Observable<any> {
       const URL = `${this.baseUrl}/services/${id}`;
       return this.http.get<any>(URL);
   }
   getInfoAgencyById(id:string): Observable<any> {
       const URL = `https://fake-api-go2climb.herokuapp.com/agencies/${id}`;
       return this.http.get<any>(URL);
   }
   getReviewServiceByIdService(id: string): Observable<any>{
       const URL = `${this.baseUrl}/services/${id}/service-reviews`;
       return this.http.get<any>(URL);
   }
   getInfoCustomerById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/customers/${id}`;
        return this.http.get<any>(URL);
    }
}
