import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceAgencyService {

   constructor(private http: HttpClient) { }

   getInfoServiceById(id: string): Observable<any> {
       const URL = `https://fake-api-go2climb.herokuapp.com/services/${id}`;
       return this.http.get<any>(URL);
   }
   getInfoAgencyById(id:string): Observable<any> {
       const URL = `https://fake-api-go2climb.herokuapp.com/agencies/${id}`;
       return this.http.get<any>(URL);
   }
   getReviewServiceByIdService(id: string): Observable<any>{
       const URL = `https://fake-api-go2climb.herokuapp.com/serviceReviews?serviceId=${id}`;
       return this.http.get<any>(URL);
   }
   getInfoCustomerById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/customers/${id}`;
        return this.http.get<any>(URL);
    }
}
