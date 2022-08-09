import './header.css'
import {Link} from 'react-router-dom';



export default () => {

    return (
        <>
            <div class='headWrap'>
                <div class='headLeft'>
                    <Link to='/#AboutMeSection'>Peter Hellwege</Link>
                </div>
                <div class='headRight'>
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
