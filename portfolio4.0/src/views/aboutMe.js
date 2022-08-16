import Header from '../components/header';
import './aboutMe.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

import AboutMe1 from '../components/aboutMe1';
import AboutMe2 from '../components/aboutMe2';

export default () => {

    const SectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <>
            <Header/>
                <Fullpage>
                    <FullpageNavigation/>
                    <FullPageSections>
                        <FullpageSection style={{SectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <AboutMe1/>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle, background:'linear-gradient(#3A506B, #1C2541)'}}>
                            <AboutMe2/>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
        </>
    )
}
