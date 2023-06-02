import React, { memo } from "react";
const tabs = [
    { id: "education", value: "Education" },
    { id: "experience", value: "Experience" },
    { id: "skills", value: "Skills" },
    { id: "awards", value: "Awards" }
]
const Tabs = () => {
    return (
        <ul className="tab-list">
            {tabs.map((tab) => {
                return (
                    <li className="tab-item" key={tab.id}>
                        <a href={"#" + tab.id} className="tab-link">
                            <span>{tab.value}</span>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
export default memo(Tabs)