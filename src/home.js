import BlogList from "./BlogList";
import useFetch from "./useFetch";

const HomePage = () => {
    // const deleteBlog = (id) =>{
    //     //filter the array and save elements which are not equal to the selected blogs id to a variable
    //     const newBlogs = blogs.filter((blog)=> blog.id !== id);
    //     //set the state to display the contents of the variable
    //     setBlog(newBlogs);
    // }
    const { data, isPending, err } = useFetch("http://localhost:8000/blogs");
    return ( 
        <div className="home">
            <div className="post">
                {err && <div> {err} </div>}
                {isPending && <div>Loading...</div>}
                {data && <BlogList blogs= {data} title = "All Blogs!"/>}
            </div>
        </div>
     );
}
 
export default HomePage;