import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';

export default (props) => {

    return (
        <div className='sectionWrap' id='AboutMeSection'>
            <div className='section3Left'>
                <h1>About Me</h1>
                <h3>Things I like</h3>
                <button>show me more</button>
            </div>
            <div className='section3Right'>
                <h1>img</h1>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
