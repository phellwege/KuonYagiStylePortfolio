import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';



export default () => {

    return (
        <div className='sectionWrap'>
            <div className='section2Left'>
                <h1>Projects</h1>
                <Link to='/Projects' className='moreBtn'>View Projects</Link>
            </div>
            <div className='section2Right'>
                <h1>img</h1>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
