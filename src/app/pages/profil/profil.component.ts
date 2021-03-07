import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { KeycloakSecurityService } from 'src/app/services/keycloak-security.service';
import { UserCollaborateur } from 'src/app/model/userspace/userCollaborateur.model';
import { AccountServiceService } from 'src/app/services/account-service.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  progress: number;

  constructor(
    public keycloakService:KeycloakSecurityService,
    public accountService:AccountServiceService
    
    ) { }

  public minDate:string;

  public userCollaborateur:UserCollaborateur = new UserCollaborateur();
  // public userCollaborateur:UserCollaborateur = new UserCollaborateur();
  
	public cv:File;
	public pceId:File;
	public rib:File;

  public errormsg:string="";
  public successmsg:string="";
  public step:number = 1;

  // public userCollaborateur = {
  //   nomEntreprise: '',
  //   nom: '',
  //   prenom: '',
  //   email: '',
  //   tel: '',
  //   dateFormContact: '',
  //   uid: '',
  //   cv: '',
  //   pce_id: '',
  //   adresse: '',
  //   codePostal: '',
  //   activite: '',
  //   rib: '',
  //   desc: '',
  // };

  private parseModel(){
    this.userCollaborateur.nom = this.keycloakService.kc.tokenParsed["family_name"];
    this.userCollaborateur.prenom = this.keycloakService.kc.tokenParsed["given_name"];
    this.userCollaborateur.birthplace = this.keycloakService.kc.tokenParsed["birthplace"];
    this.userCollaborateur.birthdate = this.keycloakService.kc.tokenParsed["birthdate"];
    this.userCollaborateur.email = this.keycloakService.kc.tokenParsed["email"];
    this.userCollaborateur.phoneNumber = this.keycloakService.kc.tokenParsed["phone_number"];
    // console.log(this.userCollaborateur.nom)
  }

  parseProfil(data:any){
    this.userCollaborateur.cv = data["cv"];
    this.userCollaborateur.pceId = data["pceId"];
    this.userCollaborateur.adresse = data["adresse"];
    this.userCollaborateur.postal = data["postal"];
    this.userCollaborateur.activite = data["activite"];
    this.userCollaborateur.rib = data["rib"];
    this.userCollaborateur.description = data["description"];
    this.cv = data["cv"];
    this.pceId = data["pceId"];
    this.rib = data["rib"];
  }

  parseFormdata(formData:any){
    this.userCollaborateur.postal = formData.postal;
    this.userCollaborateur.activite = formData.activite;
    this.userCollaborateur.adresse = formData.adresse;
    this.userCollaborateur.description = formData.description;
    // this.userCollaborateur.description = formData.description;
    // this.userCollaborateur.description = formData.description;
    // this.userCollaborateur.description = formData.description;
  }

  ngOnInit(): void {
    if (!this.keycloakService.kc.authenticated) {
      this.keycloakService.kc.login();
    }
    // this.userCollaborateur;
    this.parseModel();
    this.accountService.findByEmail(this.keycloakService.kc.tokenParsed["email"])
      .subscribe(data=>{
        console.log(data);
        if (data) this.parseProfil(data);
        console.log(this.userCollaborateur);
    }, err => {
      this.successmsg="";
      // this.errormsg = "Une erreur est survenu. Veuillez réessayer svp";
      console.log(JSON.parse(err._body).message);
    })
  }

  accountManagement(){
    this.keycloakService.kc.accountManagement();
  }

  // private traiterFichiers(){
  //   this.cv = this.cv instanceof File? this.cv : null;
  //   this.pce_id = this.pce_id instanceof File? this.pce_id : null;
  //   this.rib = this.rib instanceof File? this.rib : null;
  // }

  onSave(formdata:any){
    // this.traiterFichiers();
    console.log(formdata);
    this.userCollaborateur.uid = this.keycloakService.kc.tokenParsed["sub"];
    this.parseFormdata(formdata);
    console.log(this.userCollaborateur);
    this.accountService.enregCollaborateur(
      this.userCollaborateur, 
      this.cv instanceof File? this.cv : new File([""],"unknown.pdf", {type: "text/plain"}), 
      this.pceId instanceof File? this.pceId : new File([""],"unknown.pdf", {type: "text/plain"}), 
      this.rib instanceof File? this.rib : new File([""],"unknown.pdf", {type: "text/plain"})
    ).subscribe(event=>{
      console.log(event);
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        // this.result = data;
        this.errormsg="";
        if (event.ok) this.successmsg="Enregistrement réussi";
        window.scroll(0,0);
        // this.step = 3;
      }
    }, err=>{
      this.successmsg="";
      this.errormsg = "Une erreur est survenu. Veuillez réessayer svp";
      console.log(JSON.parse(err._body).message);
    });
  }

  setCv(event){
    console.log("Setting cv");
    this.cv = event.target.files[0];
  }

  setPceId(event){
    this.pceId = event.target.files[0];
  }

  setRib(event){
    this.rib = event.target.files[0];
  }
}
