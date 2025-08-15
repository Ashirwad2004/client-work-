import './Navbar.css';
import logo from "../../assets/images/logo.jpg";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>

      <div className="custom-navbar fixed-bottom d-flex justify-content-center px-3">
        <div className="navbar-inner d-flex align-items-center">
          <div className="profile-img-wrapper me-3">
            <Link to="/#home" className="nav-link">
              <img src={logo} alt="Profile" className="profile-img-inner" />
            </Link>
          </div>

          <nav className="nav-links d-flex flex-nowrap overflow-auto">
            <Link to="/#home" className="nav-link">Home</Link>
            <Link to="/#services" className='nav-link'>Services</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">About</Link>
            {/* <Link to="/pricing" className="nav-link">Pricing</Link> */}
          </nav>

          <Link to="/#contact" className="btn contact-btn ms-3">Contact</Link>
        </div>
      </div>
    </>
  )
};

export default Navbar;
