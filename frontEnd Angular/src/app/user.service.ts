import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http:HttpClient) { }//אפשרות החיבור לסי שארפ
  index:number=4;
  getAllUsers(){
    return this.http.get<User[]>("https://localhost:44386/api/user/getallusers");
  }

  chekUser(u: User): Observable<any>{
    console.log("chekUser")
    return this.http.post<User>("https://localhost:44386/api/user2/CheckUser", u);
  }

  addUser(u:User): Observable<User>{
    return this.http.post<User>("https://localhost:44386/api/user/AddUser", u);
  }
}
