import { Injectable } from "@angular/core";
import { IReport } from "./report";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError, catchError } from "rxjs"; 
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ReportService {
private reportUrl='https://localhost:44316/api/MonthlyReport';
    constructor(private _http: HttpClient) {

    }
    getReport(data: any): Observable<IReport[]> {
       // var headers = new Headers();
        //let data=JSON.stringify( {'CrudType': '0', 'YearIndex': '2024', 'MonthIndex':'2024'});
      //  headers.append('Content-Type', 'application/json');

        let headers = new HttpHeaders({
            'Content-Type': 'application/json'  });
        let options = { headers: headers };

        // return this._http.post('https://localhost:44316/api/MonthlyReport', data, { headers: headers })
        //     .map((response: Response) => <any[]>response.json());

        return this._http.post<IReport[]>(this.reportUrl, data, options )
        .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
    }
    getMonthReport(data: any): Observable<IReport[]> {
        // var headers = new Headers();
         //let data=JSON.stringify( {'CrudType': '0', 'YearIndex': '2024', 'MonthIndex':'2024'});
       //  headers.append('Content-Type', 'application/json');
 
         let headers = new HttpHeaders({
             'Content-Type': 'application/json'  });
         let options = { headers: headers };
 
         // return this._http.post('https://localhost:44316/api/MonthlyReport', data, { headers: headers })
         //     .map((response: Response) => <any[]>response.json());
 
         return this._http.post<IReport[]>(this.reportUrl, data, options )
         .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
     }
    private handleError(err: any) {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            //A client-side or network error occured. Handle it accordingly.
            errorMessage = `An error occured:${err.error.message}`
        } else {
            //Backend returned an unsuccessful response code.
            //The response body may contain clues to what went wrong.
            errorMessage = `Backend retured code ${err.status}:${err.body.catchError}`
        }
        console.error(err);
        return throwError(errorMessage);
    }
}