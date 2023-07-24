import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            {/* <a href="about.html" className="nav__link nav__link--active"> */}
            <Link to="/about" className="nav__link">
              About Me
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/projects" className="nav__link">
              My Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
