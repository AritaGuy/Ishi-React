import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

function Rooms(){
 return (
    <div id="parent">
    <div id ="class" className="position-absolute top-0 start-50 translate-middle"><h1>Looking for rooms??</h1></div>
    <div id="room-container">
    <div class="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <NavLink></NavLink>
      </div>
      </div>
    </div>
    
    </div>
    
 )
}

export default Rooms