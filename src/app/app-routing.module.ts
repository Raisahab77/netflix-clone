import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { PlayerComponent } from './pages/player/player.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:LandingPageComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'browse',component:BrowseComponent,canActivate:[AuthGuard]},
  {path:'kids',component:BrowseComponent,canActivate:[AuthGuard]},
  {path:'watch/:id',component:PlayerComponent,canActivate:[AuthGuard]},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
