import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from './_alert';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportService } from './reports/report.service';
import {  HttpClientModule } from '@angular/common/http';
import { FilterreportComponent } from './reports/filterreport/filterreport.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonthreportComponent } from './reports/monthreport/monthreport.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { DetailreportComponent } from './reports/detailreport/detailreport.component';
import { DieselComponent } from './reports/diesel/diesel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//import { NgxChartsModule }from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    FilterreportComponent,
    MonthreportComponent,
    PageNotFoundComponent,
    DetailreportComponent,
    DieselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlertModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
