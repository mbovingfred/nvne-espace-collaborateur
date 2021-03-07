import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-input-text',
  templateUrl: './nvne-input-text.component.html',
  styleUrls: ['./nvne-input-text.component.css']
})
export class NvneInputTextComponent implements OnInit {

  @Input() public ngModel:string;

  @Input() public type:string;

  @Input() public name:string;

  @Input() public requiredProperty:string;

  @Input() public placeholder:string;

  @Input() public minlength:string;

  @Input() public disabledProperty:string;

  // public data:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
