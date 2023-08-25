import { Component, OnInit } from '@angular/core';
import { IReport } from '../report';

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
  constructor() { }

  ngOnInit(): void {
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }

}
