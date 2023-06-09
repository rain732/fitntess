import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {  UserDto } from 'src/app/models/user/UserDto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  first_name: string = '';
  last_name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  age: number = 0;
  height: number = 0;
  weight: number = 0;
  gender: string = '';
  user : UserDto = new UserDto()  /**
   *
   */
  constructor(
    private userService : UserService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    
  }
  validateEmail = (email: string): boolean => {
    const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  onSubmit(){
    if(this.first_name == null 
      || this.last_name == null 
      || this.email == null 
      || this.password == null 
      || this.confirmPassword == null
      || this.age == null
      || this.height == null
      || this.weight == null ){
        return;
      }

    if(!this.validateEmail(this.email)){
      alert("Invalid Email");
      return;
    }  

    if(this.password != this.confirmPassword){
      alert("Passwords not matching")
      return;
    }

    this.user.first_name = this.first_name;
    this.user.last_name = this.last_name;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.age = this.age;
    this.user.height = this.height;
    this.user.weight = this.weight;

    this.userService.createUser(this.user).subscribe( {
      next: (result) => {
        localStorage.setItem("email",this.user.email);
        localStorage.setItem("name",this.user.first_name +" "+this.user.last_name);
        localStorage.setItem("password",this.user.password);
        this.router.navigateByUrl('/profile');
      },
      error: (err) => {
        alert("Email already used")
      },
      complete: () =>{

      }
    })
    

  }
}
