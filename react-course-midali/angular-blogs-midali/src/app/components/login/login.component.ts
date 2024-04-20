import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { loginDTO, registrationDTO } from 'src/app/core/interfaces';
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
  loginError:any=null
  signupError:any=null
  constructor(private activatedRoute:ActivatedRoute,private authService:AuthService,private router:Router){
    this.activatedRoute.params.subscribe(params => {
      this.param=params['param']
      this.submitted=false
      this.loginError=null
      this.signupError=null
      this.form.reset()
      this.formSignup.reset()
    })
  }

  ngOnInit():void{
    this.submitted=false
    this.loginError=null
    this.signupError=null
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
    if(this.form.valid&&this.form.controls['email'].value=='raffaelecaravetta13@gmail.com'){
      let user:loginDTO ={
        email:this.form.controls['email'].value,
        password:this.form.controls['password'].value
      }
  this.authService.login(user)!.subscribe({
        next:(Data:any)=>{
        this.loginError=null
this.authService.token=Data.accessToken
this.authService.refreshToken=Data.refreshToken
this.authService.authenticateUser(true)
localStorage.setItem('accessToken',Data.accessToken)
localStorage.setItem('refreshToken',Data.refreshToken)
this.router.navigate(['/blog'])
},
        error:(err:any)=>{
          this.loginError=err.error.message
        },
        complete:()=>{}
      })
    }else{
      this.loginError="Il form non è completo."
    }
  }
  signup():void{
    this.submitted=true
    if(this.formSignup.valid&&this.formSignup.controls['password'].value==this.formSignup.controls['ripeti'].value){
      let user:registrationDTO ={
        email:this.formSignup.controls['email'].value,
      password:this.formSignup.controls['password'].value,
      nome:this.formSignup.controls['nome'].value,
      cognome:this.formSignup.controls['cognome'].value
      }
    this.authService.register(
      user)!.subscribe({
      next:(Data:any)=>{
      this.signupError=null
      this.router.navigate(['/login','login'])
      },
      error:(err:any)=>{
        this.signupError=err.error.message
      },
      complete:()=>{}
    })
  }else if(this.formSignup.valid&&this.formSignup.controls['password'].value!=this.formSignup.controls['ripeti'].value){
    this.signupError="Le password non coincidono."
  }else{
    this.signupError="Il form non è completo."
  }
}

}
