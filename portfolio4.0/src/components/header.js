import './header.css'
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import resume from '../static/Peter.Hellwege.Resume.pdf';

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
                        <li><a href='https://github.com/phellwege' target='_blank'>github</a></li>
                        <li><a href='https://www.linkedin.com/in/peter-hellwege/' target='_blank'>linkedin</a></li>
                        <Navbar/>
                    </ul>
                    {/* get icons from iconsdb.com */}
                </div>
            </div>
        </>
    )
}
