import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar bg-base-100 mt-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <NavLink to="/">Home</NavLink>
            <NavLink to="/donation">Donation</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            </ul>
          </div>
          <img className="w-15 ml-16 cursor-pointer" src={logo} alt="" />
        </div>

        <div className="navbar-end hidden md:inline lg:inline">
          <ul className="flex">
            <NavLink to="/" className="ml-60 md:ml-60 mr-20 sm:ml-0">Home</NavLink>
            <NavLink to="/donation" className="mr-20">Donation</NavLink>
            <NavLink to="/statistics" className="">Statistics</NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
