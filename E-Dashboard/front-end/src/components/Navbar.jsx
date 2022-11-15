import {Link,useNavigate} from "react-router-dom"
import './navbar.css'

let Navbar = () => {
    let auth=localStorage.getItem('user');
    let navigate=useNavigate();
    let handleLogout=()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div className="navbar-cont">
                <ul className="ulist">

                 {
                    auth?<>
                     <li>  <Link to="/" style={{"text-decoration":"none"}} className="navbar-brand"> product</Link></li>
            <li>  <Link style={{"text-decoration":"none"}} to="/add-product" className="navbar-brand">Add product</Link></li>
            {/* <li>  <Link to="/updateproduct" className="navbar-brand">update product</Link></li> */}
            <li>  <Link style={{"text-decoration":"none"}} to="/profile" className="navbar-brand">Profile</Link></li>
            <li><Link style={{"text-decoration":"none"}} to="/logout" onClick={handleLogout} className="navbar-brand">logout({JSON.parse(auth).name})</Link></li>

                    </>:<>
                    <li><Link style={{"text-decoration":"none"}} to="/signup" className="navbar-brand">signup</Link></li>
                 <li><Link style={{"text-decoration":"none"}} to="/login" className="navbar-brand">Login</Link></li>
                    </>
                 }
                </ul>
        </div>


        
    )
}

export default Navbar;