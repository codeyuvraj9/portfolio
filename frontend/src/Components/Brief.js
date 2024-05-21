import React from 'react'
import webimg from '../screens/webdev.avif'
import "./Brief.css";

export default function Brief() {

  return (
    <div className='text-black' style={{ padding: "5vh 8vw" }}>
      <div>
      <h1 style={{ fontWeight: "800" }}>Hi There!</h1>
      <h1>I am a Developer</h1>
      <h1>I make the complex simple.</h1>

      <img src={webimg} alt="web doodle" className="web-img" />

      <div className='d-flex justify-content-start'>
        <div className='px-2 mt-1'>
          <a href="mailto:rajputyuvrajsingh9@gmail.com" style={{ color: "inherit" }}>
            <i className="fa-solid fa-envelope fa-2x"></i>
          </a>
          <p className="d-none d-md-block">rajputyuvrajsingh9@gmail.com</p>
        </div>
        <div class="px-2 mt-1">
          <a href="tel:+917828439072" style={{ color: "inherit" }}>
            <i class="fa-solid fa-phone fa-2x"></i>
          </a>
          <p className="d-none d-md-block">+91 7828439072</p>
        </div>
        <div className='px-3 mt-1'>
          <i class="fa-solid fa-graduation-cap fa-2x"></i>
          <p className="d-md-block">NIT Bhopal</p>
        </div>
      </div>
      </div>
    </div>
  )
}
