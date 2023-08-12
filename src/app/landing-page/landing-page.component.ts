import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Initialization for ES Users
import {Collapse,initTE,} from "tw-elements";
import { ServiceService } from '../services/service.service';
import { AuthService } from '../auth/service/auth.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  
  constructor(private _router : Router,
              private _service : ServiceService,
              private _authService : AuthService) {
                if(this._authService.isAuthenticated()){
                  this._router.navigateByUrl('/browse');
                }
               }
  email : string = ''; 
  ngOnInit(): void {
    initTE({ Collapse });
  }

  isUserExist(){
    localStorage.setItem('usrEml',this.email);
    this._service.isUserExist(this.email).subscribe({
      next:(res)=>{
        console.log(res);
        this._router.navigateByUrl('/login');
      }
    })
  }
  
}
