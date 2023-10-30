import React, { useState } from 'react'
import "./App.css"
import LogSignup from './Log-sign';

function Mainapp() {
 
  return (
    <>
    <div class="welcome">
      <h2 class="heading"> Welcome to my To-do app</h2> 
    </div>
    <LogSignup/>
    <img
  src="https://blog.appsumo.com/wp-content/uploads/2021/08/AS-blog-best-to-do-list-app-1536x614px-1-1.png"
  alt="Image"
  width="100%" // Set the desired width, for example, 300 pixels
  height="100%" // Set the desired height, for example, 200 pixels
/>

    </>
    

  );
}

export default Mainapp