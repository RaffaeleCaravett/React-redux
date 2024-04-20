import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
user:any
constructor(private authService:AuthService,private router:Router){}

ngOnInit(): void {
  this.authService.verifyAccessToken(localStorage.getItem('accessToken')!).subscribe({
    next:(success:any)=>{
    this.user=success
    console.log(this.user)
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

}
}
