import React, { useState } from "react";

function Card({ id, image, info, price, name, RemoveCardHandler }) {

    //This HOOK is used to get the changes in the UI and by default it will be false 
    const [readMore, setReadmore] = useState(false);

    // This is used to adjust your description according to 200 words 
    const desc = info ? (readMore ? info : `${info.substring(0, 200)}...`) : '';


    function ReadModeHandler() {
        //This is the useState function that updares the UI whenever it opposes the condition 
        setReadmore(!readMore);
    }

    return (
        <div className="Card">
            <div className="Image" >
            <img className="image" src={image} alt=""></img>
            </div>
            
            <div >
                <div className="sub-heading">
                    <h4>₹{price}</h4>
                    <h4>{name}</h4>
                </div>

                <div className="description">
                    {desc}
                    <span className="read" onClick={ReadModeHandler}>
                        {
                            readMore ? `Show less` : `Read More`
                        }
                    </span>
                </div>
            </div>
            <button className="button" onClick={() => RemoveCardHandler(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;