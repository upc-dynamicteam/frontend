import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

   private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

   getInfoAgencyById(id: string): Observable<any> {
        const URL = `${this.baseUrl}/agencies/${id}`;
        return this.http.get<any>(URL);
   }
   createNewService(data: any, idAgency: string): Observable<any>{
       const URL = `${this.baseUrl}/agencies/${idAgency}/services`;
       return this.http.post<any>(URL, data);
   }
}
