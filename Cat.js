import React from "react";
import './App.css';



function Cat () {

    return (
       <div className="catbox">
        <div className="Mrcat">
      
            
            <button class = "message">
                <img src="images/catforshirt.png"  
                    alt="purple cat" 
                    height="300px" />
                        </button>


        </div>        
        <div>
        <h1>Hello and welcome!</h1>
          <h3>Pick a cat for a prize.</h3>
          </div>
        <div className="Mrcat">
            <img src="images/catpin-02.png"  alt="orange cat" height="300px" />
        </div>
        </div>
    )
};




export default Cat;
