import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthGuard } from "../core/auth.guard";
import { environment } from "../core/environment";


@Injectable({
  providedIn: 'root'
})


export class AuthService{


private blog:string = '/blog'

constructor(private http:HttpClient,private authGuard:AuthGuard){}


getAll(){
  return this.http.get(environment.API_URL+this.blog)
}

}
