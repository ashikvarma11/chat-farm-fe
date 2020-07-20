import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './join.css';
const Join = () =>{
    const [name,setName] = useState('');
    const [room,setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="get-in-form">
                <h1 className="form-heading">Join</h1>
                <div className="input-group">
                    <div className="label">NAME</div>
                    <input type="text" className="join-input" onChange={(event)=>setName(event.target.value)}/></div>
                <div className="input-group">
                    <div className="label">ROOM</div>
                    <input type="text" className="join-input" onChange={(event)=>setRoom(event.target.value)}/></div>
                <Link onClick={event => (!room || !name)?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}><button className="button" type="submit">GET IN</button></Link>
            </div>
            <div className="landing-text">
            Type in your name and a room name of your wish to create or join the room.
            </div>
        </div>
    )
}

export default Join;