import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HoverPopupComponent } from './pages/browse/hover-popup/hover-popup.component';
import { PlayerComponent } from './pages/player/player.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorInterceptor } from './auth/interceptor/auth-interceptor.interceptor';
import { HeaderComponent } from './pages/header/header.component';
import { KidsComponent } from './pages/browse/kids/kids.component';
import {MatIconModule} from '@angular/material/icon';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    BrowseComponent,
    HoverPopupComponent,
    PlayerComponent,
    HeaderComponent,
    KidsComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorInterceptor,
      multi: true
    },
    {
      provide: MatDialogRef<HoverPopupComponent>,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
