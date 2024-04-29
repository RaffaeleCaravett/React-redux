import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setIsLoggedIn } from "./redux/accessTokenSlice";
import { setUser } from "./redux/userSlice";

const Home =()=>{

    const dispatch = useDispatch()
    const navigate = useNavigate()
    if(localStorage.getItem('accessToken')){
    fetch(`http://localhost:3031/auth/verifyAccessToken/${localStorage.getItem('accessToken')}`,{
      method: "GET", 
      headers: {
        "Content-Length": "0"
      },
    }
    )
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      if(data&&data.status&&data.status!=200){
          console.log('An error occurred during the request.')
      }else if(data && !data.status){
       dispatch(setAccessToken(localStorage.getItem('accessToken')));
       dispatch(setUser(JSON.parse(data)))
       dispatch(setIsLoggedIn(true))
      localStorage.setItem('accessToken', JSON.stringify(data.accessToken))
      localStorage.setItem('refreshToken', JSON.stringify(data.refreshToken))
     navigate('/blogs')
      }
    })
    .catch((err)=>{
      if(err.name === 'AbortError') {
          console.log('Aborted')
      }else{
        dispatch(setAccessToken({accessToken:''}));
        dispatch(setIsLoggedIn(false))  }
        console.log(err)
    })
    }else if(localStorage.getItem('refreshToken')){
    console.log('ihih')
    }
    

return('')
}
export default Home;