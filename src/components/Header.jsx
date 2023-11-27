import { useState } from 'react';
import logo from '../assets/logo.png'
import { FaBars } from 'react-icons/fa';


const Header = () => {
  const [navbar, setNavbar] = useState(false)

  const toggleNavbar = () => {
    setNavbar(!navbar); // Toggle the navbar state (open/close)
  };

  return (
    <header>
      <img src={logo} className='logo' alt="logo" />

      <FaBars
        className='bars-icon'
        onClick={toggleNavbar}
      />

      <ul className={`header-menu ${navbar ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#programs">Programs</a></li>
        <li><a href="#whyUs">Why Us</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </header>
  )
}

export default Header
