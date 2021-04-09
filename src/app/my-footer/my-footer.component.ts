import { Component, OnInit } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  public versionNumber:string="0.0.9"

  constructor(
    public util:UtilService
  ) { }

  ngOnInit(): void {
  }

}
