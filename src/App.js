import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './FadeAnimation.css'; // Import the CSS file
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Step from './pages/Step/Step'
import Predicte from './pages/Predicte/Predicte';



const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/step" element={<Step />} /> // routes
          <Route path="/predict" element={<Predicte />} />  // routes
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />   // set routes
         <Route path='/step' element={<Step/>} />
         <Route path='/predict' element={<Predicte/>} /> // set routes
      </Routes>
    </div>

 






  )
}

export default App
