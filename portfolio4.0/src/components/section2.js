import React from 'react';
import './section.css';
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import { Pagination, Lazy} from "swiper";
import projects from '../data/projects';

export default () => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1 id='noClicky'>Projects</h1>
                <br/>
                <div className='lineBreak'
                    style={{
                    background: '#5BC0BE',
                    height: '4px',
                    width: '18%',
                    marginLeft: '35%',
                    borderRadius: '.25em'
                    }}
                />
                <br/>
                <div className='lineBreak'
                    style={{
                    background: '#5BC0BE',
                    height: '4px',
                    width: '15%',
                    marginLeft: '25%',
                    borderRadius: '.25em'
                    }}
                />
                <br/>
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
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <img src={project.image} alt={project.alt}/>
                    </SwiperSlide>
                ))}
                ...
            </Swiper>
                    <h1 className='numbers' id='ProjectPgNum'>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
