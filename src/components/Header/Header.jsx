import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title"> Changing Your Idea <br />
          of What Robots 
          <br/>Can Do </h1>
          <p className="hero-subtitle">Your journey to innovation begins here.</p>
          <button className="hero-button">Get Started</button>
        </div>

        {/* left img  */}
        <div className='Left-Images'>
           <img  src="./images/skeloton.png" alt=''></img>
            
        </div>
      </div>
    </div>
  )
}

export default Header
