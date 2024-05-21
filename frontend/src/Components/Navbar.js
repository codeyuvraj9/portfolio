import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const handleClick = () => {
        // Open the Google Drive link in a new tab when the Resume link is clicked
        window.open("https://drive.google.com/file/d/1RGSQrrZwtdJRDMIYMMFTlODeOn_KA7y-/view", "_blank");
      };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark font-weight-bold" style={{ color:"#AFB3B7", backgroundColor:"#0D1F23",padding: "1vh 6vw" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ fontWeight: "800",fontSize:"3vw" }}>YSR.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{fontSize:"2vh"}}>
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" onClick={handleClick}>Resume</Link>
                        <Link className="nav-link" to="/reviews">Reviews</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
