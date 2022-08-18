import './aboutMe.css';

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
                    <ul>
                        <div id='topDiv'>
                            <div className="skills">
                                <li>
                                    <img src={JavaScript} alt="Javascript" id="JavaScript"/>
                                    <div>
                                        <h4>JavaScript</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Java} alt="Java"/>
                                    <div>
                                        <h4>Java</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Html} alt="HTML" id="HTML"/>
                                    <div>
                                        <h4>HTML</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Css} alt="CSS" id="Css"/>
                                    <div>
                                        <h4>CSS</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Python} alt="Python" id="Python"/>
                                    <div>
                                        <h4>Python</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                            </div>
                            <div className="skills">
                                <li>
                                    <img src={jQuery} alt="jQuery" id="jQuery"/>
                                    <div>
                                        <h4>JQUERY</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                                    <div>
                                        <h4>Bootstrap</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    stuff 3
                                    <div>
                                        <h4>dunno yet</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    <img src={Ajax} alt="Ajax" id="Ajax"/>
                                    <div>
                                        <h4>Ajax</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                                <li>
                                    stuff 5
                                    <div>
                                        <h4>dunno yet</h4>
                                        <p>counter here</p>
                                    </div>
                                </li>
                            </div>
                        <div className="skills">
                            <li>
                                <img src={Node} alt="Nodejs" id="Node"/>
                                <div>
                                    <h4>Nodejs</h4>
                                    <p>counter here</p>
                                </div>
                            </li>
                            <li>
                                <img src={Django} alt="Django" id="Django"/>
                                <div>
                                    <h4>Django</h4>
                                    <p>counter here</p>
                                </div>
                            </li>
                            <li>
                                <img src={Express} alt="Express" id="Express"/>
                                <div>
                                    <h4>Express</h4>
                                    <p>counter here</p>
                                </div>
                            </li>
                            <li>
                                <img src={MongoDB} alt="Mongo" id="Mongo"/>
                                <div>
                                    <h4>MongoDB</h4>
                                    <p>counter here</p>
                                </div>
                            </li>
                            <li>
                                <img src={MySQL} alt="MySQL" id="MySQL"/>
                                <div>
                                    <h4>MySQL</h4>
                                    <p>counter here</p>
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
