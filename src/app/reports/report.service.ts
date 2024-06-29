import { Injectable } from "@angular/core";
import { IReport, IMonthReport } from "./report";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError, catchError,of } from "rxjs"; 
import { map, tap } from 'rxjs/operators';
import { Data } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class ReportService {
private reportUrl='https://localhost:44316/api/MonthlyReport';
private reportMonthlyUrl='https://localhost:44316/api/MonthlyReportDetails';
    constructor(private _http: HttpClient) {

    }
     getReport(data: any): Observable<any> {
       // var headers = new Headers();
        //let data=JSON.stringify( {'CrudType': '0', 'YearIndex': '2024', 'MonthIndex':'2024'});
      //  headers.append('Content-Type', 'application/json');

        let headers = new HttpHeaders({
            'Content-Type': 'application/json'  });
        let options = { headers: headers };

        // return this._http.post('https://localhost:44316/api/MonthlyReport', data, { headers: headers })
        //     .map((response: Response) => <any[]>response.json());

        return this._http.post(this.reportUrl, data, options )
        .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
    }
    async getReportaync(data: any): Promise<any> {
        let headers = new HttpHeaders({
            'Content-Type': 'application/json'  });
        let options = { headers: headers };
         
             try {
            let res = this._http
              .post(this.reportUrl, data, options).toPromise();
            return res;
          } catch (error) {
            console.error(error);
          }
     }

    getMonthReport(data: any): Observable<any> {
        // var headers = new Headers();
         //let data=JSON.stringify( {'CrudType': '0', 'YearIndex': '2024', 'MonthIndex':'2024'});
       //  headers.append('Content-Type', 'application/json');
 
         let headers = new HttpHeaders({
             'Content-Type': 'application/json'  });
         let options = { headers: headers };
 
         // return this._http.post('https://localhost:44316/api/MonthlyReport', data, { headers: headers })
         //     .map((response: Response) => <any[]>response.json());
 
         return this._http.post('https://localhost:44316/api/MonthlyReportDetails', data, options )
         .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
     }
     async getMonthReportasync(data: any): Promise<any> {
         debugger
         let headers = new HttpHeaders({
             'Content-Type': 'application/json'  });
         let options = { headers: headers };
          
              try {
             let res = this._http
               .post(this.reportMonthlyUrl, data, options).toPromise();
             return res;
           } catch (error) {
             console.error(error);
           }
      }
      
  getData(data:string){
    // return this._http.get(this.reportMonthlyUrl + '?SearchText=' + data)
    //      .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
      
    // return this._http.get('https://localhost:44316/api/MonthlyReportDetails', 
    //   {
    //     params: new HttpParams()
    //     .set('SearchText', data)
    //     }).pipe(
    //       map((response:any) => response.map(<Data[]>response.json()))
    //     )
    const params = new HttpParams().set('SearchText', data);
    return this._http.get<any[]>('https://localhost:44316/api/MonthlyReportDetails', { params }).pipe(
      map(response => response.map(item => item['MyDesc']))
    );

  }

//   search(term: string): Observable<any[]> {
//     return this._http.get(this.reportMonthlyUrl + '?SearchText=' + term)
//          .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
// }
search(term: string): Observable<string[]> {
  debugger;
  if (!term.trim()) {
    return of([]);
  }
  return this._http.get<any[]>(`${'https://localhost:44316/api/MonthlyReportDetails'}?SearchText=${term}`).pipe(
    map(response => response.map(item => item['MyDesc'])),
    catchError(this.handleError2<string[]>('search', []))
  );
}

private handleError2<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); // Log the error
    return of(result as T); // Return an empty result to keep the app running
  };
}
  // .map((response: Response) => <any[]>response.json());
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
