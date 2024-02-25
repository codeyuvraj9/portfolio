import React from 'react' 
import uv from './uv.png';

export default function Brief() {
    const containerStyle = {
        backgroundImage: `url(${uv})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", 
        width: "100vw", 
        position: "relative",
        padding: "5vw"
    };
    const redirectToAnotherPage = () => {
      window.location.href = '/contact'; 
    };
  return (
    <div>
        <div style={containerStyle}>
        <h1 style={{color:"white"}}>Hi There!</h1>
        <h1 style={{color:"white"}}>I am a Developer</h1>
        <h1 style={{color:"white"}}>I make the complex simple.</h1>
        <button type='button' style={{margin: "35vh 0 7vh 0", color:"black"}} className="btn btn-success" onClick={redirectToAnotherPage}>Contact me</button>

        <div style={{display:"flex"}}>
        <div style={{color:"white", padding:"0 2vw 0 0", margin:"1vw", borderRight:"solid"}}>
          <h4>Email</h4>
          <p>rajputyuvrajsingh9@gmail.com</p>
        </div>
        <div style={{color:"white", padding:"0 2vw 0 0", margin:"1vw", borderRight:"solid"}}>
          <h4>Phone</h4>
          <p>+91 7828439072</p>
        </div>
        <div style={{color:"white", margin:"1vw"}}>
          <h4>College</h4>
          <p>NIT Bhopal</p>
        </div>
        </div>
        </div>
    </div>
  )
}
