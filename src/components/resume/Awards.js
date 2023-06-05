import React, { memo } from 'react';
import Heading from "./Heading";
import Content from "./Content";
import { useInView } from 'react-intersection-observer';
import clsx from "clsx";
const awards = [{
    date: "2014-2015",
    heading: "Top 10 Web Developer",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
},
{
    date: "2014-2015",
    heading: "Top 5 LeaderShip Exellence Winner",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
},
{
    date: "2014-2015",
    heading: "Top 4 Web Tester",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
},
{
    date: "2014-2015",
    heading: "Art & Creative Director",
    title: "Cambridge University",
    desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
},]
const Awards = () => {
    const [ref, inView] = useInView({
        threshold: 0,
    });
    return (
        <div id="awards" className="page">
            <div className={clsx("award-wrapper", inView ? "visible" : "hidden")} ref={ref}>
                <Heading value="Awards" />
                {awards.map((item, index) => {
                    return (
                        <Content key={index}
                            date={item.date}
                            heading={item.heading}
                            title={item.title} />
                    );
                }
                )}
            </div>
        </div >
    );
}
export default memo(Awards);