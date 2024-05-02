import { useState } from "react";
import { BlogStructure } from "./interfaces/interfaces";

/* eslint-disable @typescript-eslint/no-explicit-any */
const SingleBlogComponent = (props:any) =>{

const blogs = props.blogs;
const [currentBlog,setCurrentBlog] = useState<BlogStructure | null>(null);
   return(
        <div>
{blogs && blogs.content &&
<div className="row">
  {blogs.content.map((b:any)=>(
    <div className="col-md-3 p-2" key={b.id}>
        <div className="border shadow p-2 on-hover"  data-toggle="modal" data-target="#exampleModal" onClick={setCurrentBlog(b)}>
          <div className="p-1">
            <h2>{b.titolo}</h2>
            <p className="fs-6">{b.categoria + " " + b.tempoLettura}</p>
        </div>
        <div className="p-1">
            {b.testo}
        </div>
        <div className="p-1">
            {b.autore}
        </div>    
        </div>
    </div>
  ))  
}
    </div>
}

<div className="modal" tabIndex={-1} role="dialog" id="exampleModal">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{currentBlog?.titolo}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>



    )   

  
}

export default SingleBlogComponent;