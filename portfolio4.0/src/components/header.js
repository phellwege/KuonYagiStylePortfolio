import './header.css'
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import resume from '../static/Peter.Hellwege.Resume.pdf';
import Github from '../static/github.png';
import Linkedin from '../static/linkedin.png';
export default () => {

    return (
        <>
            <div className='headWrap'>
                <div className='headLeft'>
                <a href={resume} download="../static/Peter.Hellwege.Resume.pdf">Peter Hellwege</a>
                </div>
                <div className='headRight'>
                    <ul>
                        <li><Link to="/">Home Icon</Link></li>
                        <a href='https://github.com/phellwege' target='_blank'><img src={Github} className='github' alt='GitHub Icon'/></a>
                        <a href='https://www.linkedin.com/in/peter-hellwege/' target='_blank'><img src={Linkedin} className='linkedin' alt='LinkedIn Icon'/></a>
                    </ul>
                    <div id='navbarOnHead'>
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    )
}
