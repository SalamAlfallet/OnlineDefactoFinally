import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup,Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ManageService} from '../manage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter()
 users=[];
  constructor(private manageService :ManageService,private route:Router) { }
  loginForm =new FormGroup({
    username:new FormControl(null),
    password:new FormControl(null)
  
  })

  logIn(){
    console.log("userLoggedIn")

    this.loginEvent.emit({success:true});
  }
  ngOnInit() {
    this.manageService.getUsers().subscribe(pro => this.users=pro);
  }
  errorName="";
  errorpass=""
error;
  submitForm(){
    if(this.loginForm.controls.username.errors && this.loginForm.controls.username.errors.required ){
      this.errorName="user name required "
      if(this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required ){
        this.errorpass="password required"}
      }
    else{  
    for(let data of this.users){
if(data.username===this.loginForm.value.username && data.password===this.loginForm.value.password){
 
// alert("sucsses");
this.route.navigate(['/home']);}
else{
  this.error=(" * invalid user name or password")
 // alert("invalid user name or password");

}



    }

 //   alert(this.loginForm.value.username);
  }

  }


  //  ///// Reactive Form///////////
  //  myform=new FormGroup({
  //   name:new FormControl(null,[Validators.required,Validators.minLength(10)]),
  //   age:new FormControl(null,[Validators.required])
  
  // })
  // error=""
  // isclickedSubmit=false
  // submitForm(){
  //   this.isclickedSubmit=true

  //    if(this.myform.controls.name.errors.required){
  //     this.error="name required"
  //    }

  //    if(this.myform.controls.name.errors.touched){
  //     this.isclickedSubmit=true
  // }
  //   console.log(this.myform)
  // }

}
