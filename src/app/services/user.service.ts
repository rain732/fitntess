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
    return this.http.post<number>(environment.apiUrl + '', user);
  }
  updateUser(user : any) : Observable<number>{
    return this.http.post<number>(environment.apiUrl + '', user);
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
