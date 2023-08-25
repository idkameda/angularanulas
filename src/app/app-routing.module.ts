import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthreportComponent } from './reports/monthreport/monthreport.component';
import { ReportsComponent } from './reports/reports.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';

const routes: Routes = [
      { path: 'monthreport/:MonthExp/:YearExp', component: MonthreportComponent },
    { path: 'reports', component: ReportsComponent },
    { path: '', redirectTo: '/reports', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
