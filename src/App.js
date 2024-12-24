import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Predicte from './pages/Predicte/Predicte';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/predict' element={<Predicte/>} />
      </Routes>
    </div>






  )
}

export default App
