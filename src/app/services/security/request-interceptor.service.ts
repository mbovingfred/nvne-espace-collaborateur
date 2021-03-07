import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakSecurityService } from '../keycloak-security.service';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService {

  constructor(private securityService: KeycloakSecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercepting "+req.url);
    console.log("Authenticated? : "+this.securityService.kc.authenticated);
    if(!this.securityService.kc.authenticated) return next.handle(req);
    let request = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+this.securityService.kc.token
      }
    });
    return next.handle(request);
  }
}
