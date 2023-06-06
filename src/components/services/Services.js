import React, { memo } from "react";
import Box from "./Box";

const boxes = [{
    name: "Web Design",
    content: "A small river named Duden flows by their place and supplies it with neccessary regelialia."
}]

const Services = () => {
    return (
        <div id="services" className="sect">
            <div className="container">
                <div className="services-title">Services</div>
                <div className="services-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</div>

                {boxes.map((box, index) => {
                    return (

                        <div className="services-list">
                            <div className="services-item">
                                <Box
                                    name={box.name}
                                    content={box.content} />
                            </div>
                            <div className="services-item">
                                <Box name={box.name}
                                    content={box.content} />
                            </div>
                            <div className="services-item">
                                <Box name={box.name}
                                    content={box.content} />
                            </div>
                            <div className="services-item">
                                <Box name={box.name}
                                    content={box.content} />
                            </div>
                            <div className="services-item">
                                <Box name={box.name}
                                    content={box.content} />
                            </div>
                            <div className="services-item">
                                <Box name={box.name}
                                    content={box.content} />
                            </div>
                        </div>

                    );
                })}

            </div>
        </div >
    );
}
export default Services