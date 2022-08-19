import './section.css';
import Loading from './loading';
import martian from '../static/image-mars.png';
import LightBox from './lightBox';

export default (props) => {

    const lightBoxShow = () => {
        const x = document.getElementsByClassName('lightBoxWrap')[0];
        const y = document.getElementsByClassName('cartBoxWrap')[0];
        if(x.style.display == 'block') {
            x.style.display = 'none';
            y.style.display = 'none';
        }
        else {
            x.style.display = 'block';
            y.style.display = 'none';
        }
}
    return (
        <>
            <div className='sectionWrap'>
            <LightBox/>
                <div className='sectionLeft'>
                    <h1>Peter Hellwege</h1>
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
                    <h3>Full-Stack Software Engineer / 
                        <br/> 
                        Data Engineer.
                    </h3>
                </div>
                <div className='sectionRight'>
                        <img src={martian} alt='the planet Mars'/>
                        <h1 className='rightTitle' id='section1RightTitle' onClick={lightBoxShow}>Portfolio</h1>
                </div>
            </div>
        </>
    )
}
