import Header from '../components/header';
import './projectPage.css';

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

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
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>E-Commerce Product Page Component is a functional ReactJS page, with a lot of ternary statements, use of props, active states and state management. This was a coding challenge from frontEndMentor.io</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Rock-Paper-Scissors is a simple game that keeps track of your score through state management. I designed the architecture to be as smooth as possible without the need for any page changes.</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Space Tourism is a multi-page front end challenge. It's mobile friendly down to 375px wide and functions by indexing a JSON file.</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Party Time is an ongoing single page application built from the ground up using ReactJS, CSS, and Javascript. It's been a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Countdown timer was a quick challenge in order to build a really good looking countdown component, that can then be integrated into other projects.</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <p>Images Here</p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor.</p>
                                    </div>
                                </div>
                                <FullpageSection.Number/>
                            </div>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
        </>
    )
}
