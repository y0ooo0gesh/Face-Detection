import React from "react";
import SignIn from "../SignIn/SignIn";

const Navigation = ({ onRouteChange, isSignedIn}) =>{
    if (isSignedIn) {
        return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p 
                onClick={()=>onRouteChange("SignOut")}
                className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
    )}
    else {
    return(        
        <div>
            <div>
                <p onClick={()=>onRouteChange("SignIn")} className="f3 link dim black underline center pa2 ma2 pointer">Sign In</p>
                <p onClick={()=>onRouteChange("Register")} className="f3 link dim black underline center pa2 ma2 pointer">Register</p>
            </div>
        </div>
    )}
    
}

export default Navigation;