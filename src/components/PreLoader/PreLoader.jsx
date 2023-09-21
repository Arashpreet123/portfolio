import React, { useEffect } from "react";
import './PreLoader.scss';
import { preLoaderAnim } from "../animations/animation";
const PreLoader = () => {

    useEffect(() =>{
        preLoaderAnim()
    },[]
    );
    return (
        <div className="preloader">
            <div className="texts-container">
                
                <span >LOADING PORTFOLIO</span>
                {/* <span >Java,</span>
                <span >Creator.</span> */}

            </div>
        </div>
    )
}

export default PreLoader