import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Step from './pages/Step/Step'
import Predicte from './pages/Predicte/Predicte';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/step' element={<Step/>} />
         <Route path='/predict' element={<Predicte/>} />
      </Routes>
    </div>






  )
}

export default App
