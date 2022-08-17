import React, { useRef } from 'react';
import './section.css';
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import Loading from './loading';

import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import Ecommerce from '../static/CaptureHomeEcommercePrd.PNG'
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG'
import SpaceTourism from '../static/CaptureSpaceTourism.PNG'
import PartyTime from '../static/giphyHomePage.gif'
import Countdown from '../static/CaptureCountDown.PNG'
import SWHomecoming from '../static/giphySWHomePage.gif'
import TipCalc from '../static/giphyTipCalc.gif'
export default () => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>Projects</h1>
                <Link to='/Projects'><button className='moreBtn'>View Projects</button></Link>
            </div>
            <div className='sectionRight'>
                    <StyleRoot>
                        <Coverflow id='coverflow'
                            displayQuantityOfSide={2}
                            navigation
                            infiniteScroll
                            enableHeading
                            loading='lazy'
                            media={{
                                '@media (max-width: 900px)': {
                                width: '600px',
                                height: '300px'
                                },
                                '@media (min-width: 900px)': {
                                width: '600px',
                                height: '300px'
                                }
                            }}
                            >
                            <img src={Ecommerce} alt='E-commerce Product Page' data-action="https://phellwege.github.io/ecommerce-product-page-component/"/>
                            <img src={RockPaperScissors} alt='Rock-Paper-Scissors' data-action="https://phellwege.github.io/RockPaperScissors/"/>
                            <img src={SpaceTourism} alt='Space Tourism' data-action="https://phellwege.github.io/SpaceTourism/"/>
                            <img src={PartyTime} alt='PartyTime' data-action="https://phellwege.github.io/ThePartyTime/"/>
                            <img src={Countdown} alt='Countdown' data-action="https://phellwege.github.io/countdown/"/>
                            <img src={SWHomecoming} alt='Star Wars Homecoming' data-action="http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/"/>
                            <img src={TipCalc} alt='Tip Calculator' data-action="https://phellwege.github.io/Tip_Calculator/"/>
                        </Coverflow>
                    </StyleRoot>
                    <h1 className='pgNum'>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
