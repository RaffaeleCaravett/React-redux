import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
authenticated:boolean=false

constructor(private router:Router){}
logout(){
localStorage.clear()
this.router.navigate(['/'])
}

}
