import Links from './Link.tsx'

const Nav = () =>{
    return(
<nav className="p-2 bg-dark text-white">
    <div className="row">
        <div className="col-md-3">
            <Links  param="home" />
        </div>
        <div className="col-md-3">
            <Links  param='blogs'/>
        </div>
        <div className="col-md-3">
            <Links  param='fun'/>
        </div>
        <div className="col-md-3">
            <Links  param='login'/>
        </div>
    </div>
</nav>

    )
}

export default Nav;