import React, { useEffect, useState } from 'react';
import './LightBox.css';
import close from '../static/icon-close.svg';
import {Link} from 'react-router-dom';
import resume from '../static/Peter.Hellwege.Resume.pdf';
import walker from '../static/Sentinel_Walk.gif'
export default (props) => {
        
    const lightBoxShow = () => {
        const x = document.getElementsByClassName('lightBoxWrap')[0];
        const y = document.getElementsByClassName('cartBoxWrap')[0];
        if(x.style.display == 'block') {
            x.style.display = 'none';
            y.style.display = 'none';
        }
        else {
            x.style.display = 'block';
            y.style.display = 'none';
        }
}
const {active}=props;

    return (
        <div className="lightBoxWrap">
            <div className="lightBoxBox">
                <img src={close} id='closeIcon' onClick={lightBoxShow} alt='close icon'/>
                <div className="lightBoxContainer">
                    <h1>You Found Me!</h1>
                    <p>A hidden Portfolio
                        <br/>
                        Page
                    </p>
                    <div className='lightBoxText'>
                        <h4 id='lightboxReturn' onClick={lightBoxShow}>Return</h4>
                        <Link to='/Projects'>Projects</Link>
                        <Link to='/AboutMe'>About Me</Link>
                        <a href={resume} download="../static/Peter.Hellwege.Resume.pdf">Download CV</a>
                    </div>
                </div>
                <img src={walker} id='lightboxWalker' alt='warhammer walker'/>
            </div>
        </div>
    )
}