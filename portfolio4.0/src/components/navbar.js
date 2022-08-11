import './navbar.css';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import React, { useEffect, useState } from 'react';

export default (props) => {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <div id='Hamburger_Menu'>
                <nav className="navBar">
                    <button onClick={handleToggle}>{navbarOpen ? (
                        <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                        ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                        )}
                    </button>
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li><Link to="#Section1" onClick={() => closeMenu()}>Home</Link></li>
                            <li><Link to="#Section2" onClick={() => closeMenu()}>Section2</Link></li>
                            <li><Link to="#Section3" onClick={() => closeMenu()}>Section3</Link></li>
                            <li><Link to="#Section4" onClick={() => closeMenu()}>Section4</Link></li>
                        </ul>
                </nav>
        </div>
    )
}
