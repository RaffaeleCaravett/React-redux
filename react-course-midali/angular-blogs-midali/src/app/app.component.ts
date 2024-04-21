import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-blogs-midali';

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem('accessToken')){
      this.authService.verifyAccessToken(localStorage.getItem('accessToken')!).subscribe({
        next:(success:any)=>{
        this.authService.token=localStorage.getItem('accessToken')!
        this.authService.authenticateUser(true)
          this.router.navigate(['/blog'])
        },
        error:(err:any)=>{
          if(localStorage.getItem('refreshToken')){
            this.authService.verifyRefreshToken(localStorage.getItem('refreshToken')!).subscribe({
              next:(success:any)=>{
                localStorage.setItem('accessToken',success.accessToken)
                localStorage.setItem('refreshToken',success.refreshToken)
                this.authService.token=localStorage.getItem('accessToken')!
                this.authService.verifyAccessToken(this.authService.token).subscribe({
                  next:(succes:any)=>{
                    localStorage.setItem('user',JSON.stringify(success))
                    this.authService.authenticateUser(true)
                    this.router.navigate(['/blog'])
                  }
                })
              }
            })
          }else{
            this.authService.authenticateUser(false)
            this.authService.token=''
            this.router.navigate(['/'])
          }
        }
      })
            }

  }
}
