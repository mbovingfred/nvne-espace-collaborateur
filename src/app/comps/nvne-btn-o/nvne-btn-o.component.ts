import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-btn-o',
  templateUrl: './nvne-btn-o.component.html',
  styleUrls: ['./nvne-btn-o.component.css']
})
export class NvneBtnOComponent implements OnInit {

  @Input() public text:string;

  constructor() { }

  ngOnInit(): void {
  }

}
