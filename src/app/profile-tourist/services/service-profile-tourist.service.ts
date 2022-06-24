import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceProfileTouristService {

    constructor(private http: HttpClient) { }

    getServicesByUser(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/hiredServices?customerId=${id}`;
        return this.http.get<any>(URL);
    }
    getServiceInfoById(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/services/${id}`;
        return this.http.get<any>(URL);
    }
    getAgencyInfoById(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/agencies/${id}`;
        return this.http.get<any>(URL);
    }
    updateInfoUser(id: string, data: any): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/customers/${id}`;
        return this.http.put<any>(URL, data);
    }
    updateHiredService(id: string, data: any): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/hiredServices/${id}`;
        return this.http.put<any>(URL, data);
    }
    createAgencyReview(data: any): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/agencyReviews`;
        return this.http.post<any>(URL, data);
    }
    createServiceReview(data: any):Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/serviceReviews`;
        return this.http.post<any>(URL, data);
    }
    getInfoUserById(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/customers/${id}`;
        return this.http.get<any>(URL);
    }

}
