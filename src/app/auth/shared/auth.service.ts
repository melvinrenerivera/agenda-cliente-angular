import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
   private http:HttpClient
  ) { }

  login(user:any){
    return this.http.post('http://localhost:8080/login',user)
    .pipe(map((user:any)=>{
      const expireAt = moment().add(user['expiresIn'],'second');
      localStorage.setItem("agenda_role",user.role);
      localStorage.setItem("agenda_userId",user.userId);
      localStorage.setItem("agenda_token",user.token);
      localStorage.setItem("agenda_name",user.name);
      localStorage.setItem("agenda_expiresIn", JSON.stringify(expireAt.valueOf()));
    }));
  }

  isLoggedIn(){
    const dateExpiration = localStorage.getItem("agenda_token");
    if(dateExpiration){
        const expirate = JSON.parse(dateExpiration);
        return moment().isBefore(expirate);
    }
    return false;
  }

  isAdmin(){
    return localStorage.getItem("agenda_role")=="ADMIN";
  }

  getName(){
    return  localStorage.getItem("agenda_name") || '';
  }

  getToken(){
    return localStorage.getItem("agenda_token");
  }

  logout(){
    localStorage.removeItem("agenda_role");
    localStorage.removeItem("agenda_userId");
    localStorage.removeItem("agenda_token");
    localStorage.removeItem("agenda_name");
    localStorage.removeItem("agenda_expiresIn");
  }

  isLoggeout(){
    return !this.isLoggedIn();
  }

  
}
