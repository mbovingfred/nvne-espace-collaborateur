import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  public host:string=environment.backendApiUrl

  constructor(private http:HttpClient) { }

  public getResource(url){
    return this.http.get(this.host+url)
  }

  ajouterEntreprise(data): Observable<Object> {
    console.log(data);
    return this.http.post(this.host+'/api/entreprises', data);
  }
}
