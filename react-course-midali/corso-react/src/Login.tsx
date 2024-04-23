import { useState } from "react";

const Login = () =>{

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')


const login = () =>{
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { 
const body = 
{
    email:email,
    password:password
}
document.getElementsByClassName('email')[0].textContent=""
document.getElementsByClassName('password')[0].textContent=""
console.log(body)
    }else{
document.getElementsByClassName('email')[0].textContent="Campo invalido. Prova una email tipo 'a@a.com'"
    }

}



    return (
        <div className="row m-0 p-0 background">
          <div className="container py-5 text-center">
  <div className="row py-5">
     <div className="col-md-6 py-5">
<h1 className="py-5">Your absolute wonderful website</h1>
    </div>
    <div className="col-md-6 py-5">
        <form className="border p-3 rounded shadow py-5 bg">
            <h1>Accedi</h1>
    <label className="py-2">Inserisci l'email</label>
    <input type="email" required className="form-control w-75 m-auto" onChange={(e)=>setEmail(e.target.value)}/>
    <p className="text-danger email"></p>
    <label className="py-2">Inserisci la password</label>
    <input type="password" required className="form-control w-75 m-auto" onChange={(e)=>setPassword(e.target.value)}/>
    <p className="text-danger password"></p>
    <button className="btn m-3" type="button" onClick={()=>login()}> Login</button>
</form>
    </div>
   

  </div>
</div>  
        </div>



    )
}

export default Login;