import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }
  url = 'https://www.youtube.com/embd?v=-VUKEmqUKCM&t=3s&ab_channel=ThreeMinions';

  ngOnInit(): void {
    this.url = this.url.replace("watch?v=", "v/");
  }

}
