import React from 'react'
import { MdDesignServices } from 'react-icons/md'
import { BsTools } from 'react-icons/bs'
import { GrVmMaintenance } from 'react-icons/gr'
import { Box } from './About.st'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <>
    <Navbar bg="rgba(0, 0, 0, 1)" position="static"/>
    <Box>
      <div className="header">About Me</div>
      <div className="intro">I am a full stack developer who is learning latest technologies and working on web projects from last 4 years.</div>
      <div className="explore">Explore</div>
      <div className="divider">Divider</div>
      <div className="services">
        <div className="top">
          <div className="design">
            <p className='service-header'><MdDesignServices size={64}/>Design</p>
            <p className='service-text'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
          <div className="development">
            <p className='service-header'><BsTools size={64} />Development</p>
            <p className='service-text'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
        </div>
        <div className="bottom">
          <div className="maintenance">
            <p className='service-header'><GrVmMaintenance size={64} />Maintenance</p>
            <p className='service-text'>I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.</p>
          </div>
        </div>
      </div>
    </Box>
    </>
  )
}

export default About