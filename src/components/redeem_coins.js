import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import coins from "../assets/img/coins (1) 1.png";
import reward from "../assets/img/reward 1.png";
import XMLID from "../assets/img/XMLID 1270.png";
import Vector from "../assets/img/Vector.png";

function RedeemCoins() {
    return (
        <div className="continent-wrapper">
            <div className="container">
                <div className="redeemcoin-heading">
                    <h1>Redeem Coin</h1>
                </div>
                <div className="youcoin-banner">
                    <div className="coinimg1">
                        <img src={coins} alt="" />
                    </div>
                    <div className="youcoins-heding">
                        <h2>You have : <span>250 F-Coins</span></h2>
                    </div>
                    <div className="coinimg2">
                        <img src={coins} alt="" />
                    </div>
                </div>
                <div className="coins-details">
                    <div className="coin-processing-icon">
                        <div className="icon-coin-data">
                            <a href=""><img src={reward} alt="" /></a>
                        </div>
                        <div className="coin-details-text">
                            <h6>Coin Redeem</h6>
                            <span>Processing</span>
                        </div>
                    </div>
                    <div className="coins-dateprices">
                        <p>Jan 18, 2021</p>
                        <strong>-325</strong>
                    </div>
                </div>
                <div className="coins-details">
                    <div className="coin-processing-icon">
                        <div className="icon-coin-data icd">
                            <a href=""><img src={XMLID} alt="" /></a>
                        </div>
                        <div className="coin-details-text">
                            <h6>Login Refer</h6>
                            <span>Refer by Mark jecno</span>
                        </div>
                    </div>
                    <div className="coins-dateprices dprc">
                        <p>Jan 18, 2021</p>
                        <strong>+250</strong>
                    </div>
                </div>
                <div className="coins-details">
                    <div className="coin-processing-icon">
                        <div className="icon-coin-data icd2">
                            <a href=""><img src={Vector} alt="" /></a>
                        </div>
                        <div className="coin-details-text">
                            <h6>Coin Send</h6>
                            <span>Refer by Mark jecno</span>
                        </div>
                    </div>
                    <div className="coins-dateprices dprc2">
                        <p>Jan 18, 2021</p>
                        <strong>-14</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RedeemCoins;
