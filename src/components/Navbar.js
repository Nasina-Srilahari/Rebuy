import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import User from './assests/User.png'
import star from './assests/star.png'
import Rebuy_logo from './assests/Rebuy_logo.jpeg'
const Navbar = () => {
  return (
    <nav>
       <div className='navbar'>
      <div className='LeftContainer'>
          <img src={Rebuy_logo} alt='rebuy_logo'/>
      </div>
      <div className='Right_Container'>
      <Link to="/Product_display"><button>Donate</button></Link>
      <Link to="/SEll"><button>Buy</button></Link>
      <Link to="/Buy"><button>Resell</button></Link>
      <Link>
      <div className='fav-btn'>
        <img src={star} alt="favbooks_img"/>
        <span className='favbooks-css'>0</span>
        </div>
      </Link>
      <Link to="userprofile">
        <img src={User} alt='profile-icon' className='profile-icon'/>
      </Link>
      <button>Logout</button>
      </div>
    </div>
    </nav>
  )
}
export default Navbar