import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.services';
import { UserService } from 'src/app/services/user.service';
import { Utils } from '../shared/utils/Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private userService: UserService,
    private auth: AuthServices
  ) {
  }
  ngOnInit(): void {
  }
  getRoute(str: string) {
    return this.router.url == str;
  }
  onSubmit() {
    if (Utils.isNullOrEmpty(this.email) || Utils.isNullOrEmpty(this.password)) {
      alert("the email or passowrd are empty")
      return;
    }
    this.auth.login(this.email, this.password).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem("height", result.user.height + "");
        localStorage.setItem("name", result.user.first_name+" "+result.user.last_name + "");
        localStorage.setItem("weight", result.user.weight + "");
        localStorage.setItem("age", result.user.age + "");
        localStorage.setItem("gender", result.user.gender + "");
        if (result.user.is_Admin) {
          this.router.navigate(['/admin-dashboard']);
        }
        else {
          this.router.navigate(['/user-dashboard']);
        }

      },
      error: (err) => {
        // this.router.navigate(['/login']);
        alert("the email or passowrd are incorrect")
      },
      complete: () => {

      }
    })
  }

}
