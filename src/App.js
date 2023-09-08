import './App.css';
import React, { useState } from 'react';
import data from './data.js'
import Tours from "./Components/Tours";

function App() {

  const [tours, setTours] = useState(data)

  //To call this fuction in the Appjs we have to use prop in it 
  function RemoveCardHandler(id) {
    //This function is used to remove the card 
    const newTours = tours.filter(tour => tour.id !== id);
    //This will also make sure that those cards that doesn't matches the id will not display on the screen 
    setTours(newTours);
  }

//If ther are no tour left in the section 
if(tours.length === 0){
  return(
    <div className='App'>
      <h1>You are the one who don't want to be travel !</h1>
      <button className='button' onClick={()=> setTours(data)}>
        Refresh
      </button>
    </div>
  );
}

  return (
    <div className="App">
      <Tours tours={tours} RemoveCardHandler={RemoveCardHandler} />
    </div>
  );
}

export default App;
