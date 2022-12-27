import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {Warning, Box} from './Contact.st'

const Contact = () => {

  const[warning, setWarning] = React.useState(true)

  const disableWarn = () => {
    setWarning(false);
  }

  return (
    <>
    <Navbar bg="rgba(0, 0, 0, 1)" position="static"/>
    {warning &&<Warning><p>The contact form does not work yet. If you still want to contact me. Please write a mail to jasole1111@gmail.com</p>
      <div onClick={disableWarn}>X</div>
    </Warning>}
    <Box>
      <div className="header">About Me</div>
      <div className="intro">I am a full stack developer who is learning latest technologies and working on web projects from last 4 years.</div>
      <div className="divider">Divider</div>

      <form className="form">
        <input type="text" placeholder='ENTER YOUR NAME*'/>
        <input type="email" placeholder='ENTER YOUR EMAIL*'/>
        <input type="tel" name="phone" placeholder='PHONE NUMBER' />
        <input type="text" placeholder='YOUR MESSAGE*'/>
        <button className="submit">Submit</button>
      </form>
    </Box>
    </>
  )
}

export default Contact