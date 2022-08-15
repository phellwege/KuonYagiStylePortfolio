import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import Loading from './loading';
import Github from '../static/github.png';
import Linkedin from '../static/linkedin.png';

export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='section4Left'>
                <h1>Get In Touch</h1>
                <h3><a href='mailto:phellwege1@gmail.com'>phellwege1@gmail.com</a></h3>
                <div className='socialLinks'>
                    <a href='https://github.com/phellwege' target='_blank'>
                        <img src={Github} className='SectionIcon' alt='GitHub Icon'/>
                        <br/>
                        GitHub
                    </a>
                    <a href='https://www.linkedin.com/in/peter-hellwege/' target='_blank'>
                        <img src={Linkedin} className='SectionIcon' alt='LinkedIn Icon'/>
                        <br/>
                        LinkedIn
                    </a>
                </div>
            </div>
            <div className='section4Right'>
                <div className='LoadingSection'>
                    <Loading/>
                </div>
                <div className='imgSection'>
                    <h1>img</h1>
                </div>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
