import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <nav className='nav'>
          <Link to="/" style={{ textDecoration: 'none' }}>  <div className='logo'>
                MURA
            </div>
         </Link>
            <div className='left-nav'>
                    <div>
                        <ul>
                           <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link> 
                           <Link to="/step" style={{ textDecoration: 'none' }}><li>Steps</li></Link> 
                           <Link to="/predict" style={{ textDecoration: 'none' }}><li>Predict</li></Link> 
                            {/* <li>FAQ</li> */}
                        </ul>
                    </div>
                    <div>
                      <Link to="/predict" style={{ textDecoration: 'none' }}><button className='btn'>Try Now</button></Link>
                   </div>
            </div>
           
             
        </nav>
    </div>
  )
}

export default Navbar
