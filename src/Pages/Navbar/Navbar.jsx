import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(result=> console.log(result))
    .catch(error=> console.log(error));
  }
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " border border-[#41B06E] font-bold " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ? " border border-[#41B06E] font-bold" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/updateprofile"
          className={({ isActive }) =>
            isActive ? "border border-[#41B06E]  font-bold" : ""
          }
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive }) =>
            isActive ? "border bg-none border-[#41B06E] font-bold" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1]  shadow text-lg rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn text-3xl btn-ghost ">
          <span className="text-[#41B06E] font-bold ">Nova</span> Ventures
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-[#41B06E] px-5 py-3 cursor-pointer rounded-lg text-white font-bold"
          >
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-[#41B06E] px-5 py-3 cursor-pointer rounded-lg text-white font-bold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
