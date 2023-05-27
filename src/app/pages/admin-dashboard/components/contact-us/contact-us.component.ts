import { Component, OnInit } from '@angular/core';
import { PagedList } from 'src/app/models/pagedList';
import { ContactUsBrief } from 'src/app/models/user/ContactUsMessage';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  messages : PagedList<ContactUsBrief> = new PagedList<ContactUsBrief>;
  pageNumber: number = 1;

  /**
   *
   */
  constructor(
    private userServices: UserService
  ) {

  }
  ngOnInit(): void {
  }

  getContactMessageWithPagination(){
    this.userServices.getContactMessagePagination(this.pageNumber).subscribe({
      next: (result) => {
        console.log(result);
        if(result){
          this.messages = result;
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
    this.getContactMessageWithPagination();
  }


}
