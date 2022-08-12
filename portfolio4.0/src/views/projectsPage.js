import Header from '../components/header';
import './projectPage.css';
import Loading from '../components/loading';

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
                                        <h2>E-commerce Product Page</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>E-Commerce Product Page Component is a functional ReactJS page, with a lot of ternary statements, use of props, active states and state management. This was a coding challenge from frontEndMentor.io</p>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/ecommerce-product-page-component/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/ecommerce-product-page-component' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Rock-Paper-Scissors</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Rock-Paper-Scissors is a simple game that keeps track of your score through state management. I designed the architecture to be as smooth as possible without the need for any page changes.</p>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/RockPaperScissors/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/RockPaperScissors' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Space Tourism</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Space Tourism is a multi-page front end challenge. It's mobile friendly down to 375px wide and functions by indexing a JSON file.</p>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/SpaceTourism/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/SpaceTourism' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Party Time</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Party Time is an ongoing single page application built from the ground up using ReactJS, CSS, and Javascript. It's been a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation</p>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/ThePartyTime/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/ThePartyTime' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Countdown Timer</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Countdown timer was a quick challenge in order to build a really good looking countdown component, that can then be integrated into other projects.</p>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/countdown/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/countdown' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Star Wars Homecoming</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.</p>
                                        <div className='projectLinks'>
                                            <a href='http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/bdsullivan123/homecoming' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Tip Calculator</h2>
                                        <p><Loading/></p>
                                    </div>
                                    <div className='projectRight'>
                                        <h4>Description</h4>
                                        <p>Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor.</p>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/Tip_Calculator/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/Tip_Calculator' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                </div>
                                <h2>
                                    <FullpageSection.Number/>
                                </h2>
                            </div>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
        </>
    )
}
