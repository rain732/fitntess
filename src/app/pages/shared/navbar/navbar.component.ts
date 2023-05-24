import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  /**
   *
   */
  isLoggedIn:Boolean = false;
  constructor(public router: Router,) {
    
  }
  ngOnInit(): void {
    var email = localStorage.getItem("email");
    console.log(email);
    
    if(!NavbarComponent.isNullOrEmpty(email?.toString())){
      this.isLoggedIn = true;
    } else{
      this.isLoggedIn = false;
    }
    if(!this.isLoggedIn){
      localStorage.clear();
    }
    localStorage.setItem("isLoggedIn",this.isLoggedIn+"");
  }
  getRoute(str: string) {
    return this.router.url == str;
  }
  static isNullOrEmpty(str?: string) {
    return str === null || str?.toString().match(/^ *$/) !== null;
  }
  logoutUser(){
    localStorage.clear();
    localStorage.setItem("isLoggedIn",false+"")
    this.isLoggedIn=false
  }
}
