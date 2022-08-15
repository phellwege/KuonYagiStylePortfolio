import React, { useRef } from 'react';
import './section.css';
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import Loading from './loading';

export default () => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>Projects</h1>
                <Link to='/Projects'><button className='moreBtn'>View Projects</button></Link>
            </div>
            <div className='sectionRight'>
                    <Loading/>
                    <h1>img</h1>
                    <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
