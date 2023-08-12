import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _authService : AuthService,
              private _router : Router) { 
              if(this._authService.isAuthenticated()){
                this._router.navigateByUrl('/browse');
              }
              }
  email    : string | null = localStorage.getItem('usrEml');
  password : string | undefined;
  isError : boolean = false;
  errorMessage : string = '';
  rememberMe : boolean = true;
  ngOnInit(): void {
  }

  signIn(){
    let data = {
      userName : this.email,
      password : this.password
    }
    this._authService.signIn(data).subscribe({
      next:(response:any)=>{
        let rememberMe : any  = this.rememberMe;
        rememberMe = String(rememberMe);
        if(response.statusCode===200){
          // here we store remember me value(true,false) in local storage to identify token from we can get token in interceptor and auth guard
          localStorage.setItem('rememberMe',rememberMe);
          // if remember me is true then we will store token into localstorage else store in session storage
          if(this.rememberMe){
            localStorage.setItem("token",response.accessToken);
          }else{
            sessionStorage.setItem("token",response.accessToken);
          }
          this._router.navigateByUrl('/browse');
        }else if(response.statusCode===400){
          this.isError = true;
          this.errorMessage = "<span class='font-semibold'>Incorrect password.</span><span class='text-sm'>Please try again or you can <a class='underline' href=''>reset your password</a>.</span>";
        }else if(response.statusCode===404){
          this.isError = true;
          this.errorMessage = "<span class='text-sm'>Sorry, we can't find an account with this email address. Please try again or<a class='underline' routerLink='/'> create a new account</a>.</span>";
        }else{
          console.log(response);
        }
        
      }
    })
  }

}
