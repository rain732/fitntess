import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {};
  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }
  onSubmit() {
    // Handle form submission logic here
    var email = localStorage.getItem("email");

    if (email) {
      this.userService.updateUser(email, this.user).subscribe({
        next: (result) => {
          console.log("success");
          localStorage.setItem("height",this.user.height);
          localStorage.setItem("weight",this.user.weight);
          localStorage.setItem("age",this.user.age);
          localStorage.setItem("gender",this.user.gender);
          this.router.navigateByUrl('/user-dashboard');
        },
        error: (err) => {
          console.log("error");
        },
        complete: () => {
          console.log("completed");
        }
      });
    } else {
      console.log("Email not found in local storage.");
    }
  }
}
