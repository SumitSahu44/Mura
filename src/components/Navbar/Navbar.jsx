import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='nav'>
            <div className='logo'>
                MURA
            </div>
            <div className='left-nav'>
                    <div>
                        <ul>
                            <li>Home</li>
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
