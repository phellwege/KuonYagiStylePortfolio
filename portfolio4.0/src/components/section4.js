import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import Github from '../static/github-10-32.png';
import Linkedin from '../static/linkedin-3-32.png';

export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>Get In Touch</h1>
                <div
                    style={{
                    background: '#5BC0BE',
                    height: '3px',
                    width: '18%',
                    marginLeft: '35%'
                    }}
                />
                <br/>
                <div
                    style={{
                    background: '#5BC0BE',
                    height: '3px',
                    width: '15%',
                    marginLeft: '25%'
                    }}
                />
                <br/>
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
                    <h1>img</h1>
                    <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
