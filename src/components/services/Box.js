import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Box = (pros) => {
    const { name, content } = pros;
    return (
        <div id="box" className="box-wrapper">
            <FontAwesomeIcon className="icon" icon="lightbulb" />
            <div className="box-name">
                {pros.name}
            </div>
            <div className="box-content">
                {pros.content}
            </div>
        </div>
    );
}
export default memo(Box)