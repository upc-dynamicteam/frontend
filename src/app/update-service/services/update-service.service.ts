import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  constructor(private http: HttpClient) { }

    getInfoServiceById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/services/${id}`;
        return this.http.get<any>(URL);
    }
    updateInfoServiceById(id: string, data: any): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/services/${id}`;
        return this.http.patch<any>(URL, data);
    }
}
