import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Todo_working from './Todo_working';
import './log-sign.css'
function LogSignup() {
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  return (
    <div class="body">
      <BrowserRouter>
        <nav>
         
              <button
                className={`link-button ${buttonClicked ? '' : ''}`}
                onClick={handleButtonClick}
              >
                <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                  Sign in
                </Link>
              </button>
          
           
              <button
                className={`link-button ${buttonClicked ? '' : ''}`}
                onClick={handleButtonClick}
              >
                <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
                  Sign up
                </Link>
              </button>
            
              <button
                className={`link-button ${buttonClicked ? '' : ''}`}
                onClick={handleButtonClick}
              >
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  Home
                </Link>
              </button>

             
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/to-do-app" element={<Todo_working />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default LogSignup;
