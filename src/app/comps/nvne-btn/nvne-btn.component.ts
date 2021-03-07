import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-btn',
  templateUrl: './nvne-btn.component.html',
  styleUrls: ['./nvne-btn.component.css']
})
export class NvneBtnComponent implements OnInit {

  @Input() public text:string;

  @Input() public big:string;

  @Input() public type:string;

  @Input() public disabled:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
