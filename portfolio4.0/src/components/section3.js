import './section.css'
import {  FullpageSection } from '@ap.cx/react-fullpage';
import {Link} from 'react-router-dom';
import HeadShot from '../static/HeadShot.jpeg';
import Loading from './loading';
export default (props) => {

    return (
        <div className='sectionWrap'>
            <div className='sectionLeft'>
                <h1>About Me</h1>
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
                <h3>I love building something new <br/> from the ground up</h3>
                <Link to='/AboutMe'>
                    <button  className='moreBtn'>
                        show me more
                    </button>
                </Link>
            </div>
            <div className='sectionRight'>
                    <img src={HeadShot} alt='Headshot' id='Section3HeadShot'/>
                    <h1 className='numbers' id='aboutMePgNum'>0<FullpageSection.Number/></h1>
            </div>
        </div>
    )
}
