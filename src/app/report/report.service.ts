import { Injectable } from "@angular/core";
import { IReport } from "./report";
import { Http, Response, URLSearchParams, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ReportService {

    constructor(private _http: Http) {

    }
    getReport(data: any): Observable<any[]> {
        var headers = new Headers();
        //let data=JSON.stringify( {'CrudType': '0', 'YearIndex': '2024', 'MonthIndex':'2024'});
        headers.append('Content-Type', 'application/json');

        return this._http.post('https://localhost:44316/api/MonthlyReport', data, { headers: headers })
            .map((response: Response) => <any[]>response.json());
    }
}