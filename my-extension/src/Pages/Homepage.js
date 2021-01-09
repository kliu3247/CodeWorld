import React from 'react';
import arrow from "../assets/images/htmlhub/Group 6792.png"
import Background from "../Components/Background"
import button1 from "../assets/images/homepage/signup.png"
import button2 from "../assets/images/homepage/login.png"
import getstarted from "../assets/images/homepage/start.png"

import "../assets/css/homepage.css"

import { HashLink } from 'react-router-hash-link';

const Homepage = () => {
    return (
    <>
        <Background />
        <img src = {button1} id = "button1"/>
        <img src = {button2} id = "button2"/>
        <img src = {getstarted} id = "button3"/>
    </>
    );
}


export default Homepage;