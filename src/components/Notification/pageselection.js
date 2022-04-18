import React, { useEffect, useState } from "react";


import StepperNotification from "./stepper_component";

function NSelectPage() {

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

      let notificationData = localStorage.getItem("notificationData")
     if(notificationData){
      setFormData(JSON.parse(notificationData))
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
                  <div className=" d-t">
                     {['Event List', 'Place List', 'Event Details', "Artist Page", 'Artist Details', 'Decoration Page'].map((item, index) =>
                        <div key={index} onClick={() => { setFormField('selected_page', item); }} className={`radio-btn ${(item === formData.selected_page) ? "active" : ""} `}>
                           <span >
                              <i className="icon-right"></i>
                           </span>
                           <label for="r-2">{item}</label>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>

      </main>

   );
}


export default NSelectPage;
