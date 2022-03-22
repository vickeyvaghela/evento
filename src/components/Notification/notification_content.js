import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../constants';
import StepperNotification from './stepper_component'

var token = `Token ${localStorage.getItem("token")}`;
var userId = localStorage.getItem("userId");


function NotificationContent() {

    const [formData, setFormData] = useState({
        notification_title: "",
        notification_text: ""
    });
    const [img, setImg] = useState()

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

    async function handleSubmit(e) {
        e.preventDefault()
        let form_data = new FormData();

        for ( let key in formData ) {   
            // console.log(key,formData[key]);
            if(key === "notification_img")form_data.append("notification_img",img,"images.png")
            else form_data.append(key, formData[key]);
        }
        form_data.append("organizer",userId);

        const response = await axios.post(API_URL+"/notification", form_data, { headers: { "Content-Type": "multipart/form-data", Authorization: token } })
        console.log(response);
        if (response.data.isSuccess) {
            alert(response.data.message)
        }
        console.log(formData);
       
    }

    useEffect(() => {

        if (!userId || !localStorage.getItem("token")) {
            alert("Error! Login again")
        } 

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
                    <StepperNotification />
                    <div className="r-btn-group">
                        <div className="cns-titel">
                            <span>Notification Details</span>
                        </div>
                        <div className="event-wrapper ">
                            <form action="" method="POST">
                                <div className='pd-1'>
                                    <div className="so-holdr">
                                        <label for="">Title of notification</label>
                                        <input onChange={(e) => setFormField("notification_title", e.target.value)}
                                            value={formData.notification_title}
                                            type="text" id="" name="" />
                                    </div>
                                    <div className="so-holdr">
                                        <label for="">Notification Description</label>
                                        <input onChange={(e) => setFormField("notification_text", e.target.value)}
                                            value={formData.notification_text}
                                            type="text" id="" name="" />
                                    </div>
                                </div>
                                <div className="input-holder-p epos">
                                    <label for="">Select Photo</label>
                                    <div className="p-v-main img-pi">
                                        <div className="poster-m">
                                            <div className="images-selctor ">
                                                <input
                                                    onChange={(e) => { setFormField("notification_img", URL.createObjectURL(e.target.files[0])); setImg(e.target.files[0]) }}
                                                    type="file"
                                                    className="file-input"
                                                    name=""
                                                    accept="image/*"
                                                />
                                            </div>
                                            <div className="photo-box p ">
                                                {/* <div className="images-selctor "> */}
                                                <img src={formData.notification_img} className="img-fluid" alt="" />
                                                <button onClick={(e) => { e.preventDefault(); setFormField("notification_img", null) }} className='close-img'>x</button>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='notif-btn'>
                                     <button onClick={handleSubmit}>Submit</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </main>

    )
}

export default NotificationContent