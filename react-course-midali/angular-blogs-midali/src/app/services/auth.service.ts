import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../core/environment";
import { AuthGuard } from "../core/auth.guard";
import { BehaviorSubject } from "rxjs";
import { loginDTO } from "../core/interfaces";

@Injectable({
  providedIn: 'root'
})


export class AuthService{

private auth:string='/auth'
public token:string =''
public refreshToken:string = ''
public isAuthenticated:BehaviorSubject<boolean>= new BehaviorSubject<boolean>(false)

constructor(private http:HttpClient,private authGuard:AuthGuard){}



register(user:{}){
  return this.http.post(environment.API_URL+this.auth,user)
}
login(user:loginDTO){
  if(user.email=='raffaelecaravetta13@gmail.com'){
    return this.http.post(environment.API_URL+this.auth+'/login',user)
  }else{
    return null;
  }
}
authenticateUser(bool:boolean){
this.isAuthenticated.next(bool)
return this.authGuard.authenticateUser(bool)
}
verifyAccessToken(token:string){
return this.http.get(environment.API_URL+this.auth+'/verifyAccessToken/'+token)
}
verifyRefreshToken(token:string){
return this.http.get(environment.API_URL+this.auth+'/verifyRefreshToken/'+token)
}
}
