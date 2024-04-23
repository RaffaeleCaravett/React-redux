import { useState } from "react";

const Login = () =>{

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [error,setError]= useState('')
const [loginSection,setLoginSection] = useState(true)

const login = () =>{
    if(/^$/.test(password)){
        document.getElementsByClassName('login')[1].textContent="Campo invalido. Inserisci del testo."
    }else{
        document.getElementsByClassName('login')[1].textContent=""
    }
    if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)){
document.getElementsByClassName('login')[0].textContent="Campo invalido. Prova una email tipo 'a@a.com'"
    }else{
        console.log('hiihi')
        document.getElementsByClassName('login')[0].textContent="Campo invalido. Prova una email tipo 'a@a.com'"

    }
    if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)&&!/^$/.test(password)) {
        console.log('here')
        const body = 
{
    email:email,
    password:password
}
const inputEmail = document.getElementsByClassName('login')[0] as HTMLInputElement

inputEmail.value=""

fetch('http://localhost:3031/auth/login',{
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body) 
  }
)
.then(res=>{
    return res.json();
})
.then(data=>{
    if(data&&data.status!=200){
        setError(data.message)
    }
    const inputEmail = document.getElementsByClassName('login')[0] as HTMLInputElement
    const inputPassword = document.getElementsByClassName('login')[1] as HTMLInputElement

    inputEmail.value=""
    inputPassword.value=""

    console.log(data)
   
})
.catch((err)=>{
    if(err.name === 'AbortError') {
        console.log('Aborted')
    }else{
   setError(err)
    }
})

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
        {loginSection&&<form className="border p-3 rounded shadow py-5 bg">
            <h1>Accedi</h1>
    <label className="py-2">Inserisci l'email</label>
    <input type="email" required className="form-control login w-75 m-auto" onChange={(e)=>setEmail(e.target.value)}/>
    <p className="text-danger email"></p>
    <label className="py-2">Inserisci la password</label>
    <input type="password" required className="form-control login w-75 m-auto" onChange={(e)=>setPassword(e.target.value)}/>
    <p className="text-danger password"></p>
    <button className="btn m-3" type="button" onClick={()=>login()}> Login</button>
    <p className="text-danger">{error}</p>
    <hr />
    <div>oppure</div>
    <button className="btn btn-light m-3" type="button" onClick={()=>setLoginSection(false)}> Signup</button>
</form>}
{!loginSection&&<form className="border p-3 rounded shadow py-5 bg">
            <h1>Registrati</h1>
    <label className="py-2">Email</label>
    <input type="email" required className="form-control w-75 m-auto" onChange={(e)=>setEmail(e.target.value)}/>
    <p className="text-danger email"></p>
    <label className="py-2">Password</label>
    <input type="password" required className="form-control w-75 m-auto" onChange={(e)=>setPassword(e.target.value)}/>
    <p className="text-danger password"></p>
    <label className="py-2">Nome</label>
    <input type="email" required className="form-control w-75 m-auto" onChange={(e)=>setEmail(e.target.value)}/>
    <p className="text-danger email"></p>
    <label className="py-2">Cognome</label>
    <input type="password" required className="form-control w-75 m-auto" onChange={(e)=>setPassword(e.target.value)}/>
    <p className="text-danger password"></p>
    <button className="btn m-3" type="button" onClick={()=>login()}> Login</button>
    <p className="text-danger">{error}</p>
    <hr />
    <div>oppure</div>
    <button className="btn btn-light m-3" type="button" onClick={()=>setLoginSection(false)}> Signup</button>
</form>}
    </div>
   

  </div>
</div>  
        </div>



    )
}

export default Login;