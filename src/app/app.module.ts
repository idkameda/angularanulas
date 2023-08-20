import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './report/report.service';
import { FilterreportComponent } from './report/filterreport/filterreport.component';
import { ExpenseComponent } from './expense/expense.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { MonthreportComponent } from './report/monthreport/monthreport.component';

const appRoutes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: 'monthreport/:MonthExp', component: MonthreportComponent },
  { path: 'expense', component: ExpenseComponent },
  { path: '', redirectTo: 'report', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    FilterreportComponent,
    ExpenseComponent, PageNotFoundComponent, MonthreportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ReportService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
