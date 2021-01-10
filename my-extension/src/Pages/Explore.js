import React from 'react';
import Background from '../Components/Background';
import java from "../assets/images/explore/thumbnails-07.png";
import python from "../assets/images/explore/thumbnails-09.png";
import hub from "../assets/images/explore/thumbnails-08.png";
import javabubble from "../assets/images/explore/thumbnails-10.png";
import hubbubble from "../assets/images/explore/thumbnails-11.png";
import pythonbubble from "../assets/images/explore/thumbnails-12.png";
import worldbackground from "../assets/images/explore/thumbnails-01.png";
import title from "../assets/images/explore/title.png";

import "../assets/css/explore.css"

const Explore = () => {
    return (
    <>
        <Background/>
        <img src={worldbackground} id="worldbackground"/>
        <a href=""><img src={java} id="java"/></a>
        <a href=""><img src={python} id="python"/></a>
        <a href=""><img src={hub} id="hub"/></a>
        <a href=""><img src={javabubble} id="javabubble"/></a>
        <a href=""><img src={hubbubble} id="hubbubble"/></a>
        <a href=""><img src={pythonbubble} id="pythonbubble"/></a>
        <img src={title} id="title"/>
    </>
    );
}
 

export default Explore;
