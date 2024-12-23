import React from 'react'
import { MdOutlineStart } from "react-icons/md";
import './About.css'
const About = () => {
  return (
    <div className='about'>
        <div className='about-container'>
        <h5 className='section-title'>ABOUT US</h5>
        <h2 className='section-detail'>You can check your XRAY in <br></br> 3 simple Steps</h2>


        <div className='steps-container'>
            <div className='step'>
               <MdOutlineStart className='icon'/>
                <h5 className='text'>Click on Get start</h5>
                <p>
                Tincidunt nisi orci sodales non. Netus integer
                 nunc mi nibh cursus vitae ut nulla lobortis.
                  Risus duis bibendum.
                </p>
            </div>
            <div className='step'>
               <MdOutlineStart className='icon'/>
                <h5 className='text'>Upload your Xray</h5>
                <p>
                Tincidunt nisi orci sodales non. Netus integer
                 nunc mi nibh cursus vitae ut nulla lobortis.
                  Risus duis bibendum.
                </p>
            </div>
            <div className='step'>
               <MdOutlineStart className='icon'/>
                <h5 className='text'>Get Result</h5>
                <p>
                Tincidunt nisi orci sodales non. Netus integer
                 nunc mi nibh cursus vitae ut nulla lobortis.
                  Risus duis bibendum.
                </p>
            </div>
        </div>
        </div>
    
    </div>
  )
}

export default About
