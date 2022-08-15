import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import Loading from './loading';

export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='section4Left'>
                <h1>Get In Touch</h1>
                <h3><a href='mailto:phellwege1@gmail.com'>phellwege1@gmail.com</a></h3>
                <div className='socialLinks'>
                    <a href='https://github.com/phellwege' target='_blank'>github</a>
                    <a href='https://www.linkedin.com/in/peter-hellwege/' target='_blank'>linkedin</a>
                </div>
            </div>
            <div className='section4Right'>
                <div className='LoadingSection'>
                    <Loading/>
                </div>
                <h1>img</h1>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
