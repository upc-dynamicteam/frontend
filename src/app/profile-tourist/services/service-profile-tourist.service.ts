import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ServiceProfileTouristService {

    constructor(private http: HttpClient) { }

    getServicesByUser(id: string): Observable<any> {
        const URL = `https://fake-api-go2climb.herokuapp.com/servicesHired?idUser=${id}`;
        return this.http.get<any>(URL);
    }

}
