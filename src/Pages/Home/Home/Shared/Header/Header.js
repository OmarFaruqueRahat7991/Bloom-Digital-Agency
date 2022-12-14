import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../../../Assets/Logo/favicon.jpg';
import { AuthContext } from "../../../../../AuthProvider/AuthProvider";
import './Header.css';

const Header = () => {

  const { user , logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {

    }).catch((error) => {
      console.log(error);
    });
  }

    const menuItems = <>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/blogs'>Blogs</Link>
            {user?.email ? (
                <>
                  
                    <Link to='/services'>Services</Link>
                    <Link to='/add'>Add A Service</Link>
                    <button onClick={handleLogOut} className="btn-ghost">Log Out</button>
                  
                </>
              ) : (
                
                  <Link to='/login'>Login</Link>
               
              )}
            
            
        </li>

    
    </>
  return (
    <div className="navbar bg-base-100 text-white h-20 p-16 mt-16">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52   font-medium"
          >
            
            {menuItems}
            
          </ul>
        </div >
        <div className="flex ">
            <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img className="footer-logo"  src={logo} alt="" srcset="" />
            <span className="font-bold text-2xl ml-2">Bloom Digital Agency</span> 
            </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex mt-5">
        <ul className="menu menu-horizontal p-0  font-medium">
          
        {menuItems}
          
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn">Hire Me</Link>
      </div>
    </div>
  );
};

export default Header;
