import React, { memo, useState } from "react";
import clsx from "clsx";
const tabs = [
    { id: "education", value: "Education" },
    { id: "experience", value: "Experience" },
    { id: "skills", value: "Skills" },
    { id: "awards", value: "Awards" }
]
const Tabs = ({ inView }) => {

    return (
        <div id="tabs">
            <ul className={clsx("tab-list")}>
                {tabs.map((tab) => {
                    return (
                        <li className="tab-item " key={tab.id}>
                            <a href={"#" + tab.id} className="tab-link">
                                <span>{tab.value}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default memo(Tabs)