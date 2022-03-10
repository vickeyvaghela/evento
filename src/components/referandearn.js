import React from "react";

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

function ReferAndEarn() {

    const message = `
{username} name has invite you to download Evento Package App 

 Download Even to Package App: 
 http://localhost:3000/
 -------------------------------------
 Referal Code: {ReferalCode}
 -------------------------------------
 You will get 100 coins bonus in your account when after successfully registration with the app.`

    return (
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
                                            <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fparse.com&caption=message"` }target="_blank" rel="noopener">

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
                            <div className="refer-coad">
                                <div className="code-number">
                                    <p>Referral Code</p>
                                    <h1>Z128HN</h1>
                                </div>
                                <div className="code-copy">
                                    <a href="">Copy Code</a>
                                </div>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReferAndEarn;
