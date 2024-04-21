import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthGuard } from "../core/auth.guard";
import { environment } from "../core/environment";
import { BlogDTO } from "../core/interfaces";


@Injectable({
  providedIn: 'root'
})


export class BlogService{


private blog:string = '/blog'
private categorie:string = '/categorie'

constructor(private http:HttpClient,private authGuard:AuthGuard){}


getAll(index?:number){
  if(!index){
  return this.http.get(environment.API_URL+this.blog)
  }else{
    return this.http.get(environment.API_URL+this.blog+`?page=${index}`)
  }

}
post(blog:BlogDTO){
  return this.http.post(environment.API_URL+this.blog,blog)
}
put(id:number,blog:BlogDTO){
  return this.http.put(environment.API_URL+this.blog+`/${id}`,blog)
}
delete(id:number){
  return this.http.delete(environment.API_URL+this.blog+`/${id}`)
}

getAllCategories(){
  return this.http.get(environment.API_URL+this.blog+this.categorie)
}
findByTitle(title:string){
  return this.http.get(environment.API_URL+this.blog+`/titolo/${title}`)
}
}
