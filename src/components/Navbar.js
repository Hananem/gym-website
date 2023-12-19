import {useState} from "react"
import { Link, NavLink} from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiFillCloseCircle} from "react-icons/ai"
import "./Navbar.css"
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)
  return(
    <nav className='navbar'>
       <div className="container">
       <div className="nav-container">
          <Link to="/" className="logo">
                 GYM
          </Link>
          <div className="nav-menu">
          <ul className={`nav-items ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink>
            </li>

            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : ''}>About</NavLink>
            </li>

            <li>
                <NavLink to="/trainers" className={({isActive}) => isActive ? 'active-link' : ''}>Trainers</NavLink>
            </li>
            <li>
                <NavLink to="/plans" className={({isActive}) => isActive ? 'active-link' : ''}>Plans</NavLink>
            </li>

              <li>
                <NavLink to="/gallery" className={({isActive}) => isActive ? 'active-link' : ''}>Gallery</NavLink>
            </li>

            <li>
                <NavLink to="/contact" className={({isActive}) => isActive ? 'active-link' : ''}>Contact</NavLink>
            </li>
          </ul>
          <button className="menu-icons" onClick={() => setIsNavShowing(!isNavShowing)}>
          { isNavShowing ?  <AiFillCloseCircle  className="close" /> : <FaBars />}
          </button>
          </div>
          </div>
       </div>
    </nav>
  );
};

export default Navbar;