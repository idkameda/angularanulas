<<<<<<< HEAD
<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { IReport } from './report';
import { ReportService } from './report.service';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { AlertService } from '../_alert';
=======
import { Component, OnInit } from '@angular/core';
import { IReport } from './report';
import { ReportService } from './report.service';
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { IReport } from './report';
import { ReportService } from './report.service';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { AlertService } from '../_alert';
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportService]
})
export class ReportsComponent implements OnInit {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
  options = {
    autoClose: true,
    keepAfterRouteChange: false
};
  reportData: IReport;
  submitted = false;
  retVal: number = 0;
  planModel: any = {start_time: new Date() };
<<<<<<< HEAD

  selectedRadioButtonValue: string = "2024";
  defaultYear = '2024';
  popup: boolean = false;
  constructor(private _reportService: ReportService, private formBuilder: FormBuilder,
    public alertService: AlertService) { }

  postForm!: FormGroup;
  get TranDate() {
    return this.postForm.get('TranDate') as FormControl;
  }
  async ngOnInit(): Promise<void>  {
    this.postForm = this.formBuilder.group({
      //TranDate: new FormControl(null, Validators.required),
      TranDate: ['', Validators.required]
      // BankDesc: new FormControl(null, Validators.required)
    });

    let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' }] })
    //let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' })
    // let objOutput;
    // this._reportService.getReport(data)
    //   .subscribe((objOutput) => {
    //     this.reportData = objOutput;
    //   });
    
    let objOutput = await this._reportService.getReportaync(data);
    this.reportData = objOutput;
  }

  get f() { return this.postForm.controls; }

  getMonthCount(): number {
    // if (this.reportData != undefined)
    //   return this.reportData.Table.length;
    // else
    return 0;
  }
  async onReportCountRadioButtonChange(selectedRadioButtonValue: string):  Promise<void> {
    this.selectedRadioButtonValue = selectedRadioButtonValue;
    //let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': selectedRadioButtonValue, 'MonthIndex': '1' })
    let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '1' }] });
    // let objOutput;
    // this._reportService.getReport(data)
    //   .subscribe(objOutput => this.reportData = objOutput);
    
    let objOutput = await this._reportService.getReportaync(data);
    this.reportData = objOutput;
  }
  @ViewChild('myForm') form: NgForm;
  async onSubmit() {
    console.log(this.form);
    //console.log(this.form.value.TranDate);

    let data = JSON.stringify({
      'CrudType': '1', 'dtSave': [{
        'TranDate': this.form.value.TranDate,
        'BankDesc': this.form.value.BankDesc,
        'BankDesc2': this.form.value.BankDesc2,
        'MyDesc': this.form.value.MyDesc,
        'AmtDeducted': this.form.value.AmtDeducted,
        'PaidUsing': this.form.value.PaidUsing,
        'IsInvestment': this.form.value.IsInvestment,
        'FYYear': this.form.value.FYYear
      }]
    })
    let objOutput;
    objOutput =await this._reportService.getReportaync(data);

    debugger;
    if (objOutput == 1) {
      this.defaultYear = '2024';
      this.alertService.success('Success!!', this.options);
      this.form.reset();
    }
  }
=======
=======
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)

  selectedRadioButtonValue: string = "2024";
  defaultYear = '2024';
  popup: boolean = false;
  constructor(private _reportService: ReportService, private formBuilder: FormBuilder,
    public alertService: AlertService) { }

  postForm!: FormGroup;
  get TranDate() {
    return this.postForm.get('TranDate') as FormControl;
  }
  async ngOnInit(): Promise<void>  {
    this.postForm = this.formBuilder.group({
      //TranDate: new FormControl(null, Validators.required),
      TranDate: ['', Validators.required]
      // BankDesc: new FormControl(null, Validators.required)
    });

    let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' }] })
    //let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' })
    // let objOutput;
    // this._reportService.getReport(data)
    //   .subscribe((objOutput) => {
    //     this.reportData = objOutput;
    //   });
    
    let objOutput = await this._reportService.getReportaync(data);
    this.reportData = objOutput;
  }

  get f() { return this.postForm.controls; }

  getMonthCount(): number {
    // if (this.reportData != undefined)
    //   return this.reportData.Table.length;
    // else
    return 0;
  }
  async onReportCountRadioButtonChange(selectedRadioButtonValue: string):  Promise<void> {
    this.selectedRadioButtonValue = selectedRadioButtonValue;
    //let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': selectedRadioButtonValue, 'MonthIndex': '1' })
    let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '1' }] });
    // let objOutput;
    // this._reportService.getReport(data)
    //   .subscribe(objOutput => this.reportData = objOutput);
    
    let objOutput = await this._reportService.getReportaync(data);
    this.reportData = objOutput;
  }
  @ViewChild('myForm') form: NgForm;
  async onSubmit() {
    console.log(this.form);
    //console.log(this.form.value.TranDate);

<<<<<<< HEAD
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
    let data = JSON.stringify({
      'CrudType': '1', 'dtSave': [{
        'TranDate': this.form.value.TranDate,
        'BankDesc': this.form.value.BankDesc,
        'BankDesc2': this.form.value.BankDesc2,
        'MyDesc': this.form.value.MyDesc,
        'AmtDeducted': this.form.value.AmtDeducted,
        'PaidUsing': this.form.value.PaidUsing,
        'IsInvestment': this.form.value.IsInvestment,
        'FYYear': this.form.value.FYYear
      }]
    })
    let objOutput;
    objOutput =await this._reportService.getReportaync(data);

    debugger;
    if (objOutput == 1) {
      this.defaultYear = '2024';
      this.alertService.success('Success!!', this.options);
      this.form.reset();
    }
  }
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
}
