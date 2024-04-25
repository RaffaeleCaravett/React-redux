import { useState } from "react";

const Login = () =>{

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [emailSignup,setEmailSignup] = useState('')
const [passwordSignup,setPasswordSignup] = useState('')
const [nome,setNome] = useState('')
const [cognome,setCognome] = useState('')
const [error,setError]= useState('')
const [loginSection,setLoginSection] = useState(true)
const [userRegistration,setUserRegistration] = useState('')

const login = () =>{
const emailInput = document.getElementsByClassName('login')[0] as HTMLInputElement; 
const passwordInput = document.getElementsByClassName('login')[1] as HTMLInputElement; 
 const errorPasswordP = document.getElementsByClassName('password')[0] as HTMLInputElement; 
 const errorEmailP = document.getElementsByClassName('email')[0] as HTMLInputElement; 


if(passwordInput.value==''||passwordInput.value==null||passwordInput.value==undefined){
    errorPasswordP.textContent='Stai lasciando questo campo vuoto.'
}else{
    errorPasswordP.textContent=''
}

if(emailInput.value==''||emailInput.value==null||emailInput.value==undefined){
    errorEmailP.textContent='Stai lasciando questo campo vuoto.'
}else{
    errorEmailP.textContent=''
}

if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailInput.value)&&!/^$/.test(passwordInput.value)) {
        const body = 
{
    email:email,
    password:password
}



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
    if(data&&data.status&&data.status!=200){
        setError(data.message)
    }else if(data && !data.status){
     emailInput.value=''
     passwordInput.value=''

     console.log(data)
    }
})
.catch((err)=>{
    if(err.name === 'AbortError') {
        console.log('Aborted')
    }else{
   setError(err)
    }
})
}else if(emailInput.value.trim()!==''&&!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(emailInput.value)){
    errorEmailP.textContent='Prova ad inserire una email tipo : gigi@finizio.com'
}
}


const signup = () => {
const body = {
    nome:nome,
    cognome:cognome,
    email:emailSignup,
    password:passwordSignup
}

fetch('https://localhost:3031/auth',{
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body) 
  }
).then(res=>{
    if(!res.ok){
        throw Error ("Errore nell'elaborazione della richiesta.")
    }
    return res.json()
}
).then(data=>{
if(data&&data.status&&data.status!=200){
    throw Error(data.message)
}
setUserRegistration('User registrato con successo.')
setLoginSection(true)
})
}

const updateSection = (bool:boolean,str:string) => {
setLoginSection(bool)
setUserRegistration(str);
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
            <p>{userRegistration}</p>
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
    <button className="btn btn-light m-3" type="button" onClick={()=>updateSection(false,'')}> Signup</button>
</form>}
{!loginSection&&<form className="border p-3 rounded shadow py-5 bg">
            <h1>Registrati</h1>
    <label className="py-2">Email</label>
    <input type="email" required className="form-control w-75 m-auto" onChange={(e)=>setEmailSignup(e.target.value)}/>
    <p className="text-danger email"></p>
    <label className="py-2">Password</label>
    <input type="password" required className="form-control w-75 m-auto" onChange={(e)=>setPasswordSignup(e.target.value)}/>
    <p className="text-danger password"></p>
    <label className="py-2">Nome</label>
    <input type="email" required className="form-control w-75 m-auto" onChange={(e)=>setNome(e.target.value)}/>
    <p className="text-danger email"></p>
    <label className="py-2">Cognome</label>
    <input type="password" required className="form-control w-75 m-auto" onChange={(e)=>setCognome(e.target.value)}/>
    <p className="text-danger password"></p>
    <button className="btn m-3" type="button" onClick={()=>signup()}> Signup</button>
    <p className="text-danger">{error}</p>
    <hr />
    <div>oppure</div>
    <button className="btn btn-light m-3" type="button" onClick={()=>updateSection(true,'')}> Login</button>
</form>}
    </div>
   

  </div>
</div>  
        </div>



    )
}

export default Login;