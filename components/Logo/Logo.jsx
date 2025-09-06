import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import face from '../../assets/icons/face-recognition.png';
const Logo = () =>{
    return(
    <div>
        <Tilt className="flex Tilt br2 shadow-2 ma4">
            <img alt="faceLogo" src={face}/>         
        </Tilt>
    </div>
    )
}

export default Logo;