import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { KeycloakSecurityService } from '../../services/keycloak-security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vous-etes',
  templateUrl: './vous-etes.component.html',
  styleUrls: ['./vous-etes.component.css']
})
export class VousEtesComponent implements OnInit {

  constructor(private location:Location, public securityService:KeycloakSecurityService,
              private router:Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  onEntreprise() {
    // this.securityService.kc.register();
    this.router.navigate(["/profil"]);

  }

  onPartenaire() {
    // this.securityService.kc.register();
    this.router.navigate(["/profil"]);
  }

}
