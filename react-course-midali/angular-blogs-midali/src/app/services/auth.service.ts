import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../core/environment";

@Injectable({
  providedIn: 'root'
})


export class AuthService{

private auth:string='/auth'
constructor(private http:HttpClient){}



register(user:{}){
  return this.http.post(environment.API_URL+this.auth,user)
}
login(user:{}){
  return this.http.post(environment.API_URL+this.auth+'/login',user)
}


}
