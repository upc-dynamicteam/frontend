import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Service } from "../interfaces/service";
import {Agency} from "../../agency-clients/interfaces/agency";

@Injectable({
    providedIn: 'root'
})
export class ServiceDetailsService {
    //Services EndPoint
    basePath = 'https://fake-api-go2climb.herokuapp.com/services'

    constructor(private http: HttpClient) { }

    //HTTP Default options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    //API Error Handling
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            //Default error handling
            console.error('An error occurred: ', error.error.message);
        } else {
            //Unsuccessful Response Error Code returned from Backend
            console.error(
                `Backend returned code ${error.status}, body was: ${error.error}`
            );
        }
        // Return Observable with Error Message to Client
        return throwError('Something happened with request, please try again later');
    }

    getAll(): Observable<Service> {
        return this.http.get<Service>(this.basePath)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    getById(id: string): Observable<Service> {
        return this.http.get<Service>(`${this.basePath}/${id}`)
            .pipe(retry(2),
                catchError(this.handleError));
    }
}
