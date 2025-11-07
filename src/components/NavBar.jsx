import {Link} from "react-router-dom";
import "../css/Navbar.css"
function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-brand">
                {/* now this link comes from react-router-dom, this acts like a normal yperlink except to something on your onw web page */}
                <Link to="/">Movie App</Link>
            </div>
            <div className="links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}
export default NavBar