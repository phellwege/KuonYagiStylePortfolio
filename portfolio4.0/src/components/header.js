import './header.css'
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import resume from '../static/Peter.Hellwege.Resume.pdf';
import Github from '../static/github-10-32.png';
import Linkedin from '../static/linkedin-3-32.png';
export default () => {

    return (
        <>
            <div className='headWrap'>
                <div className='headLeft'>
                <a href={resume} download="../static/Peter.Hellwege.Resume.pdf">Peter Hellwege</a>
                </div>
                <div className='headRight'>
                        <Link to="/">Home Icon</Link>
                        <a href='https://github.com/phellwege' target='_blank'><img src={Github} className='github' alt='GitHub Icon'/></a>
                        <a href='https://www.linkedin.com/in/peter-hellwege/' target='_blank'><img src={Linkedin} className='linkedin' alt='LinkedIn Icon'/></a>
                    <div id='navbarOnHead'>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    )
}
