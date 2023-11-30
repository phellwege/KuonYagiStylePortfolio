import Header from '../components/header';
import './projectPage.css';
import Loading from '../components/loading';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import Ecommerce from '../static/CaptureHomeEcommercePrd.PNG';
import RockPaperScissors from '../static/CaptureHomeRockPaperScissors.PNG';
import SpaceTourism from '../static/CaptureSpaceTourism.PNG';
import PartyTime from '../static/giphyHomePage.gif';
import Countdown from '../static/CaptureCountDown.PNG';
import SWHomecoming from '../static/giphySWHomePage.gif';
import TipCalc from '../static/giphyTipCalc.gif';
import Resumancy from '../static/CaptureHomeResumancy.gif';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

export default () => {

    const ProjectSectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <>
        <div className="projectPageWrap">
        <Header/>
            <div id='CoverFlowElement'>
            <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation={false}
                    infiniteScroll={true}
                    enableHeading={true}
                    currentFigureScale='2'
                    otherFigureScale='.75'
                    loading='lazy'
                    media={{
                        '@media (max-width: 900px)': {
                        width: '100%',
                        height: '100vh'
                        },
                        '@media (min-width: 900px)': {
                        width: '100%',
                        height: '100vh'
                        }
                    }}
                    >

                    <img src={Ecommerce} alt='E-commerce Product Page' data-action="https://phellwege.github.io/ecommerce-product-page-component/"/>
                    <img src={RockPaperScissors} alt='Rock-Paper-Scissors' data-action="https://phellwege.github.io/RockPaperScissors/"/>
                    <img src={SpaceTourism} alt='Space Tourism' data-action="https://phellwege.github.io/SpaceTourism/"/>
                    <img src={Resumancy} alt='Resumancy' data-action='https://resumancy.com'/>
                    <img src={PartyTime} alt='PartyTime' data-action="https://phellwege.github.io/ThePartyTime/"/>
                    <img src={Countdown} alt='Countdown' data-action="https://phellwege.github.io/countdown/"/>
                    <img src={SWHomecoming} alt='Star Wars Homecoming' data-action="http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/"/>
                    <img src={TipCalc} alt='Tip Calculator' data-action="https://phellwege.github.io/Tip_Calculator/"/>
                    
                </Coverflow>
            </StyleRoot>
            </div>
        </div>

        <div className="ProjectFullPage">
            <Fullpage >
                    <FullpageNavigation/>
                    <FullPageSections>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Resumancy Home Page</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            <a href='https://resumancy.com' target='_blank'>
                                            <img src={Resumancy} loading='lazy' alt='E-commerce product page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Resumancy is an AI Resume creation suit I built from the ground up. Resumancy has the user create a base resume which it enhances using AI, then Resumancy can custom tailor resumes for any given job description, and produce cover letters.</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://resumancy.com' target='_blank'>Deployed Site</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>E-commerce Product Page</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            <a href='https://phellwege.github.io/ecommerce-product-page-component/' target='_blank'>
                                            <img src={Ecommerce} loading='lazy' alt='E-commerce product page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>E-Commerce Product Page Component is a functional ReactJS page, with a lot of ternary statements, use of props, active states and state management. This was a coding challenge from frontEndMentor.io</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/ecommerce-product-page-component/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/ecommerce-product-page-component' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#3A506B, #1C2541)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Rock-Paper-Scissors</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            
                                            <a href='https://phellwege.github.io/RockPaperScissors/' target='_blank'>
                                                <img src={RockPaperScissors} loading='lazy' alt='Rock Paper Scissors page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Rock-Paper-Scissors is a simple game that keeps track of your score through state management. I designed the architecture to be as smooth as possible without the need for any page changes.</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/RockPaperScissors/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/RockPaperScissors' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Space Tourism</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            
                                            <a href='https://phellwege.github.io/SpaceTourism/' target='_blank'>
                                                <img src={SpaceTourism} loading='lazy'  alt='Space Tourism page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Space Tourism is a multi-page front end challenge. It's mobile friendly down to 375px wide and functions by indexing a JSON file.</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/SpaceTourism/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/SpaceTourism' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#3A506B, #1C2541)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Party Time</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            <a href='https://phellwege.github.io/ThePartyTime/' target='_blank'>
                                                <img src={PartyTime} loading='lazy' alt='Party Time page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Party Time is an ongoing single page application built from the ground up using ReactJS, CSS, and Javascript. It's been a really fun and frustrating project to help me in my pursuit of constantly improving my code and knowledge of implementation</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/ThePartyTime/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/ThePartyTime' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Countdown Timer</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            <a href='https://phellwege.github.io/countdown/' target='_blank'>
                                                <img src={Countdown} loading='lazy' alt='Countdown page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Countdown timer was a quick challenge in order to build a really good looking countdown component, that can then be integrated into other projects.</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/countdown/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/countdown' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#3A506B, #1C2541)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Star Wars Homecoming</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            <a href='http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/' target='_blank'>
                                            <img src={SWHomecoming} loading='lazy' alt='Star Wars HomeComing page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Star Wars HomeComing is a text based interactive game. Where you can create your own custom character, and travel the known galaxy. It's a lightweight Python application, that is easy to use with a nice UI.</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='http://ec2-3-14-141-156.us-east-2.compute.amazonaws.com/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/bdsullivan123/homecoming' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{ProjectSectionStyle, background:'linear-gradient(#1C2541, #3A506B)'}}>
                            <div className='projectWrap'>
                                <div className='innerDiv'>
                                    <div className='projectLeft'>
                                        <h2>Tip Calculator</h2>
                                        <br/>
                                        <div className='projectImgDiv'>
                                            <a href='' target='_blank'>
                                                <img src={TipCalc} loading='lazy' alt='Tip Calculator page'/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className='projectRight'>
                                        <br/>
                                        <h4>Description</h4>
                                        <p>Tip Calculator is a front end mini project to keep my HTML, CSS, and JavaScript skills sharp. I followed a basic wireframe from frontendmentor.</p>
                                        <br/>
                                        <div className='projectLinks'>
                                            <a href='https://phellwege.github.io/Tip_Calculator/' target='_blank'>Deployed Site</a>
                                            <a href='https://github.com/phellwege/Tip_Calculator' target='_blank'>Github Repo</a>
                                        </div>
                                    </div>
                                    <br/>
                                    <h2 className='ProjectNumbers'>
                                        <FullpageSection.Number/>
                                    </h2>
                                </div>
                            </div>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
            </div>
        </>
    )
}
