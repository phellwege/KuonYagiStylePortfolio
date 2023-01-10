import Header from '../components/header';
import './aboutMe.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import AboutMe1 from '../components/aboutMe1';
import AboutMe2 from '../components/aboutMe2';

export default () => {

    return (
        <>
            
            <div className="aboutMePageWrap">
                <Header/>
                <div className="AboutMeBody">
                    <AboutMe1/>
                    <AboutMe2/>
                </div>
            </div>
        </>
    )
}
