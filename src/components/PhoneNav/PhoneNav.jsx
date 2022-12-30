import React from 'react'
import { Navbar } from './PhoneNav.st'
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../../assets/logo.svg'

const PhoneNav = () => {
  return (
    <Navbar>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <GiHamburgerMenu/>
    </Navbar>
  )
}

export default PhoneNav