import React, { useRef } from 'react';
import './section.css';
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Lazy} from "swiper";

import Ecommerce from '../static/CaptureHomeEcommercePrd.PNG';
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG';
import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import PartyTime from '../static/giphyHomePage.gif';
import Countdown from '../static/CaptureCountDown.PNG';
import SWHomecoming from '../static/giphySWHomePage.gif';
import TipCalc from '../static/giphyTipCalc.gif';


export default () => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>Projects</h1>
                <Link to='/Projects'><button className='moreBtn'>View Projects</button></Link>
            </div>
            <div className='sectionRight' id='ProjectsSectionRight'>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination, Lazy]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Ecommerce} alt='E-commerce Product Page'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RockPaperScissors} alt='Rock-Paper-Scissors'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SpaceTourism} alt='Space Tourism'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PartyTime} alt='Party Time'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Countdown} alt='Countdown'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SWHomecoming} alt='Star Wars Homecoming'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TipCalc} alt='Tip Calculator'/>
                </SwiperSlide>
                
                ...
            </Swiper>
                    <h1 className='ProjectPgNum'>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
