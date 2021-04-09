import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public host:string=environment.backendApiUrl

  constructor(private http:HttpClient) { }

  public getResource(url){
    return this.http.get(this.host+url)
  }

  envoyerMessage(data): Observable<Object> {
    console.log(data);
    return this.http.post(this.host+'/api/message', data);
  }
}
