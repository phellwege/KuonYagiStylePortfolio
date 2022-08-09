import './header.css'
import {Link} from 'react-router-dom';



export default () => {

    return (
        <>
            <div className='headWrap'>
                <div className='headLeft'>
                    <Link to='/#AboutMeSection'>Peter Hellwege</Link>
                </div>
                <div className='headRight'>
                    <ul>
                        <li>list item</li>
                        <li><a href=''>github</a></li>
                        <li><a href=''>linkedin</a></li>
                        <li>hamburger menu</li>
                    </ul>
                    {/* get icons from iconsdb.com */}
                </div>
            </div>
        </>
    )
}
