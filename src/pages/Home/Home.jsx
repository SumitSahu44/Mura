import React from 'react'
import './Home.css'

import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import Product from '../../components/Product/Product'
const Home = () => {
  return (
    <div>
      <Header/>
      <About/>
      {/* <Product/> */}
    </div>
  )
}

export default Home
