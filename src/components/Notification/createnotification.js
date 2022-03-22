import React from "react";



import notif from "../../assets/img/notification.png"
import { Link } from "react-router-dom";

function CreateNotification() {
  return (
      <main>
          
    <div className="continent-wrapper">
    <div className="container">
        <div className="persk-holder">
            <h2>Notification</h2>
        </div>
        <div className="persk_form_holder">
            <div className="Create-an-notification">
                <img src={notif} alt=""/>
                <div className="notif-text">
                     <span>Create an notification as you want!</span>
                     <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <Link to="/notification/NSelectPage"><button>Create new</button></Link>
            </div>
        </div>
    </div>         
</div>  
</main>

  );
}



export default CreateNotification;
