import { Component, OnInit } from '@angular/core';
import { DossiersService } from 'src/app/services/dossiers/dossiers.service';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-collaborateurs',
  templateUrl: './collaborateurs.component.html',
  styleUrls: ['./collaborateurs.component.css']
})
export class CollaborateursComponent implements OnInit {

  public resourceUrlPath:string = "autoEntrepreneurs";

  public columnDefs = [
    {field: "id", headerName: 'ID', type: "text", linkURL: ""},
    {field: "noms", headerName: 'Noms', type: "text", linkURL: ""},
    {field: "prenoms", headerName: 'Prenoms', type: "text", linkURL: ""},
    {field: "niveauEtude", headerName: 'Niveau d\'étude', type: "text", linkURL: ""},
    {field: "email", headerName: 'Email', type: "text", linkURL: ""},
    {field: "cv", headerName: 'CV', type: "link", linkURL: environment.backendApiUrl+"/api/autoEntrepreneurs/downloadCV"},
  ]

  public resourceName = "autoEntrepreneurs";

  constructor(private dossiersService:DossiersService,
              public securityService:KeycloakSecurityService,
              private router:Router) { }

  ngOnInit(): void {
    if (!this.securityService.kc.authenticated){
      console.log(this.securityService.kc.authenticated);
      // this.securityService.kc.login();
    }
  }

}
