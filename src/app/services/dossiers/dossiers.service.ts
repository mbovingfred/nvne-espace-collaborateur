import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeycloakSecurityService } from '../keycloak-security.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DossiersService {

  public host:string=environment.backendApiUrl;

  constructor(private httpClient:HttpClient,
              private securityService:KeycloakSecurityService) { }

  public getResource(page:number,size:number,path:string){
    console.log("Sending request "+this.host+path+"?page="+page+"&size="+size);
    return this.httpClient.get(this.host+path+"?page="+page+"&size="+size);
  }

  public getResourceSecure(page:number,size:number,path:string){
    console.log("Sending request "+this.host+path+"?page="+page+"&size="+size);
    return this.httpClient.get(this.host+path+"?page="+page+"&size="+size,
    {
      headers:new HttpHeaders({
        Authorization:'Bearer '+this.securityService.kc.token
      })
    });
  }

  envoiDonneesEntrepreneur(file:File, data): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    console.log(data);
    console.log(file.name);

    formdata.append('cv', file);
    formdata.append('autoEntrepreneur', new Blob(
      [JSON.stringify(data)],
      { type: "application/json" }
    ));
    //if(this.jwtToken==null) this.loadToken();

    const req = new HttpRequest('POST', this.host+'autoEntrepreneurs/uploadCV', formdata, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }

  public deleteResource(url){
    return this.httpClient.delete(url);
  }

  public saveResource(url, data):Observable<Object>{
    return this.httpClient.post(url,data);
  }
}
