import React from "react";
import { Hero } from "./Home.st.js";
import Navbar from "../../components/Navbar/Navbar";
import { SiGmail } from 'react-icons/si'
import { BsGithub, BsLinkedin, BsGearFill } from 'react-icons/bs';
import jay from '../../assets/jay_transparent.png'

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
    </>
  );
};

export default Home;
