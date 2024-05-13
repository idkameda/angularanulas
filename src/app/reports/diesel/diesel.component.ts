import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ReportService } from '../report.service';
import { AlertService } from 'src/app/_alert';
import { Table3 } from '../report';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.component.html',
  styleUrls: ['./diesel.component.css']
})
export class DieselComponent implements OnInit {
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  @Input()
  FuelType: string;
  @Input()
  RecID: string;
  defaultYear = '2025';
  CrudType: string;
  TodaysDate = new Date();
  selectedRadioButtonValue: string = "2025";
  popupPetrol: boolean = false;
  reportData: Table3;
  xBankDesc: string;
  xMyDesc: string;
  xMyLocation:string;
  xAmtDeducted:number;
  xTotalLitre:number;
  xPaidUsing:string;
  xKMDriven:number;

  constructor(private _reportService: ReportService,
    private formBuilder: FormBuilder,
    public alertService: AlertService) {
  }

  ngOnInit(): void {
    debugger;
    this.loadData();
  }
  async loadData(): Promise<void> {
    if (this.RecID != "0") {
      if (this.FuelType == 'Diesel')
        this.CrudType = '4';
      else
        this.CrudType = '3';
    }
    let data = JSON.stringify({ 'CrudType': this.CrudType, 'YearIndex': this.RecID, 'MonthIndex': '0' })

    let objOutput = await this._reportService.getMonthReportasync(data);
    this.reportData = objOutput[0];
    this.xBankDesc = objOutput[0].BankDesc;
    this.xMyDesc = objOutput[0].MyDesc;
    this.xMyLocation=objOutput[0].MyLocation;
    this.xAmtDeducted=objOutput[0].TotalPaid;
    this.xTotalLitre=objOutput[0].TotalLitre;
    this.xPaidUsing=objOutput[0].PaidUsing;
    this.xKMDriven=objOutput[0].KMDriven;
    this.TodaysDate= new Date(objOutput[0].FillingDate);
  }

  @ViewChild('myForm') public form: NgForm;
  @ViewChild('myFormPetrol') public formPetrol: NgForm;
  async onSubmitPetrol() {
    console.log(this.formPetrol);

    let data = JSON.stringify({
      'CrudType': '2', 'dtSave': [{
        'TranType': this.FuelType,
        'TranDate': this.formPetrol.value.TranDate,
        'BankDesc': this.formPetrol.value.BankDesc,
        'MyDesc': this.formPetrol.value.MyDesc,
        'AmtDeducted': this.formPetrol.value.AmtDeducted,
        'PaidUsing': this.formPetrol.value.PaidUsing,
        'TotalLitre': this.formPetrol.value.TotalLitre,
        'FYYear': this.formPetrol.value.FYYear,
        'MyLocation': this.formPetrol.value.MyLocation,
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
    this.formPetrol.controls['BankDesc'].reset();
    this.formPetrol.controls['MyDesc'].reset();
    this.formPetrol.controls['MyLocation'].reset();
    this.formPetrol.controls['AmtDeducted'].reset();
    this.formPetrol.controls['PaidUsing'].reset();
    this.formPetrol.controls['TotalLitre'].reset();
    this.formPetrol.controls['KMDriven'].reset();
  }
}
