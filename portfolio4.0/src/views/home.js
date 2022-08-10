import React, { useEffect, useRef } from "react";
import './home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles.css";
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';

export default () => {
    const SEL = "custom-section";
    const SECTION_SEL = `.${SEL}`;
    const originalColors = [
        "#ff5f45",
        "#0798ec",
        "#fc6c7c",
        "#435b71",
        "orange",
        "blue",
        "purple",
        "yellow"
    ];

    
    return (
        
        <div className='homeWrapper'>
            <Header/>
                {/* <Parallax pages={2.5} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={0.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Section1/>
                    </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} />
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
                </Parallax> */}


        </div>
    )
}

