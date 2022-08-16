import './aboutMe.css';
import Loading from './loading';
import Headshot from '../static/HeadShot.jpeg'
export default (props) => {

    return (
        <>
            <div className='sectionWrap'>
                <div className='sectionLeft'>
                    <h1>Peter Hellwege</h1>
                    <h3>Full-Stack Software Engineer / 
                        <br/> 
                        Data Engineer.
                    </h3>
                </div>
                <div className='sectionRight'>
                        {/* <Loading/> */}
                        <img src={Headshot} id='headshot'/>
                        <h3>A bit about me</h3>
                        <p>lorem ipsum dolor sit amet</p>
                </div>
            </div>
        </>
    )
}
