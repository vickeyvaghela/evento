import React, { useEffect, useState } from "react";
import $ from 'jquery';



import gift1 from "../../assets/img/gift-box 1.png";
import gift2 from "../../assets/img/gift-box 2.png";
import gift3 from "../../assets/img/gift-box 3.png";
import StepperNotification from "./stepper_component";

function NMembership() {

  const [formData, setFormData] = useState({
    date_time:new Date()
  });
  
  const setFormField = (field, value) => {

    setFormData(prevState => {
      localStorage.setItem("notificationData", JSON.stringify({
        ...prevState,
        [field]: value
      }))

      return {
        ...prevState,
        [field]: value
      };
    });

  }

  useEffect(() => {

    let notificationData = JSON.parse(localStorage.getItem("notificationData"))
    if (notificationData) {
      setFormData(notificationData)
    }
  }, [])

  return (
    <main>
      
    <div className="continent-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
            <a   className="back-btnt">
              <i className="icon-Back" aria-hidden="true"></i>
            </a>
            <h2>Create New Notification</h2>
            <div className="e-btn">
              <a   className="new-btn-creat">
                <i className="icon-plus" aria-hidden="true"></i> Add
              </a>
            </div>
          </div>
         <StepperNotification />
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
                    value={formData.date_time}
                    name=""
                    id="d-time"
                    onChange={(e)=>{setFormField("date_time",e.target.value);console.log(e.target.value);}}
                  />
                </label>
              </div>
              <div className="Subscription-main">
                <span>Select Membership</span>
                <div onClick={()=>{setFormField("membershipplan",1)}} style={{border:(formData.membershipplan===1)?"2px solid blue":null}} className="Subscription-holder mt-2">
                  <div className="Subscription-text">
                    <h2>Local Offer Monthly</h2>
                    <span>$49.00</span>
                    <p>4 Event can be posted or one event with max 30 day</p>
                  </div>
                  <div className="Subscription-img">
                    <img src={gift1} className="img-fluid" alt="" />
                  </div>
                </div>
                <div onClick={()=>{setFormField("membershipplan",2)}} style={{border:(formData.membershipplan===2)?"2px solid blue":null}}  className="Subscription-holder mt-4">
                  <div className="Subscription-text">
                    <h2>Event Subscription</h2>
                    <span>$56.00</span>
                    <p>4 Event can be posted or one event with max 30 day</p>
                  </div>
                  <div className="Subscription-img">
                    <img src={gift2} className="img-fluid" alt="" />
                  </div>
                </div>
                <div onClick={()=>{setFormField("membershipplan",3)}} style={{border:(formData.membershipplan===3)?"2px solid blue":null}} className="Subscription-holder mt-4">
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

    </main>

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
