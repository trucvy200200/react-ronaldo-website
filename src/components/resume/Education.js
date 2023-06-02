import React, { memo } from "react";
import Content from "./Content";
import Heading from "./Heading";
const educationContents = [
    {
        date: "2014-2015",
        heading: "Bachelor of Science in Computer Science",
        title: "Cambridge University",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        date: "2014-2015",
        heading: "Computer Processing Systems/Computer Software",
        title: "Cambridge University",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        date: "2014-2015",
        heading: "Diploma in Computer",
        title: "Cambridge University",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
        date: "2014-2015",
        heading: "Art & Creative Director",
        title: "Cambridge University",
        desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
]
const Education = () => {
    return (
        <div id="education">
            <Heading value="Education" />
        </div>
    );
}
export default memo(Education)