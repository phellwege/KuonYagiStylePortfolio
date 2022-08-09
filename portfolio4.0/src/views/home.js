import React, { useEffect, useRef } from "react";
import './home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import {Link} from 'react-router-dom';
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';

export default () => {
    const ref = useRef()
    
        
    return (
        
        <div className='homeWrapper'>
            <Header/>
            {/* <div id="fp-nav" class="left">
                <ul><Parallax ref={ref}>
                    <li>
                        
                        <Link to={ref.current.scrollTo(0)} class="">
                            <span></span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ref.current.scrollTo(1)} class="active">
                            <span></span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ref.current.scrollTo(2)} class="">
                            <span></span>
                        </Link>
                    </li>
                    <li>
                        <Link to={ref.current.scrollTo(3)} class="">
                            <span></span>
                        </Link>
                    </li>
                    </Parallax>
                </ul>
            </div> */}
                <Parallax pages={4} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Section1/>
                    </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} />
                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Section2/>
                    </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1} />
                    <ParallaxLayer
                        offset={2}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Section3/>
                    </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1} />
                    <ParallaxLayer
                        offset={3}
                        speed={0.5}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        }}>
                        <Section4/>
                    </ParallaxLayer>
                </Parallax>
        </div>
    )
}

