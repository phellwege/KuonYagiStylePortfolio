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
                <div className='sectionLeft'>
                    <ul>
                        <div id='topDiv'>
                            <div>
                                <li class="skill-set__item">
                                    <div class="skill-set__icon"><img src={JavaScript} alt="JavaScript" id="JavaScript"/></div>
                                    <div class="skill-set__detail">
                                        <div class="skill-set__meta">
                                        <div class="skill-set__name">
                                            <h4 class="small-title small-title--skill">Illustrator</h4>
                                            <p class="skill-set__year">3YEARS</p>
                                        </div>
                                        <p class="small-title small-title--skill skill-set__high">90<span class="skill-set__ratio">%</span></p>
                                        </div>
                                        <div class="skill-set__bar p90 js-scroll in"></div>
                                    </div>
                                </li>
                                <li>stuff 2</li>
                                <li>stuff 3</li>
                                <li>stuff 4</li>
                                <li>stuff 5</li>
                            </div>
                            <div>
                                <li>stuff 1</li>
                                <li>stuff 2</li>
                                <li>stuff 3</li>
                                <li>stuff 4</li>
                                <li>stuff 5</li>
                            </div>
                        </div>
                    </ul>
                    <ul>
                        <div id='bottomDiv'>
                            <li>stuff 1</li>
                            <li>stuff 2</li>
                            <li>stuff 3</li>
                            <li>stuff 4</li>
                            <li>stuff 5</li>
                        </div>
                    </ul>
                </div>
                <div className='sectionRight'>
                <div className="skills">
                    <img src={JavaScript} alt="Javascript" id="JavaScript"/>
                    <img src={Java} alt="Java"/>
                    <img src={Html} alt="HTML" id="HTML"/>
                    <img src={Css} alt="CSS" id="Css"/>
                    <img src={Python} alt="Python" id="Python"/>
                </div>
                <div className="skills">
                    <img src={jQuery} alt="jQuery" id="jQuery"/>
                    <img src={Bootstrap} alt="Bootstrap" id="Bootstrap"/>
                    {/* <img src={DataBricks} alt='DataBricks' id="DataBricks"/> */}
                    <img src={Ajax} alt="Ajax" id="Ajax"/>
                    {/* <img src={DataFactory} alt='DataFactory' id='DataFactory'/> */}
                </div>
                <div className="skills">
                    <img src={Node} alt="Nodejs" id="Node"/>
                    <img src={Django} alt="Django" id="Django"/>
                    <img src={Express} alt="Express" id="Express"/>
                    <img src={MongoDB} alt="Mongo" id="Mongo"/>
                    <img src={MySQL} alt="MySQL" id="MySQL"/>
                </div>
                        <h2>Technical Expertise</h2>
                </div>
            </div>
        </>
    )
}
