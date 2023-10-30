import React, { useState } from 'react';
import './login.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Todo_working from './Todo_working';
import LoginFailPopup from './LoginFailPopup';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginResponse, setLoginResponse] = useState(null);

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setButtonClicked(true);
  };

  const handleLogin = async () => {
    const loginData = {
      username,
      password,
    };

   try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });
      if (response.ok) {
        const tokenData = await response.json();
        setLoginResponse('success');
      } else {
        setLoginResponse('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setLoginResponse('error');
    }}

    const handleapp = () => {
      // Implement your logout logic here (e.g., clear user tokens or credentials)
      setLoginResponse(
        <Routes>
           <Route path="/to-do-app" element={<Todo_working />} />
        </Routes>

      ); // Reset the login response state
    };

    const logfail = () => {
      // Implement your logout logic here (e.g., clear user tokens or credentials)
      setLoginResponse(
        <Routes>
           <Route path="/error" element={<LoginFailPopup />} />
        </Routes>

      ); // Reset the login response state
    };
  

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>

      {loginResponse === 'success' && (
        <div className="success-message">
          <button
                className={`link-button ${buttonClicked ? '' : ''}`}
                onClick={handleButtonClick}
              >
                <Link to="/to-do-app" style={{ color: 'white', textDecoration: 'none' }}>
                 Go to your Application
                </Link>
              </button>
          <p>Congrats, you are logged in successfully!</p>
        </div>
      )}

      {loginResponse === 'error' && (
        <>
        
         <p className="error-message">Sorry, please try again.</p>
        </>
       
      )}
    </div>
  );
}

export default Login;
