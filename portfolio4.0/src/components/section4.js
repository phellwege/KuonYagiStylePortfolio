import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import Loading from './loading';
import Github from '../static/github.png';
import Linkedin from '../static/linkedin.png';

export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>Get In Touch</h1>
                <h3>
                    <a href='mailto:phellwege1@gmail.com' id='emailMe'>phellwege1@gmail.com</a>
                </h3>
                <div className='socialLinks'>
                    <div className='SectionIconLink'>
                        <a href='https://github.com/phellwege' target='_blank'>
                            <img src={Github} id='githubSocial' alt='GitHub Icon'/>
                            <br/>
                            GitHub
                        </a>
                    </div>
                    <div className='SectionIconLink'>
                        <a href='https://www.linkedin.com/in/peter-hellwege/' target='_blank'>
                            <img src={Linkedin} id='linkedinSocial' alt='LinkedIn Icon'/>
                            <br/>
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className='sectionRight'>
                    {/* <Loading/> */}
                    <h1>img</h1>
                    <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
