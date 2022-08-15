import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import Loading from './loading';
export default (props) => {

    return (
        <div className='sectionWrap' id='AboutMeSection'>
            <div className='section3Left'>
                <h1>About Me</h1>
                <h3>I love building something new <br/> from the ground up</h3>
                <button  className='moreBtn'>show me more</button>
            </div>
            <div className='section3Right'>
                <div className='LoadingSection'>
                    <Loading/>
                </div>
                <h1>img</h1>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
