import React from "react";
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import face from './face-recognition.png';
const Logo = () =>{
    return(
        <Tilt className="flex Tilt br2 shadow-2 ma4">
            <div>
                 <img alt="faceLogo" src={face}/>
            </div>
        </Tilt>
    )
}

export default Logo;