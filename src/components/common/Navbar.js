import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

const navs = [
    {
        id: "#home",
        name: "Home",
    },
    {
        id: "#about",
        name: "About",
    },
    {
        id: "#resume",
        name: "Resume",
    },
    {
        id: "#services",
        name: "Services",
    },
    {
        id: "#projects",
        name: "Projects",
    },
    {
        id: "#blogs",
        name: "My Blog",
    },
    {
        id: "#contact",
        name: "Contact",
    },
];

const Navbar = () => {

    return (
        <>
            <div className="navbar-collapse collapse" id="ftc-nav">
                <ul className="navbar-nav nav display">
                    {navs.map((nav) => {
                        return (
                            <li className="nav-item" key={nav.id}>
                                <a href={nav.id} className="nav-link">
                                    <span>{nav.name}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
