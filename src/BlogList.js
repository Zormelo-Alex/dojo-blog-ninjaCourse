import { Link } from "react-router-dom";
const BlogList = ({blogs, title, deleteBlog}) => {
    //if you use (props); then;
    // const Blog = props.blog;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((post) => (
                <div className="blog-preview" key={post.id}>
                <Link to={`/blog/${post.id}`}>
                    <h2>{post.title}</h2>
                    <p>Written by {post.author}</p>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;