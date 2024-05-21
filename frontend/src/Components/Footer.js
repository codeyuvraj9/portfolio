import React from 'react'

export default function Footer() {
    return (
        <div className='text-center'>
            <h3 className='' style={{ padding: "15vh 0 20vh" }}>
                Living, learning, & leveling up <br></br> one day at a time.
            </h3>
            <div className='py-2'>
                <a href="https://www.linkedin.com/in/yuvrajsinghrajput/" target='_blank' rel="noreferrer" style={{ color: "inherit" }}>
                    <i className="fa-brands fa-linkedin fa-2x" style={{ padding: "0 1vw" }}></i>
                </a>
                <a href="mailto:rajputyuvrajsingh9@gmail.com" style={{ color: "inherit" }}>
                    <i className="fa-solid fa-envelope fa-2x" style={{ padding: "0 1vw" }}></i>
                </a>
                <a href="https://github.com/codeyuvraj9" target='_blank' rel="noreferrer" style={{ color: "inherit" }}>
                    <i className="fa-brands fa-github fa-2x" style={{ padding: "0 1vw" }}></i>
                </a>
                <a href="/" style={{ color: "inherit" }}>
                    <i className="fa-brands fa-connectdevelop fa-2x" style={{ padding: "0 1vw" }}></i>
                </a>

            </div>

            <p>Handcrafted by me ©2024</p>
        </div>
    )
}
