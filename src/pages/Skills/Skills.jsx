import React from 'react'
import { Box } from './Skills.st'
import Navbar from '../../components/Navbar/Navbar'
import Html5 from '../../assets/html5-icon.svg'
import Css3 from '../../assets/css-icon.svg'
import ReactIc from '../../assets/reactjs-icon.svg'
import StyledComp from '../../assets/styled-components.svg'
import NodeJs from '../../assets/nodejs-icon.svg'
import Git from '../../assets/git-icon.svg'
import Figma from '../../assets/figma-icon.svg'
import MongoDB from '../../assets/mongodb-icon.svg'

const About = () => {
  return (
    <>
    {/* bg prop for background. Values recieved in rgba() format. Position prop for position */}
    <Navbar bg="rgba(0, 0, 0, 1)" position="static"/>
    <Box>
      <div className="header">Skills</div>
      <div className="skills">
        <div className="using">
          <div className='using-header'>Using Now:</div>
          <div><img src={Html5} /><br></br>Html5</div>
          <div><img src={Css3} /><br></br>Css3</div>
          {/* <div><img src={Javascript} /><br></br>Css3</div> */}
          <div><img src={ReactIc} /><br></br>React</div>
          <div><img src={StyledComp} /><br></br>Styled Components</div>
          <div><img src={NodeJs} /><br></br>NodeJs</div>
          <div><img src={Git} /><br></br>Git</div>
          <div><img src={Figma} /><br></br>Figma</div>
          <div><img src={MongoDB} /><br></br>MongoDB</div>
        </div>
      </div>
    </Box>
    </>
  )
}

export default About