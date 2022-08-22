import './aboutMe.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/bundle";
import JavaScript from '../static/JavaScript.png';
import { Pagination, Lazy} from "swiper";
import Java from '../static/java.png';
import Python from '../static/python.png';
import jQuery from '../static/jQuery.png';
import Ajax from '../static/ajax.png';
import Bootstrap from '../static/bootstrap.png';
import Node from '../static/nodejs.png';
import Express from '../static/expressjs.png';
import MySQL from '../static/mysql.png';
import Django from '../static/django.png';
import MongoDB from '../static/mongodb.png';
import Html from '../static/HTML.png';
import Css from '../static/CSS.png';

import DataBricks from '../static/ajax.png';
import DataFactory from '../static/ajax.png';


export default (props) => {

    return (
        <>
            <div className='sectionWrap'>
                <div className='mainSection'>
                    
                    <div className='trifold'>
                        <div>
                            <h3>Design</h3>
                            <p>lorem ipsum dolor sit am</p>
                        </div>
                        <div>
                            <h3>Technology</h3>
                            <p>I'm a Full-Stack Developer, and Data Engineer. Comfortable with multiple languages and full software lifecycles. </p>
                        </div>
                        <div>
                            <h3>Story</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                    <br/>
                    <h2>Experience</h2>
                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination, Lazy]}
                        className="aboutMeSwiper"
                    >
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={JavaScript} alt='JavaScript'/>
                                <h4>JavaScript</h4>
                                <p>2.5 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Java} alt='Java'/>
                                <h4>Java</h4>
                                <p>1 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Python} alt='Python'/>
                                <h4>Python</h4>
                                <p>2.5 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={jQuery} alt='jQuery'/>
                                <h4>jQuery</h4>
                                <p>1.5 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Ajax} alt='Ajax'/>
                                <h4>Ajax</h4>
                                <p>2 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Bootstrap} alt='Bootstrap'/>
                                <h4>Bootstrap</h4>
                                <p>1.5 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Node} alt='Node'/>
                                <h4>Node</h4>
                                <p>1.5 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Express} alt='Express'/>
                                <h4>Express</h4>
                                <p>1.5 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={MySQL} alt='MySQL'/>
                                <h4>MySQL</h4>
                                <p>2 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Django} alt='Django'/>
                                <h4>Django</h4>
                                <p>1 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={MongoDB} alt='MongoDB'/>
                                <h4>MongoDB</h4>
                                <p>2 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Html} alt='Html'/>
                                <h4>HTML</h4>
                                <p>4 yrs</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='skills'>
                                <img src={Css} alt='CSS'/>
                                <h4>CSS</h4>
                                <p>4 yrs</p>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </>
    )
}
