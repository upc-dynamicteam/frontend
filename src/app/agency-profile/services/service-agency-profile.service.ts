import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ServiceAgencyProfileService {
    private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

    getServicesByAgencyId(id: string): Observable<any> {
        const URL = `${this.baseUrl}/agencies/${id}/services`;
        return this.http.get<any>(URL);
    }
    getReviewsAgencyById(id: string): Observable<any> {
        const URL = `${this.baseUrl}/agencies/${id}/agency-reviews`;
        return this.http.get<any>(URL);
    }
    getInfoAgencyById(id: string): Observable<any>{
        const URL = `${this.baseUrl}/agencies/${id}`;
        return this.http.get<any>(URL);
    }
    deleteServiceById(idAgency: string, idService: string): Observable<any>{
        const URL = `${this.baseUrl}/agencies/${idAgency}/services/${idService}`;
        return this.http.delete<any>(URL);
    }
}

