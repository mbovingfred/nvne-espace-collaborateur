import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {
  public host:string=environment.backendApiUrl

  constructor(private http:HttpClient) { }

  public getResource(url){
    return this.http.get(this.host+url)
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

    const req = new HttpRequest('POST', this.host+'/api/autoEntrepreneurs/uploadCV', formdata, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }
}
