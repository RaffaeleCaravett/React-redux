import { Link } from "react-router-dom"


interface LinkProps {
    param: string;
}

const Links = (props:LinkProps) =>{

    const text:string= props.param

return(
<div className="text-center">
    {text && <Link to={`/${text}`}>{text}</Link> }
    </div>

)
}

export default Links;