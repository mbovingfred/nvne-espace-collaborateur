import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nvne-btn-ico',
  templateUrl: './nvne-btn-ico.component.html',
  styleUrls: ['./nvne-btn-ico.component.css']
})
export class NvneBtnIcoComponent implements OnInit {

  @Input() public alt:string;

  constructor() { }

  ngOnInit(): void {
  }

}
