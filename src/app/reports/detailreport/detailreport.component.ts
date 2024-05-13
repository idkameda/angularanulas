import { Component, OnInit, ViewChild } from '@angular/core';
import { IReport } from '../report';
import { FormBuilder, FormGroup,NgForm,ReactiveFormsModule } from '@angular/forms';
import { ReportService } from '../report.service';
import { AlertService } from 'src/app/_alert';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-detailreport',
  templateUrl: './detailreport.component.html',
  styleUrls: ['./detailreport.component.css']
})
export class DetailreportComponent implements OnInit {
  options = {
  autoClose: true,
  keepAfterRouteChange: false
};
filteredOptions:any;
  defaultYear = '2025';
  optionss = ["Sam", "Varun", "Jasmine"];
  selectMonth:string="1";
  popup: boolean = false;
  TodaysDate = new Date();
  pageTitle = "Product Details";
  report!: IReport;
  router: any;
  postForm:FormGroup;
  constructor(private _reportService: ReportService,
    private formBuilder: FormBuilder,
    public alertService: AlertService) { }

  ngOnInit(): void {
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }

  filterData(enteredData:string){
    console.log('entered text-',enteredData);
    this.filteredOptions = this.optionss.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
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
  
  initForm(){
    /*
    // this.formGroup = this.fb.group({
    //   'employee' : ['']
    // })
    this.form.get('employee').valueChanges
    .pipe(debounceTime(1000))
    .subscribe(response => {
      //console.log('data is ', response);
      if(response && response.length)
      {
      //this.filterData(response);
      let data = JSON.stringify({ 'CrudType': '0', 'SearchText': response})

      this.service.getData(response).subscribe(response => {
        this.filteredOptions = response;});
        console.log(this.filteredOptions);
        this.filteredOptions=this.options;
      }
      else{
        this.filteredOptions=[];
      }
    })*/
  }
  resetForm() {
    this.form.controls['BankDesc'].reset();
    this.form.controls['BankDesc2'].reset();
    this.form.controls['MyDesc'].reset();
    this.form.controls['AmtDeducted'].reset();
    this.form.controls['PaidUsing'].reset();
    this.form.controls['IsInvestment'].reset();
  }
}
