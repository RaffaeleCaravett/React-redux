import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  param:string=''
  form!:FormGroup
  formSignup!:FormGroup
  submitted:boolean=false

  constructor(private activatedRoute:ActivatedRoute,private authService:AuthService){
    this.activatedRoute.params.subscribe(params => {
      this.param=params['param']
    })
  }

  ngOnInit():void{
    this.submitted=false
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
  this.form.reset()
this.formSignup.reset()
}

  login():void{
    this.submitted=true
    if(this.form.valid){
      this.authService.login({email:'gasg',password:'ihihi'}).subscribe((Data:any)=>{console.log(Data)})
    }
  }
  signup():void{
this.authService.register({email:'gasg',password:'ihihi',nome:'gasg',cognome:'gadsgds'}).subscribe((Data:any)=>{console.log(Data)})
  }
}
