import { Component, OnInit } from '@angular/core';
import { IReport } from '../report';
<<<<<<< HEAD
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 627e71c (25Aug23 commit with month report)

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
<<<<<<< HEAD
  postForm:FormGroup;
=======
>>>>>>> 627e71c (25Aug23 commit with month report)
  constructor() { }

  ngOnInit(): void {
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }
<<<<<<< HEAD
=======

>>>>>>> 627e71c (25Aug23 commit with month report)
}
