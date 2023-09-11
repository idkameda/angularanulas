import { Component, OnInit } from '@angular/core';
import { IReport } from '../report';
<<<<<<< HEAD
<<<<<<< HEAD
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
import { FormGroup,ReactiveFormsModule } from '@angular/forms';
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)

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
<<<<<<< HEAD
  postForm:FormGroup;
=======
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
  postForm:FormGroup;
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
  constructor() { }

  ngOnInit(): void {
  }

  onBack():void{
    this.router.navigate(['/reports']);
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 627e71c (25Aug23 commit with month report)
=======
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
}
