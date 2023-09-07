import React from "react";
import Card from "./Card";
function Tours({tours , RemoveCardHandler}) {
    return (
        <div>
            <h1>This is our cards</h1>
        <div>
            {
                tours.map((tour)=>{
                    return <Card {...tour} RemoveCardHandler={RemoveCardHandler}/>
                })
            }
        </div>
        
        </div>
    );

}

export default Tours;