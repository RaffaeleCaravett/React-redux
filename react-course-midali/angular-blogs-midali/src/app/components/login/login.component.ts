import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  param:string=''

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.param=params['param']
    })
  }

  ngOnInit():void{

  }
}
