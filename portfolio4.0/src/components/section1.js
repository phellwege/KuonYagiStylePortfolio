import './section.css';
import Loading from './loading';

export default (props) => {

    return (
        <>
            <div className='sectionWrap'>
                <div className='sectionLeft'>
                    <h1>Peter Hellwege</h1>
                        <div
                            style={{
                            background: '#5BC0BE',
                            height: '3px',
                            width: '18%',
                            marginLeft: '25%'
                            }}
                        />
                        <br/>
                        <div
                            style={{
                            background: '#5BC0BE',
                            height: '3px',
                            width: '18%',
                            marginLeft: '42%'
                            }}
                        />
                        <br/>
                    <h3>Full-Stack Software Engineer / 
                        <br/> 
                        Data Engineer.
                    </h3>
                </div>
                <div className='sectionRight'>
                        {/* <Loading/> */}
                        <h1>img</h1>
                        <h1>Portfolio</h1>
                </div>
            </div>
        </>
    )
}
