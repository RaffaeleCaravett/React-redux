import { Link } from "react-router-dom";

const Nav = () =>{
    return(
<nav className="p-2 bg-yellow-500 text-dark text-center">
    <div className="row">
        <div className="col-md-4 p-2">
            <Link to={'/Home'}>Home</Link>
        </div>
        <div className="col-md-4 p-2">
            <Link to={'/Blog'}>Blog</Link>
        </div>
        <div className="col-md-4 p-2">
            <Link to={'/Login'}>Login</Link>
        </div>
    </div>
</nav>

    )
}

export default Nav;