import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, retry, throwError } from "rxjs";
import { Agency } from "../interfaces/agency";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {
    //Agencies EndPoint
    basePath = 'https://fake-api-go2climb.herokuapp.com/agencies'
    private baseUrl: string = environment.baseUrl;
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

    //Create agency
    create(createAgencyDto: Agency): Observable<Agency> {
        return this.http.post<Agency>(this.basePath, JSON.stringify(createAgencyDto), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get agency by Id
    getById(id: string): Observable<Agency> {
        return this.http.get<Agency>(`${this.baseUrl}/agencies/${id}`)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Get All agencies
    getAll(): Observable<Agency> {
        return this.http.get<Agency>(this.basePath)
            .pipe(retry(2),
                catchError(this.handleError));
    }

    //Delete agency
    delete(id: number) {
        return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    //Update agency
    update(id: string, updateAgencyDto: Agency): Observable<Agency> {
        return this.http.put<Agency>(`${this.baseUrl}/agencies/${id}`, JSON.stringify(updateAgencyDto), this.httpOptions)
            .pipe(retry(2),
                catchError(this.handleError));
    }
    getServiceById(id: string): Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/services/${id}`;
        return this.http.get<any>(URL);
    }
    getHiredServicesByServiceId(id: string):Observable<any>{
        const URL = `${this.baseUrl}/services/${id}/hired-services`;
        return this.http.get<any>(URL);
    }
    getInfoUserById(id: string):Observable<any>{
        const URL = `https://fake-api-go2climb.herokuapp.com/customers/${id}`;
        return this.http.get<any>(URL);
    }
}
