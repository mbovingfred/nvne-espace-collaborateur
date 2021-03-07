import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nvne-option-picker',
  templateUrl: './nvne-option-picker.component.html',
  styleUrls: ['./nvne-option-picker.component.css']
})
export class NvneOptionPickerComponent implements OnInit {

  @Input() public options:any;

  @Output() onChangeEvent = new EventEmitter<string>();

  public half:number;

  constructor() { }

  ngOnInit(): void {
    this.half=Math.floor(this.options.length/2);
    console.log("length");
    console.log(this.options.length/2);
  }

  public onSelect(item) {
    console.log("selecting");
    this.options.forEach(option => {
      if (option == item){
        option.selected = true;
        console.log("option= "+option.time.hours+" item= "+item.time.hours);
      } else {
        option.selected = false;
      }
    });
    this.onChangeEvent.emit(item.time.hours+":"+item.time.minutes);
  }

}
