import React, { useState,useEffect } from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import gift1 from "../assets/img/gift-box 1.png"
import gift2 from "../assets/img/gift-box 2.png"
import gift3 from "../assets/img/gift-box 3.png"
import useRazorpay from "react-razorpay";
import axios from "axios";
import { API_URL } from "../constants";


var token = `Token ${localStorage.getItem("token")}`;

function SubPlans() {
    const Razorpay = useRazorpay();

    async function getOrderId(plan_id, price) {

        if (window.confirm("Are you sure? you want to purchase plan?") == false) {
            return
        }
        let body = {
            "total_amount": price,
            "currency": "INR"
        }
        
        const response = await axios.post(API_URL + "/orderidgenerate", body, { headers: { "Content-Type": "application/json", Authorization: token } })
        // console.log(response);
        if (response.data.data?.id) {
            // ! hardcoded order id will be replaced by response
            handlePayment(response.data.data.id, response.data.data.amount,plan_id)
        }
    }
    const handlePayment = async (orderId, price,plan_id) => {
        let userprefilldata;
        const response = await axios.get(API_URL + "/user", { headers: { "Content-Type": "application/json", Authorization: token } })
        if (!response.data) {
            alert("Unable to fetch user's data")
            return
        } else {
            userprefilldata = response.data.data[0]
        }
        // console.log(userprefilldata);

        const options = {
            key: process.env.REACT_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Festum Evento",
            description: "Purchase Membership Plan",
            image: "https://i.ibb.co/tmsJ0v5/logo.jpg",
            order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler:function (response){ 
                paymentSuccessHandler(response, price,plan_id)
            },
            prefill: {
                name: userprefilldata.name,
                email: userprefilldata.email,
                contact: "+91" + userprefilldata.phone_no,
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
            console.log("failed");
            alert(response.error.description);
        });
        rzp1.open();
    };

    async function paymentSuccessHandler(successResponse, price,plan_id) {
        let body = {
            "planid": plan_id,
            "total_price": price / 100,
            "order_id": successResponse.razorpay_order_id
        }
        try {
            const response = await axios.post(API_URL + "/usermembership", body, { headers: { "Content-Type": "application/json", Authorization: token } })
            console.log('response',response);
            alert(response.data.message)
        } catch (error) {
            alert("error while storing data to database..")
        }
    }

    return (
        <main>
            
        <div className="continent-wrapper ">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                        <a href="" className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></a>
                        <h2>My Subscription</h2>
                    </div>
                    <div className="Subscription-main">
                        <div onClick={() => getOrderId(1, 362600)} className="Subscription-holder">
                            <div className="Subscription-text">
                                <h2>Local Offer Monthly</h2>
                                <span>$49.00</span>
                                <p>4 Event can be posted or one event with max 30 day</p>
                                {/* <button id="rzp-button1">Pay</button> */}
                            </div>
                            <div className="Subscription-img">
                                <img src={gift1} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div onClick={() => getOrderId(2, 414400)} className="Subscription-holder mt-4">
                            <div className="Subscription-text">
                                <h2>Event Subscription</h2>
                                <span>$56.00</span>
                                <p>4 Event can be posted or one event with max 30 day</p>
                            </div>
                            <div className="Subscription-img">
                                <img src={gift2} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div onClick={() => getOrderId(3, 888000)} className="Subscription-holder mt-4">
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

        </main>

    );
}



export default SubPlans;
