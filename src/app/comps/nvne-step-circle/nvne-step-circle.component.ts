import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-step-circle',
  templateUrl: './nvne-step-circle.component.html',
  styleUrls: ['./nvne-step-circle.component.css']
})
export class NvneStepCircleComponent implements OnInit {

  @Input() public url:string;

  @Input() public txt:string;

  @Input() public bg_size:string;

  @Input() public num:string;

  constructor() { }

  ngOnInit(): void {
  }

}
