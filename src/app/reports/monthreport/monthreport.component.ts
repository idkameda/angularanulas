import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { IMonthReport } from '../report';
import { ReportService } from '../report.service';
import { MatDialog } from '@angular/material/dialog'; 
import { DieselComponent } from '../diesel/diesel.component';

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
reportData: IMonthReport; 
popupPetrol:boolean=false;
FuelType: string="";
RecID:string="";

  constructor(private dialogRef : MatDialog, private route:ActivatedRoute,
    private router:Router,private _reportService: ReportService) { 
      
    }

  ngOnInit() {
    // debugger;
    // const param=this.route.snapshot.params['MonthExp'];
    // const param2=this.route.snapshot.params['YearExp'];
    // this.selectMonth=param;
    // let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': param2, 'MonthIndex': param })
    //let objOutput;
    // this._reportService.getMonthReport(data)
    //   .subscribe(objOutput => this.reportData = objOutput);
   
    this.loadData();
      
  }

  async loadData()
  {
    const param=this.route.snapshot.params['MonthExp'];
    const param2=this.route.snapshot.params['YearExp'];
    this.selectMonth=param;
    let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': param2, 'MonthIndex': param })
    //let objOutput;
    // this._reportService.getMonthReport(data)
    //   .subscribe(objOutput => this.reportData = objOutput);
    let objOutput = await  this._reportService.getMonthReportasync(data);
    this.reportData = objOutput;

  }
  onBack():void{
    this.router.navigate(['/reports']);
  }

  openDialog(){
    this.dialogRef.open(DieselComponent,{
      data : {
        name : 'Samuel'
      }
    });
  }
  
  getFuelType(FuelType:string):string{
    this.FuelType=FuelType;
    return this.FuelType;
  }

  getRecID(recId:string):string{
    this.RecID=recId;
    return this.RecID;
  }
}
