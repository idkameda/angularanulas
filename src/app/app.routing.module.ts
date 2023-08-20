import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthreportComponent } from './report/monthreport/monthreport.component';
import { ReportComponent } from './report/report.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';

const appRoutes: Routes = [
    // { path: 'monthreport', component: MonthreportComponent },
    // { path: 'report', component: ReportComponent },
    // { path: '', redirectTo: '/report', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [AppComponent],
    //bootstrap: [AppComponent]
})
export class AppModule { }