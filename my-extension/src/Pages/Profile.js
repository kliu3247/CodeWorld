import React from 'react';
import top from "../assets/images/profile/top.png";
import pic1 from "../assets/images/profile/game1.png";
import pic2 from "../assets/images/profile/game2.png";
import redeem from "../assets/images/profile/reedem.png";

import ellipse from "../assets/images/profile/ellipse.png";
import savedgames from "../assets/images/profile/savedgames.png";
import "../assets/css/profile.css"

import { Link } from 'react-router-dom';
import Background from "../Components/Background"
import Navigation from "../Navbar.js";

const Explore = () => {
    return (
    <>
        <Background/>
        <img src={top} id="top"/>
        <img src={pic1} id="pic1"/>
        <img src={pic2} id="pic2"/>
        <img src={redeem} id="r"/>
        <img src={ellipse} id="ellipse"/>
        <img src={savedgames} id="sg"/>
        <Navigation/>
    </>
    );
}
 

export default Explore;