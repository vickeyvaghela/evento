import React, { useEffect, useState } from "react";


import StepperNotification from "./stepper_component";

function NotificationMode() {

  const [formData, setFormData] = useState({});
  const [activeBox, setActiveBox] = useState(new Set([]))


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

  function checkBoxHandler(value) {

    let tempSet = activeBox;
    if(tempSet.has(value)){
      tempSet.delete(value)
    }else{
      tempSet.add(value)
    }
    setActiveBox(tempSet)
    setFormField("notification_type",Array.from(tempSet))
  }

  useEffect(() => {

    let notificationData = JSON.parse(localStorage.getItem("notificationData"))
    if (notificationData) {
      setFormData(notificationData)
      setActiveBox(new Set(notificationData.notification_type) )
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
              <span>Select Page</span>
            </div>
            <div className="d-t">
              {
                ["SMS", "Notification", "Email"].map((item, index) =>
                  <label key={index} for={`mode-${index + 1}`}>
                    <input checked={activeBox.has(index+1)}  onChange={() => checkBoxHandler(index + 1)} type="checkbox" name="" id={`mode-${index + 1}`} />
                    <span>{item}</span>
                  </label>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>

  );
}

export default NotificationMode;
