import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public env=environment;
  public url_mlegales:string=environment.homeUrl+"/mentions-legales";
  public url_cgu:string=environment.homeUrl+"/cgu";
  public url_contact:string=environment.homeUrl+"/contact";
  public url_apropos:string=environment.homeUrl+"/apropos";

  constructor() { }
}
