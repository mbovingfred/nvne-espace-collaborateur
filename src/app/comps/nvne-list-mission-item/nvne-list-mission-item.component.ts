import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-list-mission-item',
  templateUrl: './nvne-list-mission-item.component.html',
  styleUrls: ['./nvne-list-mission-item.component.css']
})
export class NvneListMissionItemComponent implements OnInit {

  @Input() public nom:string;
  @Input() public desc:string;
  @Input() public prix:string;
  @Input() public date:string;
  @Input() public heureDeb:string;
  @Input() public heureFin:string;

  @Input() public text:string;
  @Input() public color:string;

  @Input() public src:string;
  @Input() public height:string="100";
  @Input() public width:string="100";

  constructor() { }

  ngOnInit(): void {
  }

}
