import { Link } from "react-router-dom/cjs/react-router-dom";


const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>that page cannot be found</p>
            <Link to= "/">Go home</Link>
        </div>
     );
}
 
export default NotFound;