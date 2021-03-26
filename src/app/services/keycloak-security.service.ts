import { Injectable } from '@angular/core';

import {KeycloakInstance} from 'keycloak-js';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';

declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})

export class KeycloakSecurityService {
  public kc:KeycloakInstance;
  public realm;
  public clientId;
  public kcUrl;

  constructor(private router:Router, private httpClient:HttpClient) { }

  async init(){
    console.log("Security Information ... "+environment.authApiUrl);
    this.realm = "nvne-realm";
    this.clientId = environment.clientId;
    this.kcUrl = environment.authApiUrl+"/";
    this.kc= new Keycloak({
      url:this.kcUrl,
      realm:this.realm,
      clientId:this.clientId
    });
    await this.kc.init({
      // onLoad:'login-required',
      onLoad:'check-sso',
      promiseType:'native'
    });
    console.log(this.kc.token);
    console.log(this.kc);
  }

  addToGroup(groupName) {
    // this.httpClient.get(url)
    // const req = new HttpRequest('POST', environment.authApiUrl+'/users/'+this.kc.tokenParsed.sub+"/groups/", formdata, {
    //   reportProgress: true,
    //   responseType: 'json'
    // });

    // return this.httpClient.request(req);
  }
}
