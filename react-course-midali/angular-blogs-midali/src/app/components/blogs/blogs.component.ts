import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
constructor(private authService:AuthService,private router:Router,private blogService:BlogService){}

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
}
}
