import { Outlet, Link } from "react-router-dom";
import './navbar.css';
const Layout = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <div className="cloud1" />
        <div className="cloud2" />
      </nav>

      <Outlet />
    </>
    
  )
};

export default Layout;