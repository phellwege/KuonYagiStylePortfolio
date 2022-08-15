import React, { useRef } from 'react';
import './section.css';
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import Loading from './loading';

export default () => {

    return (
        <div className='sectionWrap'>
            <div className='section2Left'>
                <h1>Projects</h1>
                <Link to='/Projects'><button className='moreBtn'>View Projects</button></Link>
            </div>
            <div className='section2Right'>
                <div className='LoadingSection'>
                    <Loading/>
                </div>
                <h1>img</h1>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
