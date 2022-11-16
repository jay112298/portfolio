import React from "react";
import { Hero } from "./Home.st.js";
import Navbar from "../../components/Navbar/Navbar";
import { SiGmail } from 'react-icons/si'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import jay from '../../assets/jay_transparent.png'

const Home = () => {
  return (
    <>
      <Navbar bg="rgba(0 , 0, 0, 0)" position="fixed"/>
      <Hero>
        <div className="left">
          <div className="hi">Hi, I am</div>
          <div className="name">Jitendra Asole</div>
          <div className="dev">Full Stack Developer/Mechanical Engineer</div>
          <div className="icons">
            <div><SiGmail /></div>
            <div><BsGithub /></div>
            <div><BsLinkedin /></div>
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
