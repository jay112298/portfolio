import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './Navbar.st'

const Navbar = (props) => {
  return (
    <Nav bg={props.bg} position={props.position}>
      <div className="logo">JA</div>
        <ul className='nav'>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact-me">Contact Me</Link></li>
        </ul>
    </Nav>
  )
}

export default Navbar