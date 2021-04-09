import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-rounded-pic',
  templateUrl: './nvne-rounded-pic.component.html',
  styleUrls: ['./nvne-rounded-pic.component.css']
})
export class NvneRoundedPicComponent implements OnInit {

  @Input() public src:string;
  @Input() public height:string="100";
  @Input() public width:string="100";

  constructor() { }

  ngOnInit(): void {
  }

}
