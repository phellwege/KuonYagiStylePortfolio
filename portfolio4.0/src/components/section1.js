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
                    <div className='LoadingSection'>
                        <Loading/>
                    </div>
                    <div className='imgSection'>
                        <h1>img</h1>
                    </div>
                    <div className='imgOverlay'>
                        <h1>Portfolio</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
