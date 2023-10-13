/** @format */
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import React from "react";
import NotificationBell from "../components/Dashboard1/Notificationbell";
import img2 from "../public/images/p.png"




const Header = () => {
 
  return (
    <>
      <div className='completeheader'>
        <div className='completelogo'>
          <div className='logo'>
            <Link to='/' />
          </div>
          <Link to='/'>
            <h1 className='logofont'>DataBlendIQ</h1>
          </Link>
          <div className='search-bar'>
            <div className='input-container'>
              <input type='text' placeholder='Search here...' />
              <BiSearchAlt2 className='search-icon' />
            </div>
          </div>


        </div>
          <div className='notificationfull'>
            <NotificationBell/>
          

        <div className="profile"><Link to="/profile">
        <img src={img2}  /></Link>
      <div className="profile-info"><Link to="/profile">
        <h3>Admin Name</h3>
        <p>Admin Role</p></Link>
      </div>
      
    </div>
    </div>
      </div>
    </>
  );
};

export default Header;
