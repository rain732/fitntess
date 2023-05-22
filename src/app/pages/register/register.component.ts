import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {  UserDto } from 'src/app/models/user/UserDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  firstName: string = '';
  lastName: string = '';
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
    private userService : UserService
  ) {

  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(this.firstName == null 
      || this.lastName == null 
      || this.email == null 
      || this.password == null 
      || this.confirmPassword == null
      || this.age == null
      || this.height == null
      || this.weight == null ){
        return;
      }

    if(this.password != this.confirmPassword){
      return;
    }

    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.password = this.password;
    this.user.age = this.age;
    this.user.height = this.height;
    this.user.weight = this.weight;

    this.userService.createUser(this.user).subscribe( {
      next: (result) => {
        console.log("success");
      },
      error: (err) => {
        console.log("error");
      },
      complete: () =>{
        console.log("completed");
      }
    })
    

  }
}
