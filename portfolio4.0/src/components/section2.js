import React, { useRef } from 'react';
import './section.css';
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Ecommerce}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RockPaperScissors}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SpaceTourism}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={PartyTime}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Countdown}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={SWHomecoming}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={TipCalc}/>
                </SwiperSlide>
                
                ...
            </Swiper>
                    <h1 className='ProjectPgNum'>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
