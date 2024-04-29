import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAccessToken, setIsLoggedIn } from "./redux/accessTokenSlice";
import { setUser } from "./redux/userSlice";


const Home =()=>{
/*
Auto-login
*/


const dispatch = useDispatch()
const navigate= useNavigate()

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
            dispatch(setAccessToken(accessToken));
            dispatch(setUser(data));
            dispatch(setIsLoggedIn(true));
          } else {
            console.log('An error occurred during the request.');
            dispatch(setAccessToken({ accessToken: '' }));
            dispatch(setIsLoggedIn(false));
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

   

return('')
}
export default Home;