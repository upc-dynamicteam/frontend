import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AddServiceService {

  constructor(private http: HttpClient) { }

    private headers= new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
   getInfoAgencyById(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/agencies/${id}`;
        return this.http.get<any>(URL);
   }
   createNewService(data: any): Observable<any>{
       const URL = `https://fake-api-go2climb.herokuapp.com/services`;
       return this.http.post<any>(URL, data);
   }
}
