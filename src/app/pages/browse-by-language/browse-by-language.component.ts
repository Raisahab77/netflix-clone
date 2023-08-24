import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-by-language',
  templateUrl: './browse-by-language.component.html',
  styleUrls: ['./browse-by-language.component.scss']
})
export class BrowseByLanguageComponent implements OnInit {

  constructor() { }
  movies = [1,2,3];
  
  ngOnInit(): void {
  }

}
