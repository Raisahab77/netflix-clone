import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private _router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token : string | null = '';
    if(localStorage.getItem('rememberMe')=='true'){
      token = localStorage.getItem('token');
    }else{
      token = sessionStorage.getItem('rememberMe');
    }
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(request).pipe(tap(()=>{},
    (err:any)=>{
      if(err instanceof HttpErrorResponse){
        if(err.status !==401){
          return;
        }
        this._router.navigateByUrl('/login');
      }
    }))
  }
}
