import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-rounded-pic-with-status',
  templateUrl: './nvne-rounded-pic-with-status.component.html',
  styleUrls: ['./nvne-rounded-pic-with-status.component.css']
})
export class NvneRoundedPicWithStatusComponent implements OnInit {

  @Input() public text:string;
  @Input() public color:string;

  @Input() public src:string;
  @Input() public height:string="100";
  @Input() public width:string="100";

  constructor() { }

  ngOnInit(): void {
  }

}
