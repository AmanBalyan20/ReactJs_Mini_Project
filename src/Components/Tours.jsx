import React from "react";
import Card from "./Card";
function Tours({tours , RemoveCardHandler}) {
    return (

        <div><h1 className="Main-Heading">This is our Plans</h1>
        <div className="Main-container">
            
        <div className="Cards">
            {
                tours.map((tour)=>{
                    return <Card {...tour} RemoveCardHandler={RemoveCardHandler}/>
                })
            }
        </div>
        
        </div>
        </div>
    );

}

export default Tours;