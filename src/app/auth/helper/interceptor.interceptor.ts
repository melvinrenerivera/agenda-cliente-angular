import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(
    private authService:AuthService
  ) {}

  //interecetando el request y clonandolo y agrengado cabezeras
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=this.authService.getToken();
    if(token){
      const cloned = request.clone({
        headers : request.headers.set('Authorization',`Bearer ${token}`)
      })
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
