import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router : Router) { }

  searchText:string = '';
  isSearchVsbl:boolean = true;
  isInptVsbl:boolean = false;
  currentRoute:string='';
  activeRole:string | null = '';
  @ViewChild("search") search:any;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.navBg();
  }
  
  ngOnInit(): void {
    this.currentRoute = this._router.url;
    this.activeRole = localStorage.getItem('activeRole');
  }

  onSearch(){
    this.search.nativeElement.focus();
    this.isInptVsbl = true;
  }

  onBlur(){
    if(this.searchText!='' && this.searchText!=null && this.searchText!=undefined){
      this.isInptVsbl = true;
    }else{
      this.isInptVsbl = false;
    }
  }

  navBg(){
    let header = document.getElementById('header');
    let scrollValue = window.scrollY;
    if(scrollValue<150){
      header?.classList.remove('bg-color');
    }else{
      header?.classList.add('bg-color');
    }
  }

  setActiveRole(activeRole:string){
    localStorage.setItem('activeRole',activeRole);
    this.activeRole = localStorage.getItem('activeRole');
    this._router.navigateByUrl('/kids');
  }

  exitKids(){
    this._router.navigateByUrl('/browse');
    localStorage.removeItem('activeRole');
  }

  signOut(){
    localStorage.clear();
    sessionStorage.clear();
    this._router.navigateByUrl('/');
  }

}
