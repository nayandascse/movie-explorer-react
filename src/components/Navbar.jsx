import { Link, NavLink } from "react-router-dom";

const Navbar = () => (
  <header className="navbar">
    <div className="container navbar-content">
      <Link to="/" className="logo"><span>🎬</span> Movie<span>Explorer</span></Link>
      <nav className="nav-links">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        <NavLink to="/movies" className={({isActive}) => isActive ? "active" : ""}>Movies</NavLink>
      </nav>
      <Link to="/movies" className="nav-button">Explore Movies</Link>
    </div>
  </header>
);

export default Navbar;