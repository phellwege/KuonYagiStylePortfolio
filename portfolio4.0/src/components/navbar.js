import './navbar.css';
import {Link} from 'react-router-dom';
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import resume from '../static/Peter.Hellwege.Resume.pdf';
import React, { useEffect, useState, useRef } from 'react';

export default (props) => {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }

    let menuRef = useRef();
    useEffect(() => {
        let handler = (event) => {
            if(!menuRef.current.contains(event.target)){
                setNavbarOpen(false);
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })
    return (
        <div id='Hamburger_Menu'>
                <nav ref={menuRef} className="navBar">
                    <button onClick={handleToggle}>{navbarOpen ? (
                        <MdClose style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                        ) : (
                        <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
                        )}
                    </button>
                        <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                            <li><Link to="/" onClick={() => closeMenu()}>Home</Link></li>
                            <li><Link to="/Projects" onClick={() => closeMenu()}>Projects</Link></li>
                            <li><Link to="/AboutMe" onClick={() => closeMenu()}>About Me</Link></li>
                            <li><a href={resume} download="../static/Peter.Hellwege.Resume.pdf">Download CV</a></li>
                        </ul>
                </nav>
        </div>
    )
}
