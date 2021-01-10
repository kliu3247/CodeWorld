import React from 'react';
import navigation from "./assets/images/navbar.png"
import line from "./assets/images/line.png"
import { useLocation } from 'react-router-dom';

import "./assets/css/homepage.css"

import { HashLink } from 'react-router-hash-link';

function Locate() {
    const location = useLocation();
    let loc = location.pathname;
    if (loc === "/Explore") {
        return (
            <>
                <img src = {navigation} id = "navigation"/>
                <img src = {line} id = "line-explore"/>
            </>
        )
    } else if ((loc === "/Htmlhub")) {
        return (
            <>
                <img src = {navigation} id = "navigation"/>
                <img src = {line} id = "line-play"/>
            </>
        )
    } else if ((loc === "/Profile")){
        return (
            <>
                <img src = {navigation} id = "navigation"/>
                <img src = {line} id = "line-return"/>
            </>
        )
    }
}


const Navbar = () => {
    return (
    <>
        <Locate/>
    </>
    );
}

export default Navbar;