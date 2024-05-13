import { Injectable } from "@angular/core";
import { IReport, IMonthReport } from "./report";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, throwError, catchError } from "rxjs"; 
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})
export class ReportService {
private reportUrl='http://localhost:88/api/MonthlyReport';
private reportMonthlyUrl='http://localhost:88/api/MonthlyReportDetails';
    constructor(private _http: HttpClient) {

    }
     getReport(data: any): Observable<any> {
       // var headers = new Headers();
        //let data=JSON.stringify( {'CrudType': '0', 'YearIndex': '2024', 'MonthIndex':'2024'});
      //  headers.append('Content-Type', 'application/json');

        let headers = new HttpHeaders({
            'Content-Type': 'application/json'  });
        let options = { headers: headers };

        // return this._http.post('http://localhost:88/api/MonthlyReport', data, { headers: headers })
        //     .map((response: Response) => <any[]>response.json());

        return this._http.post(this.reportUrl, data, options )
        .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
    }
    async getReportaync(data: any): Promise<any> {
        debugger
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
 
         // return this._http.post('http://localhost:88/api/MonthlyReport', data, { headers: headers })
         //     .map((response: Response) => <any[]>response.json());
 
         return this._http.post('http://localhost:88/api/MonthlyReportDetails', data, options )
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
    // return this._http.get('http://localhost:88/api/MonthlyReportDetails', 
    // {
    //   params: new HttpParams()
    //   .set('SearchText', data)
    //   }).pipe(
    //     map((response:[]) => response.map(item => item['MyDesc']))
    //   )

      return this._http.post('http://localhost:88/api/MonthlyReportDetails', data )
         .pipe(tap((data: any) => console.log(JSON.stringify(data))), catchError(this.handleError))
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