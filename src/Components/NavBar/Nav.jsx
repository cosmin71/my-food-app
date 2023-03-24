import React from 'react';
import './Nav.scss';
const Nav=()=>{
  return(
    <nav className='navbar'>
      <ul className="nav">
  <li className="nav-item">
    <a class="nav-link" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Recipes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Tips</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contact</a>
  </li>
  </ul>
    </nav>
  )
}
export default Nav