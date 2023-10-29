import React from 'react'
import "./creators.css"

function creators() {
    return(
        <div className="creator--container">
            <div className="left-margin">
                <div className="creator-card">
                    <h3>NF</h3>
                    <img src="./creator-images/NF.jpg"/>
                </div>
                <div className="creator-card">
                    <h3>Morgan Wallen</h3>
                    <img src="creator-images/Morgan-Wallen.jpg"/>
                </div>
                <div className="creator-card">
                    <h3>Boris</h3>
                    <img src="creator-images/Boris.jpg"/>  
                </div>
                <div className="creator-card">
                    <h3>Blackwing</h3>
                    <img src="creator-images/Blackwing.jpg"/>  
                </div>
                <div className="creator-card">
                    <h3>The Smashing Pumpkins</h3>
                    <img src="creator-images/The-Smashing-Pumpkins.jpg"/> 
                </div>
                <div className="creator-card">
                    <h3>Dinosaur Jr.</h3>
                    <img src="creator-images/Dinosaur-Jr.jpg"/>  
                </div>
            </div>
            <div className="right-margin">
                <button className="add-creator"> Add </button>
            </div>
        </div>
    );
}

export default creators;