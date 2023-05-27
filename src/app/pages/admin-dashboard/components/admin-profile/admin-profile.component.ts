import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/models/user/UserDto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

  user: UserDto = new UserDto;
  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    // Handle form submission logic here
    var email = localStorage.getItem("email");

    if (email) {
      this.userService.updateUser(email, this.user).subscribe({
        next: (result) => {
          console.log("success");
          this.router.navigateByUrl('/admin-dashboard');
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
