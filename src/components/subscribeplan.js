import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import gift1 from "../assets/img/gift-box 1.png"
import gift2 from "../assets/img/gift-box 2.png"
import gift3 from "../assets/img/gift-box 3.png"

function SubPlans() {
    return (
        <div className="continent-wrapper ">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                        <a href="" className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></a>
                        <h2>My Subscription</h2>
                    </div>
                    <div className="Subscription-main">
                        <div className="Subscription-holder">
                            <div className="Subscription-text">
                                <h2>Local Offer Monthly</h2>
                                <span>$49.00</span>
                                <p>4 Event can be posted or one event with max 30 day</p>
                            </div>
                            <div className="Subscription-img">
                                <img src={gift1} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="Subscription-holder mt-4">
                            <div className="Subscription-text">
                                <h2>Event Subscription</h2>
                                <span>$56.00</span>
                                <p>4 Event can be posted or one event with max 30 day</p>
                            </div>
                            <div className="Subscription-img">
                                <img src={gift2} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="Subscription-holder mt-4">
                            <div className="Subscription-text">
                                <h2>Live Stream Subscription</h2>
                                <span>$120.00</span>
                                <p>4 Event can be posted or one event with max 30 day</p>
                            </div>
                            <div className="Subscription-img">
                                <img src={gift3} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}



export default SubPlans;
