import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from '../services/keycloak-security.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public adminUrl:string;
  constructor(
    public securityService:KeycloakSecurityService, 
    private router:Router,
    public util:UtilService
  ) { }

  ngOnInit(): void {
    this.adminUrl = environment.adminUrl;
    console.log(this.securityService.kc);
  }

  onLogin(){
    this.securityService.kc.login();
  }

  onRegister(){
    this.securityService.kc.register();
  }


  onLogout(){
    this.securityService.kc.logout();
  }

  onChangePassword(){
    if (this.securityService.kc.authenticated){
      // console.log(this.securityService.kc.tokenParsed.groups.includes("/partenaires"));
      // if (!this.securityService.kc.tokenParsed.groups.includes("/entreprises") &&
      //     !this.securityService.kc.tokenParsed.groups.includes("/partenaires")) {
      //       this.router.navigate(["/vous-etes"]);
      // }  else {
        // console.log("to account management");
        this.securityService.kc.accountManagement();
      // }
    }
  }

}
