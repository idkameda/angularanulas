import { Component, OnInit } from '@angular/core';
import { IReport } from './report';
import { ReportService } from './report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportService]
})
export class ReportsComponent implements OnInit {

  reportData: IReport[]=[];
  selectedRadioButtonValue: string = "2024";
  constructor(private _reportService: ReportService) { }


  ngOnInit() {
    let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' })
    let objOutput;
    this._reportService.getReport(data)
      .subscribe(objOutput => this.reportData = objOutput);
      console.log(objOutput);
    //this.reportData = objOutput;
  }
  getMonthCount(): number {
    // if (this.reportData != undefined)
    //   return this.reportData.filter(e => e.Expense > 1000).length;
    // else
      return 0;
  }
  onReportCountRadioButtonChange(selectedRadioButtonValue: string): void {
    //this.selectedRadioButtonValue=selectedRadioButtonValue;
    let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': selectedRadioButtonValue, 'MonthIndex': '2024' })
    let objOutput;
    this._reportService.getReport(data)
      .subscribe(objOutput => this.reportData = objOutput);
    console.log(objOutput);
  }

}
