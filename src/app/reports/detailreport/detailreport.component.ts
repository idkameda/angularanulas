import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { IReport } from '../report';
import { FormBuilder, FormControl, FormGroup,NgForm,ReactiveFormsModule, Validators } from '@angular/forms';
import { ReportService } from '../report.service';
import { AlertService } from 'src/app/_alert';
import { Observable, Subject, of , fromEvent} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detailreport',
  templateUrl: './detailreport.component.html',
  styleUrls: ['./detailreport.component.css']
})
export class DetailreportComponent implements OnInit {
  public clients: Observable<any[]>;
  private searchTerms = new Subject<string>();
  public ClientName = '';
  public flag: boolean = true;
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
filteredOptions:any;
  defaultYear = '2025';
  selectMonth:string="1";
  popup: boolean = false;
  TodaysDate = new Date();
  pageTitle = "Product Details";
  report!: IReport;
  router: any;
  postForm:FormGroup;

  // MyDesc = new FormControl();
suggestions$: Observable<string[]>|undefined;
@ViewChild('carSearchInput') carSearchInput: ElementRef;
@Output() setcarNameEvent = new EventEmitter<{name: string}>();
showSearches: boolean = false;
  
  constructor(private _reportService: ReportService,
    private formBuilder: FormBuilder,
    public alertService: AlertService) {}

    ngOnInit(): void {
      this.postForm = this.formBuilder.group({
        MyDesc: new FormControl(''),
        CrudType:new FormControl('1'),
        TranDate : new FormControl(this.formatDate(new Date())),
        BankDesc: new FormControl(''),
        BankDesc2: new FormControl(''),
        AmtDeducted: new FormControl('',[Validators.required]),
        PaidUsing: new FormControl(''),
        IsInvestment: new FormControl(''),
        FYYear: new FormControl('2025')
      })

      //this.suggestions$ = this.MyDesc.valueChanges.pipe(
      this.suggestions$ = 
      this.postForm.get('MyDesc')?.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => term ? this._reportService.search(term) : of<string[]>([])),
      tap(() =>{this.showSearches = true;}),
      catchError(error => {
        console.error(error);
        return of<string[]>([]);
      })
    );
    }
    get AmtDeducted() { return this.postForm.get('AmtDeducted'); }
    get PaidUsing() { return this.postForm.get('PaidUsing'); }
    get MyDesc() { return this.postForm.get('MyDesc'); }
    private formatDate(date: Date): string {
      const d = new Date(date);
      const month = ('0' + (d.getMonth() + 1)).slice(-2);
      const day = ('0' + d.getDate()).slice(-2);
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    }
  setCarName(name:string) {
    //this.searchedCars = this.filterCars(name);
    this.setcarNameEvent.emit({name});
    this.carSearchInput.nativeElement.value = name;
    this.showSearches = false;
  }

// Push a search term into the observable stream.
searchClient(term: string): void {
  debugger
  this.flag = true;
  this.searchTerms.next(term);
}
onselectClient(ClientObj:any) {   
  debugger;
  if (ClientObj.ClientId != 0) {
    this.ClientName = ClientObj.ClientName;     
    this.flag = false;
    return true;
  }
  else {
    return false;
  }
}

  onBack():void{
    this.router.navigate(['/reports']);
  }

  @ViewChild('myForm', { static: true }) public form: NgForm;
  async onSubmit() {
    // console.log(this.form);
    if (this.postForm.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      this.postForm.markAllAsTouched(); // Mark all controls as touched to trigger validation messages
      console.log('Form is invalid');
      return;
    }

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
    });
    // debugger;
    // const obj=this.postForm.value;
    // let data = JSON.stringify({
    //   'CrudType': '1', 'dtSave': '['+ JSON.stringify(obj)+']'
    // });
    console.log(data);
    let objOutput;
    objOutput = await this._reportService.getReportaync(data);

    if (objOutput == 1) {
      this.alertService.success('Success!!', this.options);
      this.resetForm();
    }
  }
  
  // initForm(){
  //   this.postForm = this.formBuilder.group({
  //     //'MyDesc': ['']
    // CrudType:new FormControl('1'),
    // TranDate : new FormControl(''),
    // BankDesc: new FormControl(''),
    // BankDesc2: new FormControl(''),
    // MyDesc: new FormControl(''),
    // AmtDeducted: new FormControl('0'),
    // PaidUsing: new FormControl(''),
    // IsInvestment: new FormControl('1'),
    // FYYear: new FormControl('')
  //   })
  //   this.postForm.get('MyDesc')?.valueChanges
  //     .pipe(debounceTime(1000))
  //     .subscribe(response => {
  //       if (response && response.length) {
  //         let data = JSON.stringify({ 'CrudType': '0', 'SearchText': response })

  //         this._reportService.getData(response).subscribe(response => {
  //           this.filteredOptions = response;
  //         });
  //         console.log(this.filteredOptions);
  //         this.filteredOptions = this.options;
  //       }
  //       else {
  //         this.filteredOptions = [];
  //       }
  //     })
  // }
  // getNames() {
  //   debugger;
  //   this._reportService.getData('a').subscribe(response => {
  //     this.options = response;
  //   })
  // }
  resetForm() {
    this.postForm.get('BankDesc')?.setValue('');
    this.postForm.get('BankDesc2')?.setValue('');
    this.postForm.get('MyDesc')?.setValue('');
    this.postForm.get('AmtDeducted')?.setValue('');
    this.postForm.get('PaidUsing')?.setValue('');
    this.postForm.get('IsInvestment')?.setValue('');
  }
  clearSearch() {
    this.postForm.get('MyDesc')?.setValue('');
    // this.searchControl.setValue('');
  }
}
