import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public imagesUrl;
  ngOnInit() {
    this.imagesUrl = [
      '../assets/images/man.jpg',
      '../assets/images/woman.jpg',
      '../assets/images/baby.jpg',
      ];

  }

}
