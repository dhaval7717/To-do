import React, { useState } from 'react';
import './login.css'; // Import your CSS file

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    const token = 'Bearer'; // Replace with your actual token

    // Create a new user by making a POST request to the API with the token
    fetch('https://dummyjson.com/auth/RESOURCE', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Handle the response from the API as needed
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
      <h1>Sign Up</h1>
      <form>
      <div className="input-container">
        <label htmlFor="username"> Username:
        <input
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
         />
        </label>
         
        </div>
        
        <div className="input-container">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
          </div> 
       
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
      </div>
     
    </div>
  );
}

export default Signup;
