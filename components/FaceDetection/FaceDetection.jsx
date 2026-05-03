import React from "react";
import './FaceDetection.css' ;

const FaceDetection = ( { imageUrl, box } ) =>{
    return(
        <div className="center">
            <div className="absolute mt2">
                {imageUrl ? (
                <img 
                id="inputimage"
                alt="Image" 
                src={imageUrl} 
                width="500" 
                height="auto"
                />
                ) : null }
                <div 
                className="bounding-box" 
                style={{
                top: box.topRow ,
                right: box.rightCol , 
                bottom:box.bottomRow ,  
                left: box.leftCol 
                }}>
                </div>
            </div>
        </div>
    )
}

export default FaceDetection;