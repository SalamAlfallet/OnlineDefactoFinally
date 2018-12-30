import { Component, OnInit, Input } from '@angular/core';

import {Router} from '@angular/router';
import { ManageService } from '../manage.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 // @Input() isLoggin =false 
  islogin;
  appTitle = 'myapp';

  constructor(private router : Router,private manageService :ManageService) { }

  ngOnInit() {
    this.manageService.getLogin().subscribe(response => this.islogin = response)
  }

  Logout(){
    this.manageService.setLogin(false)
  //  this.router.navigate(["login"]);

  }

}
