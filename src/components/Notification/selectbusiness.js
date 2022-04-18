import React, { useEffect, useState } from "react";



import park from "../../assets/img/park-bro.png";
import personalskill from "../../assets/img/prosnal skill bussiness.png";
import partnercompany from "../../assets/img/pranter company business.png";
import StepperNotification from "./stepper_component";

function SelectBusiness() {

  let activeStyle = { borderColor: "#20C0E8", borderWidth: 2, borderStyle: "solid" }
  const [activeBox, setActiveBox] = useState()


  const [formData, setFormData] = useState({});

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
    if(notificationData){
     setFormData(notificationData)
     setActiveBox(notificationData.selected_business)
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
              <span>Select Business</span>
            </div>
            <div className="wiyb-box">
              <div className="wiyb-holder " onClick={() => {setActiveBox(1);setFormField('selected_business', 1); }} style={(activeBox == 1) ? activeStyle : {}}  >
                <img src={park} alt="" />
                <div className="wiyb-text-holder">
                  <span>Hve you Places?</span>
                </div>
              </div>
              <div className="wiyb-holder" onClick={() => {setActiveBox(2);setFormField('selected_business', 2); }} style={(activeBox == 2) ? activeStyle : {}} >
                <img src={personalskill} alt="" />
                <div className="wiyb-text-holder">
                  <span>Personal skills business</span>
                </div>
              </div>
              <div className="wiyb-holder"onClick={() => {setActiveBox(3);setFormField('selected_business', 3); }} style={(activeBox == 3) ? activeStyle : {}} >
                <img src={partnercompany} alt="" />
                <div className="wiyb-text-holder">
                  <span>Partner Company Business</span>
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

export default SelectBusiness;
