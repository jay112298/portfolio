import React from 'react'
import { Navbar, Nav } from './PhoneNav.st'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'

const PhoneNav = () => {
  return (
    <>
    <Navbar>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="collapsable">
            <GiHamburgerMenu size={30}/>
        </div>
    </Navbar>
    <Nav>
        <ul className='nav'>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about-me">About Me</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact-me">Contact Me</Link></li>
        </ul>
    </Nav>
    </>
  )
}

export default PhoneNav