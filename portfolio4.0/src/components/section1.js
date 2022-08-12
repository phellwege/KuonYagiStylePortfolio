import './section.css';
import Loading from './loading';

export default (props) => {

    return (
        <>
            <div className='sectionWrap'>
                <div className='section1Left'>
                    <h1>Peter Hellwege</h1>
                    <h3>Full-Stack Software Engineer / 
                        <br/> 
                        Data Engineer.
                    </h3>
                </div>
                <div className='section1Right'>
                    <Loading/>
                    <h1>img</h1>
                    <h2>Portfolio</h2>
                </div>
            </div>
        </>
    )
}
