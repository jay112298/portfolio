import React from "react";
import { Hero, HeroPhone } from "./Home.st.js";
import Navbar from "../../components/Navbar/Navbar";
import { SiGmail } from 'react-icons/si'
import { BsGithub, BsLinkedin, BsGearFill } from 'react-icons/bs';
import jay from '../../assets/jay_transparent.png'
import divider from '../../assets/hero-divider.png'
import PhoneNav from "../../components/PhoneNav/PhoneNav.jsx";

const Home = () => {
  const openMail = function () {
      window.open( 
        "mailto:jasole1111@gmail.com", "_blank");
  }
  const openGithub = function () {
      window.open( 
        "https://github.com/jay112298", "_blank");
  }
  const openLinkedIn = function () {
      window.open( 
        "https://www.linkedin.com/in/jitendra-asole-2906a018b/", "_blank");
  }
  return (
    <>
      <Navbar bg="rgba(0 , 0, 0, 0)" position="fixed"/>
      <PhoneNav/>
      <Hero>
        <div className="left">
          <div className="hi">Hi, I am</div>
          <div className="name">Jitendra Asole</div>
          <div className="dev">Full Stack Developer/Mechanical Engineer<BsGearFill/></div>
          <div className="icons">
            <div onClick={openMail}><SiGmail /></div>
            <div onClick={openGithub}><BsGithub /></div>
            <div onClick={openLinkedIn}><BsLinkedin /></div>
          </div>
        </div>
        <div className="right">
          <img src={jay} />
        </div>
      </Hero>
      <HeroPhone>
          <div className="name">my name is Jitendra</div>
          <div className="intro">I'm a developer</div>
          <div className="divider"><img src={divider} alt="" /></div>
          <div className="links">
            <div className="icon"><SiGmail size={29}/></div>
            <div className="icon"><BsGithub size={29}/></div>
            <div className="icon"><BsLinkedin size={29}/></div>
          </div>
      </HeroPhone>
    </>
  );
};

//Coaoa
export default Home;
