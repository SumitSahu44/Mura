import React from 'react'
import './Navbar.css'
import { Link, Links } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='nav'>
          <Link to="/">  <div className='logo'>
                MURA
            </div>
         </Link>
            <div className='left-nav'>
                    <div>
                        <ul>
                           <Link to="/"><li>Home</li></Link> 
                            <li>About Us</li>
                            <li>Process</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                       <button className='btn'>Try Now</button>
                   </div>
            </div>
           
             
        </nav>
    </div>
  )
}

export default Navbar
