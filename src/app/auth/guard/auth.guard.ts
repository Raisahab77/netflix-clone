import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(public _auth: AuthService,
              public _router: Router) {}

  canActivate(): boolean {
    if (!this._auth.isAuthenticated()) {
      this._router.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }
  }
  
}

