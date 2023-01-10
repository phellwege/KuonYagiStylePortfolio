import React, { useEffect, useRef } from "react";
import './home.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Header from '../components/header';
import Section1 from '../components/section1';
import Section2 from '../components/section2';
import Section3 from '../components/section3';
import Section4 from '../components/section4';

export default () => {
        const SectionStyle ={
            height: '100vh',
            width: '100%',
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center'
        };

    return (
        <div className='homeWrapper'>
            <Header/>
                <Fullpage>
                    <FullpageNavigation/>
                    <FullPageSections>
                        <FullpageSection style={{SectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <Section1/>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle, background:'linear-gradient(#3A506B, #1C2541)'}}>
                            <Section2/>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <Section3/>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle, background:'linear-gradient(#3A506B, #1C2541)'}}>
                            <Section4/>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
        </div>
    )
}

