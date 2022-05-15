import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DakarService {

  endpoint: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient, 
    public router: Router
  ) { }

  //Obtener listado de pilotos
  getDakarPilots = (): Observable<any> => {
    let api = `${this.endpoint}/dakar-pilots/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //Obtener detalle del piloto
  getPilot = (pilotId: any): Observable<any> => {
    let api = `${this.endpoint}/dakar-pilot/${pilotId}`
    return this.http.get(api)
  }

  postPilot = (pilot: any): Observable<any> =>{
    let api = `${this.endpoint}/new-pilot`
    return this.http.post(api, pilot)
    .pipe(
      catchError(this.handleError)
    )
  }
    // Manjedaor de errores 
    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }
}
