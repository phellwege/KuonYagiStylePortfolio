import './section.css';
import Loading from './loading';
import martian from '../static/image-mars.png';


export default (props) => {
    return (
        <>
            <div className='sectionWrap' id='noClicky'>
                <div className='sectionLeft'>
                    <h1>Peter Hellwege</h1>
                    <br/>
                        <div className='lineBreak'
                            style={{
                            background: '#5BC0BE',
                            height: '4px',
                            width: '18%',
                            marginLeft: '25%',
                            borderRadius: '.25em'
                            }}
                        />
                        <br className='lineBreak'/>
                        <div className='lineBreak'
                            style={{
                            background: '#5BC0BE',
                            height: '4px',
                            width: '18%',
                            marginLeft: '42%',
                            borderRadius: '.25em'
                            }}
                        />
                        <br className='lineBreak'/>
                    <h3>Full-Stack Software Engineer & 
                        <br/> 
                        Data Engineer.
                    </h3>
                </div>
                <div className='sectionRight'>
                        <img src={martian} alt='the planet Mars'/>
                        <h1 className='rightTitle' id='section1RightTitle'>Portfolio</h1>
                        <h1 className='rightTitle' id='section1RightTitle2'>Portfolio</h1>
                </div>
            </div>
        </>
    )
}
