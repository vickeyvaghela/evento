import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import gift1 from "../assets/img/gift-box 1.png"
import gift2 from "../assets/img/gift-box 2.png"
import gift3 from "../assets/img/gift-box 3.png"
import useRazorpay from "react-razorpay";

function SubPlans() {
    const Razorpay = useRazorpay();

    const handlePayment = async (params) => {
        // const order = await createOrder(params); //  Create order on your backend

        const options = {
            key: "rzp_test_cNs9MM00wF4ceS", // Enter the Key ID generated from the Dashboard
            amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
            handler: function (response) {
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature);
            },
            prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new Razorpay(options);

        rzp1.on("payment.failed", function (response) {
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
                        <div onClick={handlePayment} className="Subscription-holder">
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
