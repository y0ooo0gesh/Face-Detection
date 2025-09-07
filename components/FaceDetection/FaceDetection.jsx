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
                top: box.toprow ,
                right: box.rightcol , 
                bottom:box.bottomrow ,  
                left: box.leftcol 
                }}>
                </div>
            </div>
        </div>
    )
}

export default FaceDetection;