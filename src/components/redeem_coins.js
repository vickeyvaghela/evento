import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import coins from "../assets/img/coins (1) 1.png";
import reward from "../assets/img/reward 1.png";
import XMLID from "../assets/img/XMLID 1270.png";
import Vector from "../assets/img/Vector.png";
import { API_URL } from "../constants";
import axios from "axios";

var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0;
var token = `Token ${localStorage.getItem("token")}`;

function RedeemCoins() {

    async function onRedeemHandler() {
        let coins = prompt("Enter Number of coins that you want to redeem", 10);

        if(isNaN(coins) || coins===null){
           return
        }
        
        let upi_id = prompt("Enter UPI ID")

        if (upi_id === null) {
            return
        }

        let body ={
            "user" : userId,
            "Amount" : coins,
            "upi_id" :upi_id ,
            "price": coins*10
        }
		const response = await axios.post(API_URL + "/redeem",body, { headers: { "Content-Type": "application/json", Authorization: token } })
        alert(response.data?.message)
    }

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
                        <button onClick={onRedeemHandler}  className="btn">Redeem Now</button>
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
