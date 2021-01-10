import React from 'react';
import Background from '../Components/Background';

import attributespic from "../assets/images/hubgames/attributes pic.png";
import attributestext from "../assets/images/hubgames/attributes text.png";
import backbutton from "../assets/images/hubgames/back button.png";
import elementspic from "../assets/images/hubgames/elements pic.png";
import elementstext from "../assets/images/hubgames/elements text.png";
import headingspic from "../assets/images/hubgames/headings pic.png";
import headingstext from "../assets/images/hubgames/headings text.png";
import intropic from "../assets/images/hubgames/intro pic.png";
import introtext from "../assets/images/hubgames/intro text.png";
import padlockedpic from "../assets/images/hubgames/padlocked pic.png";
import padlockedpic1 from "../assets/images/hubgames/padlocked pic-1.png";

import "../assets/css/hubgames.css"

const Hubgames = () => {
    return (
    <>
        <Background/>
        <a href=""><img src={attributespic} id="attributespic"/></a>
        <a href=""><img src={attributestext} id="attributestext"/></a>
        <a href=""><img src={backbutton} id="backbutton"/></a>
        <a href=""><img src={elementspic} id="elementspic"/></a>
        <a href=""><img src={elementstext} id="elementstext"/></a>
        <a href=""><img src={headingspic} id="headingspic"/></a>
        <a href=""><img src={headingstext} id="headingstext"/></a>
        <a href=""><img src={intropic} id="intropic"/></a>
        <a href=""><img src={introtext} id="introtext"/></a>
        <a href=""><img src={padlockedpic} id="padlockedpic"/></a>
        <a href=""><img src={padlockedpic1} id="padlockedpic1"/></a>
    </>
    );
}
 

export default Hubgames;