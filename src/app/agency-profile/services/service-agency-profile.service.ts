import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {ServiceOffer} from "../interfaces/service-offer";

@Injectable({
  providedIn: 'root'
})
export class ServiceAgencyProfileService {

    basePath = 'http://localhost:3000/api/v1/serviceOffer'

    constructor(private http: HttpClient) { }

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

    //Get agency by Id
    getById(id: string): Observable<ServiceOffer> {
        return this.http.get<ServiceOffer>(`${this.basePath}/${id}`)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get All agencies
    getAll(): Observable<ServiceOffer> {
        return this.http.get<ServiceOffer>(this.basePath)
            .pipe(retry(2),
                catchError(this.handleError));
    }


}
