import React from "react";
import * as images from "../../assets/projects_image";
import Count from "../projects/Counter";
import Box from "./Box"
const projects = [
    {
        src: images.work1,
        title: "Branding & Illustration Design",
        desc: "Web Design",
    },
    {
        src: images.work2,
        title: "Branding & Illustration Design",
        desc: "Web Design",
    },
    {
        src: images.work3,
        title: "Branding & Illustration Design",
        desc: "Web Design",
    },
    {
        src: images.work4,
        title: "Branding & Illustration Design",
        desc: "Web Design",
    },
    {
        src: images.work5,
        title: "Branding & Illustration Design",
        desc: "Web Design",
    },
    {
        src: images.work6,
        title: "Branding & Illustration Design",
        desc: "Web Design",
    },
];
const counts = [
    { number: 100, title: "Awards" },
    { number: 1200, title: "Complete Projects" },
    { number: 1200, title: "Happy Customers" },
    { number: 500, title: "Cups of coffee" },
];

const Projects = () => {
    return (
        <div id="projects" className="sect">
            <div className="projects-title">Projects</div>
            <div className="projects-content">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</div>
            <div className="projects-list">
                {projects.map((item, index) => {
                    return (
                        < div className="projects-item" >
                            < Box key={index}
                                src={item.src}
                                title={item.title}
                                desc={item.desc} />
                        </div>
                    )
                })}
            </div >
            <div className="container">
                <div className="count-wrapper">
                    {counts.map((count, index) => {
                        return (
                            <div className="count-item">
                                <Count key={index}
                                    number={count.number}
                                    title={count.title} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
export default Projects;