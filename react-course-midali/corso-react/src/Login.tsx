import { useState } from "react";

const Login = () =>{

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')





    return (
        <div className="row m-0 p-0 background">
          <div className="container py-5 text-center">
  <div className="row py-5">
     <div className="col-md-6 py-5">
<h1 className="py-5">Your absolute wonderful website</h1>
    </div>
    <div className="col-md-6 py-5">
        <form action="" className="border p-3 rounded shadow py-5">
            <h1>Accedi</h1>
    <label className="py-2">Inserisci l'email</label>
    <input type="email" required className="form-control w-75 m-auto" onChange={(e)=>setEmail(e.target.value)}/>
    <label className="py-2">Inserisci la password</label>
    <input type="password" required className="form-control w-75 m-auto" onChange={(e)=>setPassword(e.target.value)}/>
    <button className="btn m-1" onClick={()=>console.log(email,password)}> Login</button>
</form>
    </div>
   

  </div>
</div>  
        </div>



    )
}

export default Login;