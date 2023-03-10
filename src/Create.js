import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Mario");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsPending(true);
        e.preventDefault();
        const newBlog = {title, body, author};
        setTimeout(()=>{
            fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newBlog)
            })
            .then(()=>{
                setIsPending(false);
                history.push("/")
            })
        },1000);
    }
  return (
    <div className="create">
        <h2>Add a new Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input
                type="text"
                required 
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <label>Blog Body:</label>
            <textarea required value={body} onChange={e=>setBody(e.target.value)}>
            </textarea>
            <label>Blog Author:</label>
            <select name="" value={author} onChange={e=>setAuthor(e.target.value)}>
                <option value="Mario">Mario</option>
                <option value="Luigi">Luigi</option>
                <option value="Yoshi">Yoshi</option>
            </select>
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding Blog...</button>}
        </form>
    </div>
  )
}

export default Create