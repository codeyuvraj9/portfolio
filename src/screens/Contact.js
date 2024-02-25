import React from 'react'
import bg from './darkbg.jpg'

export default function Contact() {
    const containerStyle  = {
        backgroundImage:`url(${bg})`,
        backgroundSize: "cover",
        textAlign:"center", 
        paddingTop:"15vh",
        color: "white",
        height: "100vh"
    }

  return (
    <div style={containerStyle}>
        <h2>Get in Touch...</h2>
        <h5>Phone Number : <a href="tel:+917828439072">Call Me</a></h5>
        <h5>Email : <a href="mailto:rajputyuvrajsingh9@gmail.com">Send Email</a></h5>
        <h5>Linked In : <a href="https://www.linkedin.com/in/yuvrajsinghrajput/" target='_blank' rel='noopener noreferrer'>Profile Link</a></h5>
        <h5>Github profile : <a href = "https://github.com/codeyuvraj9" target='_blank' rel='noopener noreferrer'>GitHub</a></h5>
        
    </div>
  )
}
