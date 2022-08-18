import './aboutMe.css';
import ProgressBar from './progressBar';
import JavaScript from '../static/JavaScript.png';
import Java from '../static/java.png';
import Python from '../static/python.png';
import jQuery from '../static/jQuery.png';
import Ajax from '../static/ajax.png';
import Bootstrap from '../static/bootstrap.png';
import Node from '../static/nodejs.png';
import Express from '../static/expressjs.png';
import MySQL from '../static/mysql.png';
import Django from '../static/django.png';
import MongoDB from '../static/mongodb.png';
import Html from '../static/HTML.png';
import Css from '../static/CSS.png';

import DataBricks from '../static/ajax.png';
import DataFactory from '../static/ajax.png';


export default (props) => {

    return (
        <>
            <div className='sectionWrap'>
                <div className='mainSection'>
                    <h2>Experience</h2>
                    <br/>
                    <ul>
                        <div id='topDiv'>
                            <div className="skills">
                                <li>
                                    <img src={JavaScript} alt="Javascript" id="JavaScript"/>
                                    <div className='innerDiv'>
                                        <h4>JavaScript</h4>
                                        <p>2 yrs</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='85'  height={20}/>
                                    </div>
                                </li>
                                <li>
                                    <img src={Java} alt="Java"/>
                                    <div className='innerDiv'>
                                        <h4>Java</h4>
                                        <p>1 yr</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='50'  height={20}/>
                                    </div>
                                </li>
                                <li>
                                    <img src={Html} alt="HTML" id="HTML"/>
                                    <div className='innerDiv'>
                                        <h4>HTML</h4>
                                        <p>4 yrs</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='95'  height={20}/>
                                    </div>
                                </li>
                                <li>
                                    <img src={Css} alt="CSS" id="Css"/>
                                    <div className='innerDiv'>
                                        <h4>CSS</h4>
                                        <p>4 yrs</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='95'  height={20}/>
                                    </div>
                                </li>
                                <li>
                                    <img src={Python} alt="Python" id="Python"/>
                                    <div className='innerDiv'>
                                        <h4>Python</h4>
                                        <p>1.5 yrs</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='80'  height={20}/>
                                    </div>
                                </li>
                            </div>
                            <div className="skills">
                                <li>
                                    <img src={jQuery} alt="jQuery" id="jQuery"/>
                                    <div className='innerDiv'>
                                        <h4>JQUERY</h4>
                                        <p>.5 yr</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='35'  height={20}/>
                                    </div>
                                </li>
                                <li>
                                    <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                                    <div className='innerDiv'>
                                        <h4>Bootstrap</h4>
                                        <p>2 yrs</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='75'  height={20}/>
                                    </div>
                                </li>
                                {/* <li>
                                    stuff 3
                                    <div className='innerDiv'>
                                        <h4>dunno yet</h4>
                                        <p>counter here</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='85'  height={20}/>
                                    </div>
                                </li> */}
                                <li>
                                    <img src={Ajax} alt="Ajax" id="Ajax"/>
                                    <div className='innerDiv'>
                                        <h4>Ajax</h4>
                                        <p>1 yr</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='50'  height={20}/>
                                    </div>
                                </li>
                                {/* <li>
                                    stuff 5
                                    <div className='innerDiv'>
                                        <h4>dunno yet</h4>
                                        <p>counter here</p>
                                        <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='85'  height={20}/>
                                    </div>
                                </li> */}
                            </div>
                        <div className="skills">
                            <li>
                                <img src={Node} alt="Nodejs" id="Node"/>
                                <div className='innerDiv'>
                                    <h4>Nodejs</h4>
                                    <p>1 yr</p>
                                    <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='45'  height={20}/>
                                </div>
                            </li>
                            <li>
                                <img src={Django} alt="Django" id="Django"/>
                                <div className='innerDiv'>
                                    <h4>Django</h4>
                                    <p>1 yr</p>
                                    <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='65'  height={20}/>
                                </div>
                            </li>
                            <li>
                                <img src={Express} alt="Express" id="Express"/>
                                <div className='innerDiv'>
                                    <h4>Express</h4>
                                    <p>1 yr</p>
                                    <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='85'  height={20}/>
                                </div>
                            </li>
                            <li>
                                <img src={MongoDB} alt="Mongo" id="Mongo"/>
                                <div className='innerDiv'>
                                    <h4>MongoDB</h4>
                                    <p>1 yr</p>
                                    <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='85'  height={20}/>
                                </div>
                            </li>
                            <li>
                                <img src={MySQL} alt="MySQL" id="MySQL"/>
                                <div className='innerDiv'>
                                    <h4>MySQL</h4>
                                    <p>2 yrs</p>
                                    <ProgressBar bgcolor="linear-gradient(0.25turn, whitesmoke, #5BC0BE)" progress='90'  height={20}/>
                                </div>
                            </li>
                        </div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}
