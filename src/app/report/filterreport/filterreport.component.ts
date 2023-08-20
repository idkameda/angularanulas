import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterreport',
  templateUrl: './filterreport.component.html',
  styleUrls: ['./filterreport.component.css']
})
export class FilterreportComponent implements OnInit {

  selectedRadioButtonValue: string="2024";

  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  @Input()
  currentMonth: string;

  @Input()
  monthCount: number;

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    console.log(this.selectedRadioButtonValue);
  }
}
