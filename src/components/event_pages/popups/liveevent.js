import React from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import { Link } from "react-router-dom";

import event_pic from "../../../assets/img/Events-pana 1.png"

function LiveEventPopup() {
  return (
    <div class="live-evant-wrapper w_r_p_holder">
    <div class="event-popup">
        <div class="heading-text">
            <h2>Live This Event?</h2>
            <Link to="/terms&condition"><i class="icon-close"></i></Link> 
        </div> 
        <div class="popup-img">
            <img src={event_pic} class="img-fluid" alt=""/>
        </div>  
        <div class="pop-btn">
            <div class="two-btn no-btn">
            <Link to="/terms&condition"><button>No</button></Link>
            </div>
            <div class="two-btn">
            <Link to="/event"><button>Yes</button></Link>
            </div>
        </div>    
    </div>  
</div>
  );
}

export default LiveEventPopup;
