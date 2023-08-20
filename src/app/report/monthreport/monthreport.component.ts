import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-monthreport',
  templateUrl: './monthreport.component.html',
  styleUrls: ['./monthreport.component.css']
})
export class MonthreportComponent implements OnInit {
selectMonth:string;
  constructor(private route:ActivatedRoute,
    private router:Router) { 
      
    }

  ngOnInit() {
    const param=this.route.snapshot.params['MonthExp'];
    this.selectMonth=param;

  }

  onBack():void{
    this.router.navigate(['/report']);
  }
}
