import React, {useState, useEffect} from "react";
import {Routes, Route, useLocation } from "react-router-dom";
import '../index.css';
import RoomDetails from "./RoomDetails"
import RoomList from "./roomList"

function Rooms(){
  const [getRoom, setGetRoom]= useState([])
  const path = useLocation()

   const roomDB = "http://localhost:5000/rooms"

  useEffect(()=>{
   fetch(`${roomDB}`)
   .then((r)=>r.json())
   .then((rooms)=>{
    setGetRoom(rooms)
   })
  }, [])
  console.log(getRoom)

 
  function handleClick(hostel){
    //console.log(hostel)
    //specific = hostel
    // console.log(specific)
    
  }
  
 return (
  <div>
    <RoomList rooms={getRoom} />
    
     
  </div>
    
 )
}

export default Rooms