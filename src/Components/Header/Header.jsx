import { Link, NavLink } from "react-router-dom";
import rickyLogo from "../../assets/images/Rick_and_Morty.svg.png";
import "../../index.css";

export const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/">
          <img className="logo" src={rickyLogo} width="250" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  d-flex align-items-center justify-content-end"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-decoration-underline a text-primary" : "a"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-decoration-underline a text-primary" : "a"
                }
                to="/locations"
              >
                Locations
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-decoration-underline a text-primary" : "a"
                }
                to="/episodes"
              >
                Episodes
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
