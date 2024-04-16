import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.form= new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
    this.formSignup=new FormGroup({
      nome: new FormControl('',[Validators.required,Validators.minLength(2)]),
      cognome: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    ripeti:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  login():void{

  }
  signup():void{

  }
}
