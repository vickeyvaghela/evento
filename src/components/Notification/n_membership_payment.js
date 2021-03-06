import React from "react";
import $ from 'jquery';

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

import gift1 from "../../assets/img/gift-box 1.png";
import gift2 from "../../assets/img/gift-box 2.png";
import gift3 from "../../assets/img/gift-box 3.png";

function NMembership() {
  return (
    <div className="continent-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
            <a href="" className="back-btnt">
              <i className="icon-Back" aria-hidden="true"></i>
            </a>
            <h2>Create New Notification</h2>
            <div className="e-btn">
              <a href="" className="new-btn-creat">
                <i className="icon-plus" aria-hidden="true"></i> Add event
              </a>
            </div>
          </div>
          <div className="process-wrapper">
            <ul className="Create-Notification">
              <li className="process-stap">
                <input type="checkbox" id="cb1" hidden className="cb-btn" />
                <span>01</span>
                <br />
                <label className="selact-btn" for="cb1">
                  Select Page
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb2" hidden className="cb-btn" />
                <span>02</span>
                <br />
                <label className="selact-btn" for="cb2">
                  Select Business
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>03</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Select User
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>04</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Notification Mode
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>05</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Membership & Payment
                </label>
              </li>
            </ul>
          </div>
          <div className="r-btn-group">
            <div className="cns-titel">
              <span>Membership & Payment</span>
            </div>
            <div className="event-wrapper ">
              <div className="Date-and-time">
                <span>Date and time on Notification</span>
                <label for="d-time">
                  <i className=""></i>
                  <input
                    type="datetime-local"
                    value="25 July, 2021 on 12:45 AM"
                    name=""
                    id="d-time"
                  />
                </label>
              </div>
              <div className="Subscription-main">
                <span>Select Membership</span>
                <div className="Subscription-holder mt-2">
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
      </div>
    </div>
  );
}


// $(function() {
//     $('.radio-btn').click(function(j) {
     
      
//       if ($(this).hasclass('active')) {
//         $(this).removeclass('active');
//         }     
//       else {
//           $('.radio-btn').removeclass('active');
//         $(this).addclass('active');
//       }
      
//     });
//     // var dateControl = document.querySelector('input[type="datetime-local"]');
//     // dateControl.value = '2021-07-25T12:45';
//   });


export default NMembership;
