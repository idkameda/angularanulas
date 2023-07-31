import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';
import { FilterreportComponent } from './report/filterreport/filterreport.component'; 
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    FilterreportComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ReportService],
  bootstrap: [ReportComponent]
})
export class AppModule { }
