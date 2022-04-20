import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() { 
const[my, uMy]=useState(false); // define the two const
  function click(){
    uMy(my ? false : true);// conditon 
  }

    return(
      <button onClick={click}>{my ? "On" :"Off"}</button> // assign with the click and condition 

    );
  }
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
