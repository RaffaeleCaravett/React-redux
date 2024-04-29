import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { tokenInterface } from "./interfaces/interfaces";
import { setAccessToken, setIsLoggedIn } from "./redux/accessTokenSlice";
import { setUser } from "./redux/userSlice";

const Nav = () =>{
    const dispatch = useDispatch();
const navigate = useNavigate();
const isLoggedIn = useSelector((state:tokenInterface)=>state.accessToken.isLoggedIn)
const logout = () => {
    localStorage.clear()
  dispatch(setIsLoggedIn(false));
  dispatch(setUser(''))
  dispatch(setAccessToken(''))
navigate('/home')
} 
    return(
<nav className="p-2 bg-yellow-500 text-dark text-center">
    <div className="row">
        <div className="col-md-4 p-2">
            <Link to={'/Home'}>Home</Link>
        </div>
         <div className="col-md-4 p-2">
            {isLoggedIn && <Link to={'/Blog'}>Blog</Link>} 
        </div>
        <div className="col-md-4 p-2">
        {isLoggedIn && <button className="btn" onClick={()=>{logout()}}>Logout</button> }
        {!isLoggedIn &&<Link to={'/Login'}>Login</Link>}
        </div>
    </div>
</nav>

    )
}

export default Nav;