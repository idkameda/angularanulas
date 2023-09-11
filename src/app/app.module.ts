import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from './_alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportService } from './reports/report.service';
import {  HttpClientModule } from '@angular/common/http';
import { FilterreportComponent } from './reports/filterreport/filterreport.component';
<<<<<<< HEAD
<<<<<<< HEAD
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
import { MonthreportComponent } from './reports/monthreport/monthreport.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { DetailreportComponent } from './reports/detailreport/detailreport.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    FilterreportComponent,
    MonthreportComponent,
    PageNotFoundComponent,
    DetailreportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
<<<<<<< HEAD
    FormsModule,
    AlertModule,
    ReactiveFormsModule
=======
    FormsModule
>>>>>>> 627e71c (25Aug23 commit with month report)
=======
    FormsModule,
    AlertModule,
    ReactiveFormsModule
>>>>>>> 9da6257 (11-Sep-23 Working copy committed.)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
