import React from 'react';
import Background from '../Components/Background';

import backtomap from "../assets/images/success/backtomap.png";
import collectpoints from "../assets/images/success/collectpoints.png";
import progressbar from "../assets/images/success/progressbar.png";
import successgraphic from "../assets/images/success/successgraphic.png";
import successtext from "../assets/images/success/Successtext.png";

import { Link } from 'react-router-dom';

import "../assets/css/success.css"

const Success = () => {
    return (
    <>
        <Background/>
        <a href=""><img src={backtomap} id="backtomap"/></a>
        <a href=""><img src={collectpoints} id="collectpoints"/></a>
        <a href=""><img src={progressbar} id="progressbar"/></a>
        <a href=""><img src={successgraphic} id="successgraphic"/></a>
        <a href=""><img src={successtext} id="successtext"/></a>
    </>
    );
}

export default Success;