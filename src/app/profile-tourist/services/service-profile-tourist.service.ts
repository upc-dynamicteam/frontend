import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceProfileTouristService {

    constructor(private http: HttpClient) { }

    getServicesByUser(id: string): Observable<any> {
        const URL = `http://localhost:3000/api/v1/servicesHired?idUser=${id}`;
        return this.http.get<any>(URL);
    }

}
