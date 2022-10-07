import React, {useEffect, useState} from "react";
import "../index.css"
import {useParams} from "react-router-dom"
 
function RoomDetails(){
  const roomDB = "http://localhost:5000/rooms"
  const [room, setRoom]=useState({})
  let params = useParams()
  console.log(params)
  useEffect(()=> {
   fetch(`${roomDB}/${params.roomId}`)
  .then((r)=>r.json())
  .then((data)=>setRoom(data))}, [])
  
  console.log(room)
 return(
    <div id="selected-room">
    <img src={room.image} alt="selected room"/>
    <p id="desc">{room.description}</p>
    <button type="button" class="btn btn-dark">Book</button>
    </div>
  )
 }

 export default RoomDetails
