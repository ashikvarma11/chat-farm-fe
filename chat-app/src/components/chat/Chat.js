import React, { useEffect, useState } from 'react';
import './chat.css';
import queryString from 'query-string';
import io from 'socket.io-client';
import Infobar from '../infobar/Infobar';
import Messages from '../messages/Messages';
import Input from '../input/Input';
import TextContainer from '../textcontainer/TextContainer';
const ENDPOINT = 'https://chat-farm.herokuapp.com/';
let socket;
const Chat = ({ location }) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const {name,room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room },()=>{

        });

        return () =>{
            socket.emit('disconnect');
            socket.off();
        }


    }, [ENDPOINT, location.search]);

    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])
        });
        socket.on('roomData', ({ users }) => {
            setUsers(users);
          });
    },[messages]);

   

    const sendMessage = (event) =>{
        event.preventDefault();
        if (message) socket.emit('sendMessage',message,()=>setMessage(''));
    }
    return (
        <div className="outerContainer">
            <TextContainer users={users}/> 
            <div className="container">
            <Infobar room={room} />
            <Messages messages={messages} name={name}/>
            <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            </div>

    )
        
}

export default Chat;