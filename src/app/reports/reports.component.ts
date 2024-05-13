import { Component, OnInit, ViewChild } from '@angular/core';
import { IReport } from './report';
import { ReportService } from './report.service';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { AlertService } from '../_alert';
import { DieselComponent } from './diesel/diesel.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportService]
})
export class ReportsComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  reportData: IReport;
  submitted = false;
  retVal: number = 0;
  planModel: any = { start_time: new Date() };

  selectedRadioButtonValue: string = "2025";
  defaultYear = '2025';
  FuelType='Petrol';
  TodaysDate = new Date();
  popup: boolean = false;
  popupPetrol: boolean = false;
  popupPetrol2:boolean=false;
  constructor(private _reportService: ReportService,
    private formBuilder: FormBuilder,
    public alertService: AlertService) {

  }

  postForm!: FormGroup;
  get TranDate() {
    return this.postForm.get('TranDate') as FormControl;
  }
  async ngOnInit(): Promise<void> {
    this.postForm = this.formBuilder.group({
      //TranDate: new FormControl(null, Validators.required),
      TranDate: ['', Validators.required]
      // BankDesc: new FormControl(null, Validators.required)
    });
    this.loadGrid();
    // let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' }] })

    // let objOutput = await this._reportService.getReportaync(data);
    // this.reportData = objOutput;
  }
  async loadGrid(): Promise<void> {
    let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '2024' }] })

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
  //getFuelType='Diesel';
  getFuelType():string{
    return this.FuelType;
  }
  async onReportCountRadioButtonChange(selectedRadioButtonValue: string): Promise<void> {
    this.selectedRadioButtonValue = selectedRadioButtonValue;
    //let data = JSON.stringify({ 'CrudType': '0', 'YearIndex': selectedRadioButtonValue, 'MonthIndex': '1' })
    let data = JSON.stringify({ 'CrudType': '0', 'dtSave': [{ 'YearIndex': this.selectedRadioButtonValue, 'MonthIndex': '1' }] });
    // let objOutput;
    // this._reportService.getReport(data)
    //   .subscribe(objOutput => this.reportData = objOutput);

    let objOutput = await this._reportService.getReportaync(data);
    this.reportData = objOutput;
  }
  @ViewChild('myForm') public form: NgForm;
  async onSubmit() {
    console.log(this.form);

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
    objOutput = await this._reportService.getReportaync(data);

    if (objOutput == 1) {
      this.alertService.success('Success!!', this.options);
      //this.form.reset();
      //this.defaultYear = '2023';
      //this.TodaysDate=new Date();
      // var temp = new Date();
      // temp.setDate(temp.getDate() - 1);
      // this.TodaysDate = temp;
      this.resetForm();
    }
  }

  @ViewChild('myFormPetrol') public formPetrol: NgForm;
  async onSubmitPetrol(){
    console.log(this.formPetrol);

    let data = JSON.stringify({
      'CrudType': '2', 'dtSave': [{
        'TranType':this.FuelType,
        'TranDate': this.formPetrol.value.TranDate,
        'BankDesc': this.formPetrol.value.BankDesc,
        'MyDesc': this.formPetrol.value.MyDesc,
        'AmtDeducted': this.formPetrol.value.AmtDeducted,
        'PaidUsing': this.formPetrol.value.PaidUsing,
        'TotalLitre': this.formPetrol.value.TotalLitre,
        'FYYear': this.formPetrol.value.FYYear,
        'MyLocation':this.formPetrol.value.MyLocation,
        'KMDriven': this.formPetrol.value.KMDriven
      }]
    });
    console.log('data', data);
    let objOutput;
    objOutput = await this._reportService.getReportaync(data);

    debugger;
    if (objOutput == 1) {
      this.alertService.success('Success!!', this.options);
      //this.form.reset();
      //this.defaultYear = '2023';
      //this.TodaysDate=new Date();
      // var temp = new Date();
      // temp.setDate(temp.getDate() - 1);
      // this.TodaysDate = temp;
      this.resetForm();
    }
  }

  resetForm() {
    this.form.controls['BankDesc'].reset();
    this.form.controls['BankDesc2'].reset();
    this.form.controls['MyDesc'].reset();
    this.form.controls['AmtDeducted'].reset();
    this.form.controls['PaidUsing'].reset();
    this.form.controls['IsInvestment'].reset();
  }
  //<input type="text" (change)="onSearchChange($event)" />
  onSearchChange(event: any): void {
    console.log(event.target.value);
    this.defaultYear = event.target.value;
  }

}
