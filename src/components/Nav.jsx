import React from 'react';
import "./Nav.css"
const Nav = () => {
  return (
    <nav className='container'>
      <div>
        <img src="./images/brand_logo.png" alt="pic" />
      </div>
     
      <ul>
         <li href="#" >Menu</li>
         <li href="#" >Location</li>
         <li href="#" >About</li>
         <li href="#" >Contact</li>
      </ul>

      <button>Log In</button>
    </nav>
  )
}

export default Nav;
