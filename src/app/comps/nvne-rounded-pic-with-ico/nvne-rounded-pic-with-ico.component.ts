import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-rounded-pic-with-ico',
  templateUrl: './nvne-rounded-pic-with-ico.component.html',
  styleUrls: ['./nvne-rounded-pic-with-ico.component.css']
})
export class NvneRoundedPicWithIcoComponent implements OnInit {

  @Input() public icoSrc:string;
  @Input() public color:string;
  @Input() public isLink:boolean;
  @Input() public url:boolean;

  @Input() public src:string;
  @Input() public height:string="100";
  @Input() public width:string="100";

  constructor() { }

  ngOnInit(): void {
  }

}
