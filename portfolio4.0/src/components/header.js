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
                        <li>github</li>
                        <li>linkedin</li>
                        <li>hamburger menu</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
