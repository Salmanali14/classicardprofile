import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme1 from './assets/Pages/Theme1';
import Theme2 from './assets/Pages/Theme2';
import Theme3 from './assets/Pages/Theme3';
import Theme4 from './assets/Pages/Theme4';
import Home from './assets/Pages/Home';

function App() {


  return (
    <>
      <Router>
        <div className='app'>
          <div className='screen'>
            <Routes>
              <Route path="/:userid" element={<Home />} />
           
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App
