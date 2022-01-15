import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import Modal from "./../comman/modal/Modal";
import AddEvent from "./popups/add_event";


import { API_URL } from "../../constants";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

import event1 from "../../assets/img/evant1.png";
import event2 from "../../assets/img/evant2.png";
import event3 from "../../assets/img/evant3.png";

const axios = require("axios");

function Event() {
    const [isShown, setIsShown] = useState(false);

    const [show, setShow] = useState(false);

    // const [eventsAry, set_eventsAry] = useState([{ display_name: "sdfsdf" }]);
    const [eventsAry, set_eventsAry] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                let token = `Token ${localStorage.getItem("token")}`;
                const response = await axios.get(`${API_URL}/events`, { headers: { "Content-Type": "application/json", Authorization: token } });

                if (response && response.data && response.data.data && response.data.data && response.data.data.length) {
                    console.log("response.data.data.length", response.data.data.length);
                    set_eventsAry(response.data.data);
                }
            } catch (errCallingApi) {
                console.log("errCallingApi", errCallingApi);
            }
        })();
    },[]);

    return (
        <main>
            <div className="continent-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                            <Link to="/dashboard" className="back-btnt">
                                <i className="icon-Back" aria-hidden="true"></i>
                            </Link>
                            <h2>All Category</h2>
                            <div className="category-selctor">
                                <select name="event-new" id="category-selctor">
                                    <option value="All-Category">All Category</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="e-btn">
                                

                                <button onClick={() => setShow(true)} className="new-btn-creat"><i className="icon-plus" aria-hidden="true"></i>Add event</button>
                                <Modal title="My Modal" onClose={() => setShow(false)} show={show}><AddEvent setShow={setShow}/></Modal>
                            </div>
                        </div>
                        <div className="process-wrapper"></div>
                        <div className="event-wrapper">
                            {eventsAry.length &&
                                eventsAry.map((item) => (
                                    <Link to="/event_view" key={item.eventId}>
                                        <div className="booking-holder">
                                            <div className="fs-holder">
                                                <div className="book-img">
                                                    {item.image && item.image[0] && item.image[0].image && (
                                                        <img
                                                            src={`${API_URL + item.image[0].image}`}
                                                            height={169}
                                                            width={335}
                                                            className=""
                                                            alt=""
                                                        />
                                                    )}

                                                    {(!item.image || !item.image.length) && (
                                                        <img src={`${event1}`} height={169} width={335} className="" alt="" />
                                                    )}
                                                </div>
                                                <div className="event-holder">
                                                    <div className="titel-event live-event-holder">
                                                        <div className="live-event-b">
                                                            <button>{item.category}</button>
                                                            <div className="rating-star">
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-silver-Star"></i>
                                                                <i className="icon-silver-Star"></i>
                                                            </div>
                                                            <h3>{item.display_name}</h3>
                                                        </div>
                                                        <div className="">
                                                            {/* <button type="button" style={{"z-index":"5000"}}>Edit Event</button> */}
                                                            <Link to={`/event/addedEvent/${item.eventId}`} style={{"z-index":"5000"}}>Edit Event</Link>
                                                        </div>
                                                        <div className="material-switch m-titel">
                                                            <h3>{item.price} INR</h3>
                                                        </div>
                                                    </div>
                                                    <div className="event-info">
                                                        <ul>
                                                            <li>
                                                                <a href="javascript-void(0)">
                                                                    <i className="icon-location"></i>
                                                                    {`${item.event && item.event[0] && item.event[0] && item.event[0].address
                                                                            ? item.event[0].address
                                                                            : "-"
                                                                        }`}
                                                                </a>
                                                            </li>
                                                            <li className="live-event-ad">Available</li>
                                                            <li className="share-bt">
                                                                <i className="icon-share"></i>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}

                            <div className="booking-ad">
                                <span>Ad</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next-prw-holder ">
                    <Link to="/dashboard" className="prew">
                        <i className="icon-Back"></i>Back
                    </Link>
                    <Link to="/dashboard" className="next">
                        Go to Dashboard<i className="icon-Next"></i>
                    </Link>
                </div>
            </div>
            {/* <ul>
                    <li className="process-stap">
                        <input type="checkbox" id="cb1" hidden className="cb-btn" />
                        <span>01</span><br />
                        <label className="selact-btn" for="cb1">Add Event</label>
                    </li>
                    <li className="process-stap">
                        <input type="checkbox" id="cb2" hidden className="cb-btn" />
                        <span>02</span><br />
                        <label className="selact-btn" for="cb2">Date & Time</label>
                    </li>
                    <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>03</span><br />
                        <label className="selact-btn" for="cb3">seating arrangement</label>
                    </li>
                    <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>04</span><br />
                        <label className="selact-btn" for="cb3">Location</label>
                    </li>
                    <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>05</span><br />
                        <label className="selact-btn" for="cb3">Photos & Videos</label>
                    </li>
                    <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>06</span><br />
                        <label className="selact-btn" for="cb3">Permission</label>
                    </li>
                    <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>07</span><br />
                        <label className="selact-btn" for="cb3">Live Event</label>
                    </li>
                </ul> */}
        </main>
    );
}

export default Event;
