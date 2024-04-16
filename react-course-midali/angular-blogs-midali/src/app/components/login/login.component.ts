import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  param:string=''
  form!:FormGroup
  formSignup!:FormGroup

  constructor(private activatedRoute:ActivatedRoute){
    this.activatedRoute.params.subscribe(params => {
      this.param=params['param']
    })
  }

  ngOnInit():void{

  }

  login():void{

  }
  signup():void{

  }
}
