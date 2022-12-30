import React from 'react'
import { Navbar, Nav } from './PhoneNav.st'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import { useState } from 'react';

const PhoneNav = () => {
    const[show, setShow] = useState(false)
    function toggleShow() {
        if (show == true) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    
  return (
    <>
    <Navbar>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="collapsable">
            <GiHamburgerMenu size={30} onClick={toggleShow}/>
        </div>
    </Navbar>
    <Nav style={{transform:show?"translateY(00px)":"translateY(-500px)"}}>
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