/* eslint-disable @typescript-eslint/no-explicit-any */
const SingleBlogComponent = (props:any) =>{

const blogs = props.blogs;

   return(
        <div>
{blogs && blogs.content &&(
<div className="row">
  {blogs.content.map((b:any)=>(
    <div className="col-md-3" key={b.id}>
        <div className="col-md-12 p-1">
            <h2>{b.titolo}</h2>
        </div>
    </div>
})  
}
    </div>
)}
</div>



    )   

  
}

export default SingleBlogComponent;