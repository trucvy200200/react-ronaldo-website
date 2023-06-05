import React, { memo } from "react"
const Box = (pros) => {
    const { src, title, desc } = pros;
    return (
        <div id="box-pro" className="box-pro-wrapper">
            <div className="box-image">
                <img style={{ height: "350px", width: "700px" }} src={src}></img>
            </div>
            <div className="box-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
}
export default memo(Box);