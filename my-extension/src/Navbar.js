import React from 'react';
import bar from "./assets/images/navbar/bar.png";
import explore from "./assets/images/navbar/explore.png";
import play from "./assets/images/navbar/play.png";
import pp from "./assets/images/navbar/profilepic.png";
import line from "./assets/images/navbar/line.png";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


import "./assets/css/navbar.css"

import { HashLink } from 'react-router-hash-link';

function Locate() {
    const location = useLocation();
    let loc = location.pathname;
    if (loc === "/Explore") {
        return (
            <>
            <img src = {bar} id = "bar"/>
                <Link to = "/Profile">
                    <img src = {pp} id = "pp"/>
                </Link>

                <Link to = "/Hubgames">
                    <img src = {play} id = "play"/>
                </Link>

                <Link to = "/Explore">
        <img src = {explore} id = "explorebutton"/>
        </Link>
                <img src = {line} class = "line-explore"/>
            </>
        )
    } else if ((loc === "/Hubgames")) {
        return (
            <>
            <img src = {bar} id = "bar"/>
                <Link to = "/Profile">
                    <img src = {pp} id = "pp"/>
                </Link>

                <Link to = "/Hubgames">
                    <img src = {play} id = "play"/>
                </Link>

                <Link to = "/Explore">
        <img src = {explore} id = "explorebutton"/>
        </Link>
                <img src = {line} class = "line-play"/>
            </>
        )
    } else if ((loc === "/Profile")){
        return (
            <>
            
                <img src = {bar} id = "bar"/>
                <Link to = "/Profile">
                    <img src = {pp} id = "pp"/>
                </Link>

                <Link to = "/Hubgames">
                    <img src = {play} id = "play"/>
                </Link>

                <Link to = "/Explore">
        <img src = {explore} id = "explorebutton"/>
        </Link>
                <img src = {line} class = "line-profile"/>
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