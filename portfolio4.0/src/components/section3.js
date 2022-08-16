import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import Loading from './loading';
export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>About Me</h1>
                <h3>I love building something new <br/> from the ground up</h3>
                <Link to='/AboutMe'>
                    <button  className='moreBtn'>
                        show me more
                    </button>
                </Link>
            </div>
            <div className='sectionRight'>
                    <Loading/>
                    <h1>img</h1>
                    <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
