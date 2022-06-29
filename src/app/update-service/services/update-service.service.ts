import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {
    private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

    getInfoServiceById(id: string): Observable<any>{
        const URL = `${this.baseUrl}/services/${id}`;
        return this.http.get<any>(URL);
    }
    updateInfoServiceById(idAgency: string, idService: string, data: any): Observable<any>{
        const URL = `${this.baseUrl}/agencies/${idAgency}/services/${idService}`;
        return this.http.put<any>(URL, data);
    }
}
