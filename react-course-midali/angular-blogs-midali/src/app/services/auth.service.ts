import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../core/environment";

@Injectable({
  providedIn: 'root'
})


export class ContactService{

private auth:string='/auth'
private categorie:string='/categorie'
private richiestaTalk:string='/richiesteTalk'
constructor(private http:HttpClient){}



register(user:{}){
  return this.http.post(environment.API_URL+this.auth,user)
}
login(user:{}){
  return this.http.post(environment.API_URL+this.auth+'/login',user)
}


}
