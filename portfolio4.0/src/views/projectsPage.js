import Header from '../components/header';
import './projectPage.css';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import projects from '../data/projects';

export default () => {

    const ProjectSectionStyle ={
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const gradients = [
        'linear-gradient(#1C2541, #3A506B)',
        'linear-gradient(#3A506B, #1C2541)',
    ];

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

                    {projects.map((project, index) => (
                        <img
                            key={index}
                            src={project.image}
                            alt={project.alt}
                            data-action={project.deployedUrl || project.repoUrl || '#'}
                        />
                    ))}

                </Coverflow>
            </StyleRoot>
            </div>
        </div>

        <div className="ProjectFullPage">
            <Fullpage >
                    <FullpageNavigation/>
                    <FullPageSections>
                        {projects.map((project, index) => (
                            <FullpageSection
                                key={index}
                                style={{ProjectSectionStyle, background: gradients[index % 2]}}
                            >
                                <div className='projectWrap'>
                                    <div className='innerDiv'>
                                        <div className='projectLeft'>
                                            <h2>{project.title}</h2>
                                            <br/>
                                            <div className='projectImgDiv'>
                                                <a href={project.deployedUrl || project.repoUrl || '#'} target='_blank' rel="noreferrer">
                                                    <img src={project.image} loading='lazy' alt={project.alt}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='projectRight'>
                                            <br/>
                                            <h4>Description</h4>
                                            <p>{project.description}</p>
                                            <br/>
                                            <div className='projectLinks'>
                                                {project.deployedUrl && (
                                                    <a href={project.deployedUrl} target='_blank' rel="noreferrer">Deployed Site</a>
                                                )}
                                                {project.repoUrl && (
                                                    <a href={project.repoUrl} target='_blank' rel="noreferrer">Github Repo</a>
                                                )}
                                            </div>
                                        </div>
                                        <br/>
                                        <h2 className='ProjectNumbers'>
                                            <FullpageSection.Number/>
                                        </h2>
                                    </div>
                                </div>
                            </FullpageSection>
                        ))}
                    </FullPageSections>
                </Fullpage>
            </div>
        </>
    )
}
