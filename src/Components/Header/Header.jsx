import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../NavBar/Nav'
import SearchBar from '../SeachBar/SearchBar'
import './Header.scss'
const Header = () => {
  return (
    // <div className='header'>
    //   <div className='logo'>
    //     <h2>My Food</h2>
    //   </div>
    //   <ul className="nav ">
    //     <li className="nav-item">
    //       <a class="nav-link" href="#">Home</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Recipes</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Tips</a>
    //     </li>
    //     <li class="nav-item">
    //       <a class="nav-link" href="#">Contact</a>
    //     </li>
    //   </ul>

    //   <div className='search-bar'>
    //     <a href="#">
    //       <i class="bi bi-search" style={{ color: 'white' }}></i>
    //     </a>
    //   </div>
    // </div>
    <div className='header'>
    <Logo/>
    <Nav/>
    <SearchBar/>

</div>

  )
}
export default Header