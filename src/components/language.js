import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import USA from "../assets/img/usa.png";
import France from "../assets/img/france.png";
import India from "../assets/img/india.png";
import Germany from "../assets/img/germany.png";
import China from "../assets/img/china.png";
import Thailand from "../assets/img/thailand.png";

function LanguageChange() {
  return (
    <div className="p-main">
    <div className="notification-holder">
        <div className="notif-title">
            <h2>Language</h2>
            <a href="">
                <i className="icon-close"></i>
            </a>
        </div>
        <div className="notification-box">
            <div className="notif-holder">
                <div className="notif-data">
                    <div className="notifiction-i">
                        <img src={USA} alt=""/>
                    </div>
                    <div className="contry-state">
                        <h3>United States - English</h3>
                        <span>Dollar</span>
                    </div>
                </div>
                <div className="radio-btn-icon">
                    <input type="radio" id="United-States" name="state" value="United-States"/>
                </div>
            </div>
            <div className="notif-holder">
                <div className="notif-data">
                    <div className="notifiction-i">
                        <img src={France} alt=""/>
                    </div>
                    <div className="contry-state">
                        <h3>Europe - French</h3>
                        <span>Euro</span>
                    </div>
                </div>
                <div className="radio-btn-icon">
                    <input type="radio" id="Europe-French" name="state" value="Europe-French"/>
                </div>
            </div>
            <div className="notif-holder">
                <div className="notif-data">
                    <div className="notifiction-i">
                        <img src={India} alt=""/>
                    </div>
                    <div className="contry-state">
                        <h3>India - Hindi</h3>
                        <span>Indian Rupee</span>
                    </div>
                </div>
                <div className="radio-btn-icon">
                    <input type="radio" id="India-Hindi" name="state" value="India-Hindi"/>
                </div>
            </div>
            <div className="notif-holder">
                <div className="notif-data">
                    <div className="notifiction-i">
                        <img src={Germany} alt=""/>
                    </div>
                    <div className="contry-state">
                        <h3>Germany - German</h3>
                        <span>German Mark (DEM)</span>
                    </div>
                </div>
                <div className="radio-btn-icon">
                    <input type="radio" id="Germany-German" name="state" value="Germany-German"/>
                </div>
            </div>
            <div className="notif-holder">
                <div className="notif-data">
                    <div className="notifiction-i">
                        <img src={China} alt=""/>
                    </div>
                    <div className="contry-state" >
                        <h3>China - Mandarin</h3>
                        <span>Renminbi</span>
                    </div>
                </div>
                <div className="radio-btn-icon">
                    <input type="radio" id="China-Mandarin" name="state" value="China-Mandarin"/>
                </div>
            </div>
            <div className="notif-holder">
                <div className="notif-data">
                    <div className="notifiction-i">
                        <img src={Thailand} alt=""/>
                    </div>
                    <div className="contry-state">
                        <h3>Thailand - Thai</h3>
                        <span>Thai Baht</span>
                    </div>
                </div>
                <div className="radio-btn-icon">
                    <input type="radio" id="Thailand-Thai" name="state" value="Thailand-Thai"/>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default LanguageChange;
