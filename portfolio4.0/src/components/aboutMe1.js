import './aboutMe.css';
import Headshot from '../static/HeadShot.jpeg'
export default (props) => {

    return (
        <>
            <div className='sectionWrap'>
                <div className='sectionLeft'>
                    <h1>Peter Hellwege</h1>
                    <h3>
                        Passionate About Software
                        <br/>
                        And Data Engineering
                    </h3>
                </div>
                <div className='aboutSectionRight'>
                        <img src={Headshot} id='headshot'/>
                        <h3>A bit about me</h3>
                        <p>
                            In my spare time I enjoy art, fishing, riding my bike, or just sitting quietly and reading a book.
                            I'm located in scenic Boise ID, but love to travel.
                        </p>
                </div>
            </div>
        </>
    )
}
