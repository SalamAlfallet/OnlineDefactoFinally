import { Component, OnInit, Input } from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() isLoggin =false 
 
  appTitle = 'myapp';

  constructor(private router : Router) { }

  ngOnInit() {
  }

  Logout(){
    this.router.navigate(["login"]);

  }

}
