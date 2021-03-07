import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserCollaborateur } from '../model/userspace/userCollaborateur.model';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private username:string="mbovingfredy@gmail.com";
  private password:string="Azerty.2020";
  private grant_type:string="client_credentials";
  private client_id:string="account-man-service";
  private client_secret:string="3386cbc2-8fea-4b9e-8e27-f9afa181cc60";
  private admin_login_url:string=environment.authApiUrl+"/auth/realms/nvne-realm/protocol/openid-connect/token";

  private admin_api_client_url:string="http://localhost:8082/keycloak/registerEntreprise";

  public host:string=environment.backendApiUrl;
  private token:any;

  constructor(private httpClient:HttpClient) { }

  findByEmail(email:string){
    console.log("rdv ....");
    let formdata: FormData = new FormData();
    formdata.append('email', email);

    return this.httpClient.post(this.host+'/findByEmail',formdata);
  }

  enregCollaborateur(userEntreprise:UserCollaborateur, kbis:File, pceId:File, rib:File): Observable<HttpEvent<any>> {
    let formdata: FormData = new FormData();
    console.log(userEntreprise);
    console.log(kbis);
    console.log(pceId);
    console.log(rib);

    formdata.append('cv', kbis);
    formdata.append('pceId', pceId);
    formdata.append('rib', rib);
    formdata.append('userCollaborateur', new Blob(
      [JSON.stringify(userEntreprise)],
      { type: "application/json" }
    ));
    //if(this.jwtToken==null) this.loadToken();

    const req = new HttpRequest('POST', this.host+'/register/collaborateur', formdata, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.httpClient.request(req);
  }

}
  