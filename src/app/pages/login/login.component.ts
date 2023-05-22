import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/auth.services';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email: string = '';
  password: string = '';


  constructor(
    private router: Router,
    private userService : UserService,
    private auth : AuthServices
    ) {
  }
  ngOnInit(): void {
  }
  getRoute(str: string) {
    return this.router.url == str;
  }
  onSubmit(){
    if(this.email == null || this.password == null
    ){
      return;
    }
    this.auth.login(this.email, this.password).subscribe({
      next: (result) => {
        if(result.is_Admin){
          this.router.navigate(['/admin-dashboard']);
        }
        else{
          this.router.navigate(['/user-dashboard']);
        }
        
      },
      error: (err) => {

      },
      complete: () => {

      }
    })
  }

}
