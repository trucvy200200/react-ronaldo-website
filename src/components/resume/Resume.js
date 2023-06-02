import React, { useEffect, useState, memo } from "react";
import Tabs from "./Tabs";
import Education from "./Education";
import Experience from "./Experience";
// import Awards from "./Awards";
// import Skills from "./Skills";
const Resume = () => {
    return (
        <div id="resume">
            <div className="container" >
                <div className="resume-wrapper">
                    <div className="resume-left">
                        <Tabs />
                    </div>
                    <div className="resume-right">
                        <Education />
                        <Experience />
                        {/* <Skills />
                        <Awards /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default memo(Resume)