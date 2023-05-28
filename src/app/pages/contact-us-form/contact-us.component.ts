import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsFormComponent {
  message: string = '';
  email: string = '';
  fullName: string = '';
  constructor(private userService: UserService) { }
  onSubmit() {
    // Do something with the form data
    this.userService.createMessage(this.fullName,this.email,this.message).subscribe({
      next:(result)=>{
        console.log(result);
        alert("Message sent, Thank You");        

      },
      error:(error)=>{
        alert("error happened")
      },
      complete:()=>{
        console.log("Done");
        
      }
    })
    console.log('Full Name:', this.fullName);
    console.log('Email:', this.email);
    console.log('Message:', this.message);

  }
}
