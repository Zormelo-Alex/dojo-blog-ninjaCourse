import React from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const {data: blog, err, isPending} = useFetch("http://localhost:8000/blogs/" + id);
    const handleDelete = (e) =>{
        fetch("http://localhost:8000/blogs/"+id, {
            method: "DELETE"
        }).then(()=>{
            history.push("/");
        })
    }

  return (
    <div className="blog-details">
        {err && <h2>{err}</h2>}
        {isPending && <p>Loading...</p>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete Blog</button>
            </article>
        ) }
    </div>
  )
}

export default BlogDetails;