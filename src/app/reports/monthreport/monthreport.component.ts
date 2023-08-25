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
    const param=this.route.snapshot.params['MonthExp'];
    const param2=this.route.snapshot.params['YearExp'];
    this.selectMonth=param;
    let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': param, 'MonthIndex': param2 })
    let objOutput;
    this._reportService.getReport(data)
      .subscribe(objOutput => this.reportData = objOutput);
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }
}
