import React from "react";

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

    async function getOrderId(planId, price) {
        let body = {
            planid: planId,
            total_price: price
        }

        const response = await axios.post(API_URL+"/getorderid" , {}, { headers: { "Content-Type": "application/json", Authorization: token } })
        console.log(response);
        if (response.data?.id) {
            // ! hardcoded order id will be replaced by response
            handlePayment(response.data.id,response.data.amount)
        }
    }
    const handlePayment = async (orderId,price) => {
        let userprefilldata;
        const response = await axios.get(API_URL + "/user", { headers: { "Content-Type": "application/json", Authorization: token } })
        console.log(response);
        if (!response.data) {
            alert("Unable to fetch user's data")
            return
        }else{
            userprefilldata = response.data.data[0]
        }

        const options = {
            key: "rzp_test_ONkjQqwBphi9zw", // Enter the Key ID generated from the Dashboard
            amount: price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Kartik Jetani",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Scalelot Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response){
            console.log("failed");
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    };

    return (
        <div className="continent-wrapper ">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                        <a href="" className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></a>
                        <h2>My Subscription</h2>
                    </div>
                    <div className="Subscription-main">
                        <div onClick={() => getOrderId(1, 3626)} className="Subscription-holder">
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
                        <div onClick={() => getOrderId(2, 4144)} className="Subscription-holder mt-4">
                            <div className="Subscription-text">
                                <h2>Event Subscription</h2>
                                <span>$56.00</span>
                                <p>4 Event can be posted or one event with max 30 day</p>
                            </div>
                            <div className="Subscription-img">
                                <img src={gift2} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div onClick={() => getOrderId(3, 8880)} className="Subscription-holder mt-4">
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
