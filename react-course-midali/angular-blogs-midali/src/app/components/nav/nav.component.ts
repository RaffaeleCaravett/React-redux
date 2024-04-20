import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
authenticated:boolean=false

constructor(private router:Router,private authService:AuthService){
  this.authService.isAuthenticated.subscribe((bool:boolean)=>{
    this.authenticated=bool
  })
}


logout(){
localStorage.clear()
this.router.navigate(['/'])
}

}
