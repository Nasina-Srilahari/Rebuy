import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import User from './assests/User.png'
import star from './assests/star.png'
import Rebuy_logo from './assests/Rebuy_logo.jpeg'
const Navbar2 = () => {
  return (
    <nav>
       <div className='navbar'>
      <div className='LeftContainer'>
          <img src={Rebuy_logo} alt='rebuy_logo'/>
      </div>
      <div className='Right_Container'>
      <Link to='/'><button>Sign Up</button></Link>
      <Link to="/Login"><button>Login</button></Link>
      </div>
    </div>
    </nav>
  )
}
export default Navbar2