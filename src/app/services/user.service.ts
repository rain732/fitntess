import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PagedList } from '../models/pagedList';
import { UserBrief } from '../models/user/UserBrief';
import { ContactUsBrief } from '../models/user/ContactUsMessage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user : any) : Observable<number>{
    return this.http.post<number>('http://localhost:5000/api/users' + '', user);
  }
  updateUser(email:string,user : any) : Observable<number>{
    return this.http.put<number>('http://localhost:5000/api/users/'+email, user);
  }
  getUsers(){
    return this.http.get(environment.apiUrl 
      + '/api/users');
  }

  getPrograms(){
    return this.http.get(environment.apiUrl 
      + '');
  }

  getUsersWithPagination(pageNumber: any) {
    return this.http.get<PagedList<UserBrief>>(
      environment.apiUrl 
      + '/api/users/usersWithPagination?PageNumber=${pageNumber}');
  }

  getContactMessagePagination(pageNumber: any) {
    return this.http.get<PagedList<ContactUsBrief>>(
      environment.apiUrl 
      + '/api/users/contactMessagePagination?PageNumber=${pageNumber}');
  }

  createMessage(fullName?:string,email?:string,message?:string) : Observable<number>{
      let data = {
        fullName,email,message
      }
      return this.http.post<number>(environment.apiUrl+"/api/message",data);
  }
  getMessages() : Observable<number>{

    return this.http.get<number>(environment.apiUrl+"/api/messages");
}
  
}
