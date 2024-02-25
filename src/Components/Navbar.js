import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
export default function Navbar() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ padding: "0 4vw", width: "100vw" }}>
            <div className="container-fluid">
                <Link className="navbar-brand fs-1" to="/">Portfolio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="/resume">Resume</Link>
                        <Link className="nav-link" to="/reviews">Reviews</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        <div class="form-check form-switch" style={{paddingTop:"1vh"}}>
                            <label class="form-check-label text-white" for="flexSwitchCheckDefault">Mode</label>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
