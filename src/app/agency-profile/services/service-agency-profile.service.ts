import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceAgencyProfileService {

  constructor(private http: HttpClient) { }

    getServicesByAgencyId(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/services?agencyId=${id}`;
        return this.http.get<any>(URL);
    }
    getReviewsAgencyById(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/agencyReviews?agencyId=${id}`;
        return this.http.get<any>(URL);
    }
    getInfoAgencyById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/agencies/${id}`;
        return this.http.get<any>(URL);
    }
    getCustomerInfoById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/customers/${id}`;
        return this.http.get<any>(URL);
    }
    deleteServiceById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/services/${id}`;
        return this.http.delete<any>(URL);
    }
}

