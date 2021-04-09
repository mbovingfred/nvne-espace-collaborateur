import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nvne-checkbox',
  templateUrl: './nvne-checkbox.component.html',
  styleUrls: ['./nvne-checkbox.component.css']
})
export class NvneCheckboxComponent implements OnInit {

  @Input() public label:string;

  @Input() public name:string;

  @Output() onChangeEvent = new EventEmitter<boolean>();

  @Input() public requiredProperty:boolean = false;

  private checked:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(data) {
    this.checked = data.valueAccessor._elementRef.nativeElement.checked;
    // console.log(this.checked);
    this.onChangeEvent.emit(this.checked);
  }

}
