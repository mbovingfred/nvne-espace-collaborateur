import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  constructor() { }

  public minDate:string;

  setMinDate(){
    const format = 'yyyy-MM-dd';
    const myDate = Date.now() - (18*1000*60*60*24*365);
    const locale = 'fr-FR';
    // const t:Time = {"hours": 10, "minutes":0};
    this.minDate = formatDate(myDate, format, locale);
    console.log(this.minDate);
  }

  ngOnInit(): void {
    this.setMinDate();
  }

}
