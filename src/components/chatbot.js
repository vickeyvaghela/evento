import React, { useState, useEffect } from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import ReconnectingWebSocket from "../assets/js/reconnecting-websocket";
import "../assets/js/main"
import profile from "../assets/img/chat-profile.png";
import profile2 from "../assets/img/chat-profile2.png";
import Emoji from "../assets/img/Emoji.png";
import { API_URL } from "../constants";
import axios from "axios";


var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0;
var token = `Token ${localStorage.getItem("token")}`;


function Chatbot() {

    const [message, setMessage] = useState("")
    const [msgList, setMsgList] = useState([]);
    const [usersList, setUsersList] = useState([])
    const [activeUser, setActiveUser] = useState()
    const [loading, setLoading] = useState(false)

    var roomName = "room1"
    var namea = userId
    let  chatSocket = new ReconnectingWebSocket(
        'ws://' + "143.244.137.15:8000" +
        '/ws/chat/' + "room1" + '/');

    async function getUserList() {
        setLoading(true)
        const response = await axios.get(API_URL + "/clientslist", { headers: { "Content-Type": "application/json", Authorization: token } })
        console.log(response);
        if (!response.data) {
            alert("Unable to fetch user's list")
            return
        } else {
            setUsersList(response.data.data)
            if (response.data.data[0] && response.data.data[0][0]) {
                setActiveUser(response.data.data[0][0])
            }
            setLoading(false)

        }
    }

    function onSubmitHandler(e) {
        e.preventDefault()
        console.log(message);

        if(!activeUser) return alert("No User available for chat..")

        chatSocket.send(JSON.stringify({
            'room': roomName,
            'command': 'new_message',
            'message': message,
            'from': namea,
            'receiver': activeUser.userId
        }));
        setMessage("")
    }

    React.useEffect(() => {

        getUserList()

        document.querySelector('#chat-message-input').onkeyup = function (e) {
            e.preventDefault()
            if (e.keyCode === 13) {  // enter, return
                document.querySelector('#chat-message-submit').click();
            }
        };

        chatSocket.onopen = function (e) {
            fetchMessages();
        }

        chatSocket.onmessage = function (e) {
            var data = JSON.parse(e.data);
            if (data['command'] === 'messages') {
                for (let i = 0; i < data['messages'].length; i++) {
                    createMessage(data['messages'][i]);
                }
            } else if (data['command'] === 'new_message') {
                createMessage(data['message']);
            }
        };

        chatSocket.onclose = function (e) {
            console.error('Chat socket closed unexpectedly');
        };

        function fetchMessages() {
            chatSocket.send(JSON.stringify({ 'command': 'fetch_messages' }));
        }

        function createMessage(data) {
            let temp = msgList
            temp.push(data)
            setMsgList(temp)
            console.log({ msgList });

            // changed state just to rerender message list 
            setMessage(",")
            setMessage("")
        }

    }, [])


    return (
        <div className="continent-wrapper ">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                        <h2>Chatbot</h2>
                    </div>
                  
                    {(loading) ? <div>loading... </div> : <div className="chatwrapper">
                      

                            <div className="chat-holder">
                                <div className="chat-titel">
                                    <div className="profile-img">
                                        <img src={profile} className="img-fluid" alt="" />
                                    </div>
                                    <div className="chat-user-name">
                                        <p>{activeUser?.name}</p>
                                        <span>{activeUser?.email}</span>
                                    </div>
                                    <div className="toggle-btn">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                {/* chat start here */}
                                <div className="chatting-holder">
                                    {msgList.map((item, index) => {
                                        if ((item.sender == activeUser?.userId && item.receiver==userId) || (item.receiver == activeUser?.userId && item.sender==userId) )
                                            return (
                                                <div key={index} className={(item.sender == userId) ? "chat-right" : "chat-left"}>
                                                    <p>{item.content}<span>2:30pm</span></p>
                                                </div>
                                            )
                                    })}

                                </div>
                                {/* chat box ends here */}
                                <div className="chat-type">
                                    <label for="">
                                        <a href="" className="imogi-icons"><img src={Emoji} alt="" /></a>
                                        <input onChange={(e) => setMessage(e.target.value)} type="text" id="chat-message-input" value={message} placeholder="Type here..." />
                                        <a href="" onClick={onSubmitHandler} id="chat-message-submit" className="send-mssage"><i className="icon-Send"></i></a>
                                    </label>
                                </div>
                            </div>

                        <div className="user-holder" >
                            <div className="user-list-titel">
                                <h2>User List</h2>
                            </div>
                            <div className="user-list">
                                {(usersList.length === 0) ? <p>No user available</p> : null}
                                <ul>
                                    {usersList.map((item, index) =>
                                        <li key={index} onClick={() => setActiveUser(item[0])} >
                                            <div className="user-profile-img">
                                                <img src={profile2} className="img-fluid" alt="" />
                                            </div>
                                            <div className="user-name-chat">
                                                <p>{item[0].name}</p>
                                                <span>Hi, How are you?</span>
                                            </div>
                                            <span>6:40 PM</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

// $(document).ready(function () {
//     $(".toggle-btn").click(function () {
//         $(".toggle-btn").toggleClass("active");
//         $(".user-holder").toggleClass("toggle-sidebar", 2000);
//     });
// });

export default Chatbot;
