import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, group, animate } from '@angular/animations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations:[
    trigger('animateImage' ,[
      transition('void=>*',[
        style({
            opacity:0,
            transform:'translateX(500px)'
        }),
        group([
        animate(1000,style({
          opacity:1,
        })),
        animate(5000,style({
          transform:'translateX(0)'

        }))
      ])
      ])
    ]) ]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
