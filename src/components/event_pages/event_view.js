
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../../constants";

import $ from 'jquery'

import poster from "../../assets/img/e-poster.png"
import { useHistory } from "react-router-dom";


const token = `Token ${localStorage.getItem("token")}`;

const axios = require("axios");


function EventView() {

    const { eventID } = useParams();
    const [allEventData, set_allEventData] = useState({});
    const history = useHistory()

    useEffect(() => {
        (async () => {
            
            
            /* #region  get event data */
            let tmpEventObj = {}
            try {
                const response = await axios.get(`${API_URL}/events/${eventID}`, { headers: { "Content-Type": "application/json", Authorization: token } });
                console.log('response',response);
                if (response && response.data && response.data.data && response.data.data && response.data.data.length && response.data.data[0]) {
                    tmpEventObj.display_name = response.data.data[0].display_name || "";
                    tmpEventObj.category = response.data.data[0].category || "";

                    tmpEventObj.video = response.data.data[0].video || [];
                    tmpEventObj.image = response.data.data[0].image || [];
                    tmpEventObj.EventTickets = response.data.data[0].EventTickets || [];
                    
                    tmpEventObj.live = response.data.data[0].live || false;

                    tmpEventObj.parking_capacity = response.data.data[0].event?.[0]?.parking_capacity ?? "";
                    tmpEventObj.person_capacity = response.data.data[0].event?.[0]?.person_capacity ?? "";

                    tmpEventObj.for_who = response.data.data[0].event?.[0]?.for_who ?? "";
                    tmpEventObj.service = response.data.data[0].event?.[0]?.service ?? [];

                    tmpEventObj.place_description = response.data.data[0].event?.[0]?.place_description ?? "";
                    tmpEventObj.place_name = response.data.data[0].event?.[0]?.place_name ?? "";
                    tmpEventObj.address = response.data.data[0].event?.[0]?.address ?? "";

                }
            } catch (errCallingEventDataApi) {
                console.log("errCallingEventDataApi", errCallingEventDataApi);
            }
            /* #endregion  */



            set_allEventData(tmpEventObj)



        })();
    }, [eventID]);

    function eventPreviewHandler() {

        // imageData which will send to /event/EventPreview page
        history.push("/event/EventPreview",{
            imageData:allEventData.image
        })
    }

    return (
        <main>
  
        <div className="continent-wrapper">
            <div className="event-overview-bg">
                <img src={poster} className="img-fluid" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="mini-main">
                        <div className="mini-header">
                            <div className="heading">
                                <div className="review-star-holder">
                                    <a  ><i className="icon-Star"></i></a>
                                    <a  ><i className="icon-Star"></i></a>
                                    <a  ><i className="icon-Star"></i></a>
                                    <a  ><i className="icon-silver-Star"></i></a>
                                    <a  ><i className="icon-silver-Star"></i></a>
                                </div>
                                <h2>{allEventData.display_name}</h2>
                            </div>
                            <div className="option">
                                <div className="a_C_I_S">
                                    <button className="avbtn">{`${allEventData.live ? 'Avaliable' : 'Not-Avaliable'}`}</button>
                                    <button>{allEventData.category}</button>
                                    <a   className="circle"><i className="icon-share"></i></a>
                                </div>
                                <div className="rdl">
                                    <a  >{allEventData.for_who}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-option">
                        <li data-tab="tab-1" className="current">Overview</li>
                        <li data-tab="tab-2">Attendee</li>
                    </div>
                    <div className="deshbord-overview-main current" id="tab-1">
                        <div className="Overview">
                            <div className="left-detail">
                                <div className="description">
                                    <h6>{allEventData.place_name}</h6>
                                    <p>{allEventData.place_description}</p>
                                </div>

                                <div className="gallery">
                                    <h6>Photos</h6>
                                    <div onClick={eventPreviewHandler} style={{cursor:"pointer"}}  className="img">

                                        {(allEventData.image && allEventData.image.length) && allEventData.image.map((imageObj, i) => (

                                            <div className="photo" key={imageObj.id}><img src={`${"http://eventopackage.com"}${imageObj.image}`} className="img-fluid" alt={imageObj.image_details || ""} /></div>
                                        ))}

                                        {/* <div className="photo"><img src={food2} className="img-fluid" alt="img"/></div> */}
                                    </div>
                                </div>

                                <div className="ph-main v_i_p">
                                    <span>Video</span>
                                    <div className="img-holder">

                                        {allEventData.video && allEventData.video.length && allEventData.video.map((videoObj) => {
                                            let videoType = videoObj.video ? videoObj.video.split('.').pop() : "mp4";
                                            return (
                                                <div className="video-main fd-vdo" key={videoObj.id}>
                                                    <div className="vedio-item food-videogl">
                                                        <div className="o-video">
                                                            <video controls height="100%" width="100%">
                                                                <source src={`${API_URL}${videoObj.video}`} type={`video/${videoType}`} />
                                                                Sorry, your browser doesn't support embedded videos.
                                                            </video>
                                                        </div>

                                                    </div>
                                                </div>
                                            )
                                        })}


                                        {/* <div className="video-main fd-vdo">
                                    <div className="vedio-item food-videogl">
                                        <div className="o-video">
                                            <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe>
                                        </div>
                                    </div>                                      
                                </div> */}

                                    </div>
                                </div>

                                <div className="p_O_F-holder">
                                    <h6>Price of Location</h6>

                                    {allEventData.service && allEventData.service.length && allEventData.service.map((serviceObj,i) => (
                                        <div key={i} className="pof-box"><h3>{serviceObj.service_name}</h3><p>{serviceObj.service_price}/{`${parseInt(serviceObj.service_price_type ? serviceObj.service_price_type : 0) === 1 ? "PP" : "PE"}`}</p></div>
                                    ))}

                                </div>

                                <div className="p_P-holder">
                                    <h6>Person & Parking</h6>
                                    <div className="p_P-box">
                                        <div className="p_P-holder-box">
                                            <h3>No of person</h3>
                                            <span>{allEventData.person_capacity}</span>
                                        </div>
                                        <div className="p_P-holder-box">
                                            <h3>Parking Capacity</h3>
                                            <span>{allEventData.parking_capacity}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-detail data">
                                <div className="map-card-holder">
                                    <div className="responsive-map">
                                        <div className="imap-holder">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" frameborder="0" allowfullscreen></iframe>
                                            <div className="mp-icon-holder">
                                                <a   className="absolute"><img src="./img/oa-map.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location-holder">
                                        <h4><i className="icon-location1"></i>Location</h4>
                                        <p>{allEventData.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="deshbord-overview-main" id="tab-2">
                        <div className="Overview">
                            <div className="left-detail">

                                
                                {allEventData.EventTickets && allEventData.EventTickets.map((ticketObj, i) => (
                                    <div className="ticket-price" key={i}>
                                        <div className="text-attendee">
                                                <h2>{ticketObj.name} <span>#{ticketObj.ticket_no}</span></h2>
                                                {/* <p>July 13, 2021</p> */}
                                                <p>{new Date(ticketObj.date).toISOString().slice(0, 10)}</p>
                                            </div>
                                            <div className="text-attendee-2">
                                                <h3>${ticketObj.amount}</h3>
                                                <p>15 Ticket</p>
                                            </div>
                                    </div>
                                ))}


                                {/* <div className="ticket-price">
                                    <div className="text-attendee">
                                        <h2>Reynaldo Franklin <span>#55841251</span></h2>
                                        <p>July 13, 2021</p>
                                    </div>
                                    <div className="text-attendee-2">
                                        <h3>$560.00</h3>
                                        <p>15 Ticket</p>
                                    </div>
                                </div> */}
                                
                            </div>
                            <div className="right-detail data">
                                <div className="map-card-holder">
                                    <div className="responsive-map">
                                        <div className="imap-holder">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" allowfullscreen></iframe>
                                            <div className="mp-icon-holder">
                                                <a   className="absolute"><img src="./img/oa-map.png" alt="" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="location-holder">
                                        <h4><i className="icon-location1"></i>Location</h4>
                                        <p>309 Ridgeview St. Carleton Place, ON K7C 3Y6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                  
        </main>
    );
}
$(document).ready(function () {

    $('.menu-option li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.menu-option li').removeClass('current');
        $('.deshbord-overview-main').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})


export default EventView;
