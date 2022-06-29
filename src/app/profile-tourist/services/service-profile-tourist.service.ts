import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ServiceProfileTouristService {
    private baseUrl: string = environment.baseUrl;
    constructor(private http: HttpClient) { }

    getHiredServicesByIdTourist(id: string): Observable<any> {
        const URL = `${this.baseUrl}/hired-services/touristId=${id}`;
        return this.http.get<any>(URL);
    }
    updateInfoUser(id: string, data: any): Observable<any>{
        const URL = `${this.baseUrl}/tourists/${id}`;
        return this.http.put<any>(URL, data);
    }
    updateHiredService(idService: string, idTourist: string, idHiredService: string, data: any): Observable<any>{
        const URL = `${this.baseUrl}/services/${idService}/hired-services/touristId=${idTourist}/${idHiredService}`;
        return this.http.put<any>(URL, data);
    }
    createAgencyReview(data: any, idAgency: string, idTourist: string): Observable<any>{
        const URL = `${this.baseUrl}/agencies/${idAgency}/agency-reviews/touristId=${idTourist}`;
        return this.http.post<any>(URL, data);
    }
    createServiceReview(data: any, idService: string, idTourist: string):Observable<any>{
        const URL = `${this.baseUrl}/services/${idService}/service-reviews/touristId=${idTourist}`;
        return this.http.post<any>(URL, data);
    }
    getInfoUserById(id: string): Observable<any> {
        const URL = `${this.baseUrl}/tourists/${id}`;
        return this.http.get<any>(URL);
    }

}
