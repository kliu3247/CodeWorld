import React from 'react';
import arrow from "../assets/images/htmlhub/Group 6792.png"
import Background from "../Components/Background"
import button1 from "../assets/images/homepage/signup.png"
import button2 from "../assets/images/homepage/login.png"
import getstarted from "../assets/images/homepage/start.png"

import title from "../assets/images/homepage/title.png"


import "../assets/css/homepage.css"

import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
    <>
        <Background />
        <img src = {title} id = "introtitle" />
        <img src = {button1} id = "button1"/>
        <img src = {button2} id = "button2"/>
        <Link to = "/Quiz"> 
            <img src = {getstarted} id = "button3"/>
        </Link>
    </>
    );
}


export default Homepage;