import React, { useEffect, useState } from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import coins1 from "../assets/img/coins (1) 1.png";
import surprice from "../assets/img/surprise 1.png";
import whatsapp from "../assets/img/whatsapp.png";
import Facebook from "../assets/img/fb.png";
import telegram from "../assets/img/telegram.png";
import twitter from "../assets/img/twitter.png";
import messeng from "../assets/img/messeng.png";
import axios from "axios";
import { API_URL } from "../constants";

var token = `Token ${localStorage.getItem("token")}`;

function ReferAndEarn() {

    const [referCode, setReferCode] = useState("")

    async function fetchReferCode() {
        const response = await axios.get(API_URL + "/user", { headers: { "Content-Type": "application/json", Authorization: token } })
        // console.log('response.data.users_ref_code',response.data.data[0].users_ref_code);
        if (response.data.data[0].users_ref_code) setReferCode(response.data.data[0].users_ref_code)

    }

    useEffect(() => {
        fetchReferCode()
    }, [])


    const message = `
{username} name has invite you to download Evento Package App 

 Download Even to Package App: 
 http://localhost:3000/
 -------------------------------------
 Referal Code: {ReferalCode}
 -------------------------------------
 You will get 100 coins bonus in your account when after successfully registration with the app.`

    return (
        <main>
            
        <div className="continent-wrapper">
            <div className="container">
                <div className="refer-heading">
                    <h1>Refer To Earn</h1>
                </div>
                <div className="refer-code-container">
                    <div className="refertoeran-holder">
                        <div className="total-coin-banner">
                            <div className="coins1">
                                <img src={coins1} alt="" />
                            </div>
                            <div className="total-coins-heding">
                                <h2>Total Rewards Earned : <span>250 F-Coins</span></h2>
                            </div>
                            <div className="coins2">
                                <img src={coins1} alt="" />
                            </div>
                        </div>
                        <div className="gift-img">
                            <img src={surprice} alt="" />
                        </div>
                        <div className="refer-text">
                            <h2>Refer to your Friends and Earn</h2>
                            <h3>Refer and Get 10 Coin</h3>
                            <p>Refer a friend and get an additional 10 coins and your friend gets additional 10 point. So Refer away</p>
                        </div>
                        <div className="refer-end">
                            <div className="share-refer">
                                <div className="share-heding">
                                    <p>Share your refer code via</p>
                                </div>
                                <div className="social-icon">
                                    <div className="social-media-icon">
                                        <ul>
                                            <li>
                                                <a href="">
                                                    <img src={whatsapp} className="img-fluid" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com&caption=message"`} target="_blank" rel="noopener">

                                                    <img src={Facebook} className="img-fluid" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://wa.me/?text=${message}`} target="_blank">
                                                    <img src={telegram} className="img-fluid" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://twitter.com/intent/tweet?text=${message}`} target="_blank">
                                                    <img src={twitter} className="img-fluid" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`https://telegram.me/tarmanau`} target="_blank">
                                                    <img src={messeng} className="img-fluid" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="share-btn">
                                        <button><i className="icon-share"></i>OTHER</button>
                                    </div>
                                </div>
                            </div>
                         {(referCode) ?  <div className="refer-coad">
                                <div className="code-number">
                                    <p>Referral Code</p>
                                    <h1  >{referCode}</h1>
                                </div>
                                <div className="code-copy">
                                    <a href="" onClick={() => {
                                        navigator.clipboard.writeText(referCode)
                                        alert("Code copied: "+ referCode)
                                    }} >Copy Code</a>
                                </div>
                            </div>:<p>Code not available. Try after some time.</p>}
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </main>

    );
}

export default ReferAndEarn;
