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
  messages : ContactUsBrief[] = [];
  pageNumber: number = 1;

  /**
   *
   */
  constructor(
    private userServices: UserService
  ) {

  }
  ngOnInit(): void {
    this.getAllMessages();
  }

  getAllMessages(){
    this.userServices.getMessages().subscribe({
      next: (result:any) => {
        console.log(result);
        this.messages = result;
      },
      error: (err) => {
        alert("Error Happend");
      },
      complete: () => {

      }
    })
  }



}
