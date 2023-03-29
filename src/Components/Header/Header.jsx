import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../NavBar/Nav'
import SearchBar from '../SearchBar/SearchBar'
import './Header.scss'
const Header = () => {
  return (
    <div className='header'>
      <Logo />
      <Nav />
      <SearchBar />
    </div>
  )
}
export default Header