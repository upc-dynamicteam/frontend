import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { HiredService } from "../interfaces/hired-service";

@Injectable({
  providedIn: 'root'
})
export class AgencyClientsService {
    //HiredService EndPoint
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
        return throwError('Something happened with request, please try again later');
    }

    //Create HiredService
    create(createHiredServiceDto: HiredService): Observable<HiredService> {
        return this.http.post<HiredService>(this.basePath, JSON.stringify(createHiredServiceDto), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get HiredService by Id
    getById(id: string): Observable<HiredService> {
        return this.http.get<HiredService>(`${this.basePath}/${id}`)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get All HiredServices
    getAll(): Observable<HiredService> {
        return this.http.get<HiredService>(this.basePath)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get HiredService extend information by agencyId
    getExtendInformation(agencyId: string, category: string): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/api/v1/agencies/${agencyId}/hiredServices?_expand=${category}`)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Delete HiredService
    delete(id: number) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    //Method provisional
    /*
    //Update HiredService
    update(id: number, updateHiredServiceDto: HiredService): Observable<HiredService> {
        return this.http.put<HiredService>(`${this.basePath}/${id}`, JSON.stringify(updateHiredServiceDto), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }
    */
}
