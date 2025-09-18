import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <button 
                    className="navbar-toggle" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                
                <ul className={`navbarlinks ${isOpen ? "active" : ""}`}>
                    <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                    <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
                    <li><Link to="/policy" onClick={() => setIsOpen(false)}>Policy</Link></li>
                    <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>

            </div>
            
            <div className="navbar-center">
                <Link to="/home">PhotographyofAnh</Link>
            </div>
            
            <div className="navbar-auth">
                <Link to="/login" className="loginbtn" onClick={() => setIsOpen(false)}>Login</Link>
                <Link to="/signup" className="signupbtn" onClick={() => setIsOpen(false)}>Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;