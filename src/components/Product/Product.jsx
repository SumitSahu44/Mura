import React from 'react'
import './Product.css'

// product mode 
const Product = () => {
  return (
    <div>
        <h2 className='title'>Our Products</h2>

        <div className='box-container'>
            <div>
                <div className="box">
                    <img src="./images/skeloton.png" alt="" />
                    <p>Check Xray</p>
                </div>
            </div>
            <div>
                <div className="box">
                    <img src="./images/skeloton.png" alt="" />
                    <p>Check Xray</p>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default Product
