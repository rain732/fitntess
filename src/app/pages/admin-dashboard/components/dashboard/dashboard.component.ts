import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PagedList } from 'src/app/models/pagedList';
import { UserBrief } from 'src/app/models/user/UserBrief';
import { UserService } from 'src/app/services/user.service';
interface User {
  first_name: string;
  last_name: string;
  email: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users : PagedList<UserBrief> = new PagedList<UserBrief>;
  pageNumber: number = 1;
  userList: User[] = [];
  constructor(
    private userServices: UserService
  ) {
    
  }
  ngOnInit(): void {
    // this.getUsersWithPagination();
    this.users.totalCount = 36;
    this.users.pageNumber = 1;
    this.users.totalPages = 36/6;
    this.userServices.getUsers().subscribe({
      next:(result:any) =>{
        result['users'].forEach((element:any) => {
          this.userList.push(element)
        });
      }
    })
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
