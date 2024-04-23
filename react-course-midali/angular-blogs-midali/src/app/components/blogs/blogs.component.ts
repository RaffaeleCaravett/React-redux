import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BlogDTO } from 'src/app/core/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
user:any
blogs:any
errorBlog:string=''
blogForm!:FormGroup
insertBlogForm!:FormGroup
categories:any[]=[]
insertBlogError:string=''
insertBlogSubmitted:boolean=false
showSuccessMessage:string=''
constructor(private authService:AuthService,private router:Router,private blogService:BlogService,private dialog:MatDialog){}

ngOnInit(): void {
  this.authService.verifyAccessToken(localStorage.getItem('accessToken')!).subscribe({
    next:(success:any)=>{
    this.user=success
    this.authService.token=localStorage.getItem('accessToken')!
    this.authService.authenticateUser(true)
      this.router.navigate(['/blog'])
    },
    error:(err:any)=>{
this.authService.authenticateUser(false)
this.authService.token=''
this.authService.refreshToken=''
localStorage.clear()
this.router.navigate([''])
    },
    complete:()=>{}
})
this.blogService.getAll().subscribe({
  next:(blogs:any)=>{
    this.blogs=blogs
    },
    error:(err:any)=>{
this.errorBlog=err.error.message
    },
    complete:()=>{}
})
this.blogForm= new FormGroup({
  titolo: new FormControl('',Validators.required)
})
this.blogService.getAllCategories().subscribe({
  next:(categories:any)=>{
    this.categories=categories
    },
    error:(err:any)=>{
this.categories=[]
    },
    complete:()=>{}
})
this.insertBlogForm= new FormGroup({
  titolo:new FormControl('',Validators.required),
  categoria:new FormControl('',Validators.required),
  testo:new FormControl('',Validators.required),
  autore:new FormControl('',Validators.required),
  tempoLettura:new FormControl('',[Validators.required,Validators.min(1)]),
})

}

searchForm(){
if(this.blogForm.valid){
  this.errorBlog=''
  this.blogService.findByTitle(this.blogForm.controls['titolo'].value).subscribe({
    next:(blogs:any)=>{
      this.blogs=blogs
      },
      error:(err:any)=>{
      this.errorBlog=err.error.message
      },
      complete:()=>{}
  })
}else{
  this.getBlogs(0)
}
}
getBlogs(index:number){
this.blogService.getAll(index).subscribe({
  next:(blogs:any)=>{
    this.blogs=blogs
    },
    error:(err:any)=>{
this.errorBlog=err.error.message
    },
    complete:()=>{}
})
}
postBlog(){
  this.insertBlogError=""
  this.insertBlogSubmitted=true
if(this.insertBlogForm.valid){
let blog:BlogDTO={
  titolo:this.insertBlogForm.controls['titolo'].value,
  testo:this.insertBlogForm.controls['testo'].value,
  autore:this.insertBlogForm.controls['autore'].value,
  categoria:this.insertBlogForm.controls['categoria'].value,
  user_id:this.user.id,
  tempoLettura:this.insertBlogForm.controls['tempoLettura'].value
}
this.blogService.post(blog).subscribe(
  {
    next:(blog:any)=>{
     this.insertBlogForm.reset()
     this.insertBlogError=""
     this.insertBlogSubmitted=false
     this.showSuccessMessage='Blog inserito con successo.'
      },
      error:(err:any)=>{
  this.insertBlogError=err.error.message
      },
      complete:()=>{
        this.getBlogs(0)
      }
  }
)
}else{
  this.insertBlogError="Compila tutto il form"
}
}

openDialog(blog:any){

}
}
