import React, { useEffect, useRef } from "react";
import './home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
// import ReactFullpage from "@fullpage/react-fullpage";
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';

export default () => {
    const scrollToSection = (props) => {
        // not sure how to write the routing yet
    }
    return (
        <div className='homeWrapper'>
            <Header/>
                {/* <Section1 id='section1'/> */}
                {/* default active selection section1. */}
                {/* <Section2 id='section2'/>
                <Section3 id='section3'/>
                <Section4 id='section4'/> */}

                <Parallax pages={2.5} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Section1/>
                    </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{ backroundColor: '#ff6d6d'}}/>
                    <ParallaxLayer
                        offset={.75}
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
                        offset={1}
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
                        offset={1.75}
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

