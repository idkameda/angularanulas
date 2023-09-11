import { Component, OnInit } from '@angular/core';
import { IReport } from '../report';
import { FormGroup,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detailreport',
  templateUrl: './detailreport.component.html',
  styleUrls: ['./detailreport.component.css']
})
export class DetailreportComponent implements OnInit {
  selectMonth:string="1";
  pageTitle = "Product Details";
  report!: IReport;
  router: any;
  postForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }
}
