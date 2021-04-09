import { Component, OnInit, Input } from '@angular/core';
import { DossiersService } from 'src/app/services/dossiers/dossiers.service';

@Component({
  selector: 'app-admin-datatable',
  templateUrl: './admin-datatable.component.html',
  styleUrls: ['./admin-datatable.component.css']
})
export class AdminDatatableComponent implements OnInit {

  public data:any

  @Input() public size:number=5;
  public currentPage:number=0;
  public totalPages:number=0;
  public totalElements:number=0;
  public pages:Array<number>;
  public from:number=0;
  public to:number=0;
  @Input() public resourceUrlPath:string;
  @Input() public columnDefs:any;
  @Input() public resourceName:string;
  @Input() public title:string

  constructor(private dossiersService:DossiersService) { }

  ngOnInit(): void {
    this.onGetResource();
  }

  onGetResource(){
    this.dossiersService.getResource(this.currentPage,this.size,this.resourceUrlPath)
      .subscribe(data=>{
      this.totalPages=data["page"].totalPages;
      this.totalElements=data["page"].totalElements;
      this.pages=new Array<number>(this.totalPages);
      this.data=data;
      this.from=(this.currentPage*this.size)+1;
      this.to=+(this.currentPage*this.size) + +this.size;
      if (this.to > this.totalElements) this.to = this.totalElements;
    }, err=>{
      console.log(err);
    })
  }

  onChangeNumEntries(value){
    console.log(value);
    this.size = value.size;
    this.onGetResource();
  }

  onPageDossier(i){
    this.currentPage=i;
    this.onGetResource();
  }

  onChercher(value: any){
    console.log(value)
  }

  onDeleteProduct(p){
    let conf=confirm("Êtes-vous sûre ?");
    if (conf) {
      this.dossiersService.deleteResource(p._links.self.href)
        .subscribe(data=>{
          this.onGetResource();
        }, err=>{
          console.log(err);
        })
    }
  }

}
