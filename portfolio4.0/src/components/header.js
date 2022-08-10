import './header.css'
import {Link} from 'react-router-dom';
import Navbar from './navbar'


export default () => {

    return (
        <>
            <div className='headWrap'>
                <div className='headLeft'>
                    <Link to='/#AboutMeSection'>Peter Hellwege</Link>
                    {/* download cv */}
                </div>
                <div className='headRight'>
                    <ul>
                        <li>list item</li>
                        <li><a href=''>github</a></li>
                        <li><a href=''>linkedin</a></li>
                        {/* <Navbar/> */}
                    </ul>
                    {/* get icons from iconsdb.com */}
                </div>
            </div>
        </>
    )
}
