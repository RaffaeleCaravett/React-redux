import { useEffect, useState } from "react";
import { setAccessToken, setIsLoggedIn } from "./redux/accessTokenSlice";
import { setUser } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenInterface, userInterface } from "./interfaces/interfaces";
import SingleBlogComponent from "./singleBlogComponent";

const Blog =()=>{
/*
Auto-login
*/

const user = useSelector((state:userInterface)=>state.user)
const dispatch = useDispatch()
const navigate= useNavigate()
const [blogs,setBlogs] = useState({})

useEffect(() => {
  const handlePageRefresh = () => {
    if (window.performance.navigation.type === 1) {
  const verifyTokens = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      
      if (accessToken) {
        try {
          const response = await fetch(`http://localhost:3031/auth/verifyAccessToken/${accessToken}`, {
            method: "GET",
            headers: {
              "Content-Length": "0"
            }
          });
          const data = await response.json();
          if (response.ok && data && !data.status) {
            dispatch(setAccessToken({accessToken:accessToken}));
            dispatch(setUser(data));
            dispatch(setIsLoggedIn(true));
            navigate('/Blog');
          } else {
            console.log('An error occurred during the request.');
            dispatch(setAccessToken({ accessToken: '' }));
            dispatch(setIsLoggedIn(false));
            try {
              const response = await fetch(`http://localhost:3031/auth/verifyRefreshToken/${refreshToken}`);
              const data = await response.json();
              if (response.ok && data) {
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('refreshToken', data.refreshToken);
                dispatch(setAccessToken(data));
                verifyTokens();
              } else {
                console.log('An error occurred during the request.');
              }
            } catch (error) {
              console.error('Error verifying refresh token:', error);
            }
          }
        } catch (error) {
          console.error('Error verifying access token:', error);
          dispatch(setAccessToken({ accessToken: '' }));
          dispatch(setIsLoggedIn(false));

        }
      } else if (refreshToken) {
        try {
          const response = await fetch(`http://localhost:3031/auth/verifyRefreshToken/${refreshToken}`);
          const data = await response.json();
          if (response.ok && data) {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            dispatch(setAccessToken(data.accessToken));
            verifyTokens();
          } else {
            console.log('An error occurred during the request.');
          }
        } catch (error) {
          console.error('Error verifying refresh token:', error);
        }
      } else {
        console.log('No tokens available.');
      }
    };

    verifyTokens();
  }}
    window.addEventListener('load', handlePageRefresh);
  }, [dispatch, navigate]);


/*
Auto-login 
*/
const token = useSelector((state:tokenInterface)=>state.accessToken.accessToken)
console.log(token)
useEffect(()=>{
  const getBlogs = () =>{

    fetch('http://localhost:3031/blog',{
      method: "GET", 
      headers: {
        "Authorization": `Bearer ${token||''}`
      }
    }).then((data)=>{
      return data.json()
     })
     .then(data=>{
      if(data&&data.status&&data.status!=200){
        console.log(data.message)
      }else{
        setBlogs(data)
      }
     })
     .catch(error=>{
      console.log(error)
     })


}
   getBlogs()
},[token])


/*
Getting blogs
*/

/*
End getting blogs
*/

    return(
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 p-2">
            <h1>Blogs</h1>
          </div>
          <div className="col-md-12 p-2">
            Ciao {user && <span>{ user.nome}</span>} Recupera e leggi tutti i blog che vuoi!
          </div>
          <div className="col-md-12 p-2">
            {blogs && <SingleBlogComponent blogs={blogs}></SingleBlogComponent>}
          </div>
        </div>
      </div>
    )
    }
    export default Blog;