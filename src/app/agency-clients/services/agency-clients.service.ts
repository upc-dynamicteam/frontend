import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {HiredService} from "../interfaces/hired-service";

@Injectable({
  providedIn: 'root'
})
export class AgencyClientsService {
    //Clients EndPoint
    basePath = 'http://localhost:3000/api/v1/hiredServices'
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
        return throwError('Something happened with reques, please try again later');
    }

    //Create Student
    create(createHiredServiceDto: HiredService): Observable<HiredService> {
        return this.http.post<HiredService>(this.basePath, JSON.stringify(createHiredServiceDto), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }
}
