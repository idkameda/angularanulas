import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportService } from './reports/report.service';
import {  HttpClientModule } from '@angular/common/http';
import { FilterreportComponent } from './reports/filterreport/filterreport.component';
import { FormsModule } from '@angular/forms';
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
