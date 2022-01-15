import React from "react";
import $ from 'jquery';

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import profile from "../assets/img/chat-profile.png";
import profile2 from "../assets/img/chat-profile2.png";
import Emoji from "../assets/img/Emoji.png";


function Chatbot() {
    return (
        <div className="continent-wrapper ">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                        <h2>Chatbot</h2>
                    </div>
                    <div className="chatwrapper">

                        <div className="chat-holder">
                            <div className="chat-titel">
                                <div className="profile-img">
                                    <img src={profile} className="img-fluid" alt="" />
                                </div>
                                <div className="chat-user-name">
                                    <p>Mark Jecno</p>
                                    <span>markjecno@gmail.com</span>
                                </div>
                                <div className="toggle-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="chatting-holder">
                                <div className="chat-right">
                                    <p>I need your help <span>2:30pm</span></p>
                                </div>

                                <div className="chat-left">
                                    <p>Can you tell me exactly what you’re looking for?<span>3:30pm</span></p>
                                </div>
                                <div className="today-line-holder">
                                    <span>Today</span>
                                </div>
                                <div className="chat-right">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam minima illo qui laboriosam minus accusantium impedit, tenetur exercitationem, itaque ut voluptatem earum consectetur, ratione quod eligendi recusandae perspiciatis. Officia, alias?<span>2:30pm</span></p>
                                </div>

                                <div className="chat-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil temporibus vero officia modi aliquam tempora labore maxime, voluptatum cum laudantium iste deleniti aut praesentium deserunt veniam a impedit adipisci qui?<span>3:30pm</span></p>
                                </div>
                                <div className="chat-right">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam minima illo qui laboriosam minus accusantium impedit, tenetur exercitationem, itaque ut voluptatem earum consectetur, ratione quod eligendi recusandae perspiciatis. Officia, alias?<span>2:30pm</span></p>
                                </div>
                            </div>
                            <div className="chat-type">
                                <label for="">
                                    <a href="" className="imogi-icons"><img src={Emoji} alt="" /></a>
                                    <input type="text" value="" placeholder="Type here..." />
                                    <a href="" className="send-mssage"><i className="icon-Send"></i></a>
                                </label>
                            </div>
                        </div>

                        <div className="user-holder" >
                            <div className="user-list-titel">
                                <h2>User List</h2>
                            </div>
                            <div className="user-list">
                                <ul>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                    <li>
                                        <div className="user-profile-img">
                                            <img src={profile2} className="img-fluid" alt="" />
                                        </div>
                                        <div className="user-name-chat">
                                            <p>Mark Jecno</p>
                                            <span>Hi, How are you?</span>
                                        </div>
                                        <span>6:40 PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

$(document).ready(function () {
    $(".toggle-btn").click(function () {
        $(".toggle-btn").toggleClass("active");
        $(".user-holder").toggleClass("toggle-sidebar", 2000);
    });
});

export default Chatbot;
