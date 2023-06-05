import React, { memo } from "react";
import {
    aboutImage, partner1, partner2, partner3, partner4, partner5
} from "../../assets";
const About = () => {
    return (
        <div id="about" className="sect">
            <div className="container">
                <div className="about-wrapper">
                    <div className="img-item">
                        <img src={aboutImage} alt="about me" />
                    </div>
                    <div className="about-content">
                        <h1>About Me</h1>
                        <h2 className="goals">A small river named Duden flows by their place and supplies it with the necessary regelialia.</h2>
                        <ul className="about-list">
                            <li className="about-item" >
                                <span>Name:</span>
                                <span>Ronaldo Fredrickson</span>
                            </li>
                            <li className="about-item" >
                                <span>Date of birth:</span>
                                <span>November 28, 1989</span>
                            </li>
                            <li className="about-item">
                                <span>Address:</span>
                                <span>San Francisco CA 97987 USA</span>
                            </li>
                            <li className="about-item">
                                <span>Zip code:</span>
                                <span>1000</span>
                            </li>
                            <li className="about-item">
                                <span>Email:</span>
                                <span>ronaldo@gmail.com</span>
                            </li>
                            <li className="about-item">
                                <span>Phone:</span>
                                <span>+1-2234-5678-9-0</span>
                            </li>
                        </ul>
                        <div className="about-count-project">
                            <span>120</span>
                            <span>Project complete</span>
                        </div>
                        <div className="button-download">
                            <button>Download CV</button>
                        </div>
                    </div>

                </div>
                <div className="branch-wrapper">
                    <ul className="branch-list">
                        <li className="branch-item">
                            <img src={partner1} alt='partner1'></img>
                        </li>
                        <li className="branch-item">
                            <img src={partner2} alt='partner2'></img>
                        </li>
                        <li className="branch-item">
                            <img src={partner3} alt='partner3'></img>
                        </li>
                        <li className="branch-item">
                            <img src={partner4} alt='partner4'></img>
                        </li>
                        <li className="branch-item">
                            <img src={partner5} alt='partner5'></img>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
}
export default About