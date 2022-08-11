import './section.css'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation, FullpageCount, FullpageContext } from '@ap.cx/react-fullpage';

export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='section2Left'>
                <h1>Projects</h1>
                <button>View Projects</button>
            </div>
            <div className='section2Right'>
                <h1>img</h1>
                <h1>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
