import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nvne-input',
  templateUrl: './nvne-input.component.html',
  styleUrls: ['./nvne-input.component.css']
})
export class NvneInputComponent implements OnInit {

  @Input() public ngModel:string;

  @Input() public type:string;

  @Input() public name:string;

  @Input() public requiredProperty:string;

  @Input() public placeholder:string;

  @Input() public max:string;

  @Input() public disabledProperty:string;

  constructor() { }

  ngOnInit(): void {
  }

}
