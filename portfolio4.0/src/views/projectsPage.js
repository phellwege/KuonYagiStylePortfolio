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
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                        <FullpageSection style={{SectionStyle}}>
                            <div className='projectWrap'>
                                <div className='projectLeft'>
                                    <p>Images Here</p>
                                </div>
                                <div className='projectRight'>
                                    <p>description</p>
                                </div>
                            </div>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
        </>
    )
}
