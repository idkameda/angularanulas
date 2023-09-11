import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IMonthReport } from '../report';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-monthreport',
  templateUrl: './monthreport.component.html',
  styleUrls: ['./monthreport.component.css']
})
export class MonthreportComponent implements OnInit {
selectMonth:string="1";
pageTitle = "Product Details";
report!: IMonthReport;
errorMessage: string = "";
reportData: IMonthReport[]=[]; 

  constructor(private route:ActivatedRoute,
    private router:Router,private _reportService: ReportService) { 
      
    }

  ngOnInit() {
<<<<<<< HEAD
<<<<<<< HEAD
    debugger;
    const param=this.route.snapshot.params['MonthExp'];
    const param2=this.route.snapshot.params['YearExp'];
    this.selectMonth=param;
    let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': param2, 'MonthIndex': param })
    let objOutput;
    this._reportService.getMonthReport(data)
=======
=======
    debugger;
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
    const param=this.route.snapshot.params['MonthExp'];
    const param2=this.route.snapshot.params['YearExp'];
    this.selectMonth=param;
    let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': param2, 'MonthIndex': param })
    let objOutput;
<<<<<<< HEAD
    this._reportService.getReport(data)
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
    this._reportService.getMonthReport(data)
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
      .subscribe(objOutput => this.reportData = objOutput);
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }
}
