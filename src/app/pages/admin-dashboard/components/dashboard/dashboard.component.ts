import { Component, OnInit } from '@angular/core';
import { PagedList } from 'src/app/models/pagedList';
import { UserBrief } from 'src/app/models/user/UserBrief';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users : PagedList<UserBrief> = new PagedList<UserBrief>;
  pageNumber: number = 1;
  userList: UserBrief[] = [
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    {
      first_name: 'Alice',
      last_name: 'Smith',
      email: 'alice.smith@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 25,
      height: 170,
      weight: 60,
    },
    {
      first_name: 'Bob',
      last_name: 'Jones',
      email: 'bob.jones@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 35,
      height: 180,
      weight: 80,
    },
    {
      first_name: 'Charlie',
      last_name: 'Brown',
      email: 'charlie.brown@example.com',
      password: 'password',
      confirmPassword: 'password',
      age: 45,
      height: 190,
      weight: 90,
    },
    // add more users as needed
  ];
  constructor(
    private userServices: UserService
  ) {
    
  }
  ngOnInit(): void {
    // this.getUsersWithPagination();
    this.users.items = this.userList;
    this.users.totalCount = 36;
    this.users.pageNumber = 1;
    this.users.totalPages = 36/6;
  }

  getUsersWithPagination(){
    this.userServices.getUsersWithPagination(this.pageNumber).subscribe({
      next: (result) => {
        console.log(result);
        if(result){
          this.users = result;
        }
      },
      error: (err) => {
        alert("Error Happend");
      },
      complete: () => {

      }
    })
  }

  handlePageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getUsersWithPagination();
  }

}
