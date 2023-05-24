import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user : any) : Observable<number>{
    return this.http.post<number>('http://localhost:5000/api/users' + '', user);
  }
  updateUser(email:string,user : any) : Observable<number>{
    return this.http.post<number>('http://localhost:5000/api/users/'+email, user);
  }
  getUsers(){
    return this.http.get(environment.apiUrl 
      + '');
  }

  getPrograms(){
    return this.http.get(environment.apiUrl 
      + '');
  }
  
}
