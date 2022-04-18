import React, { useEffect, useState } from "react";

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

    const [transactionDetails, setTransactionDetails] = useState()

    async function fetchTransaction() {
        const response = await axios.get(`${API_URL}/transaction`, {
            headers: { "Content-Type": "application/json", Authorization: token },
          });
          if (response.data.data) {
              
              setTransactionDetails(response.data.data)
          }
          console.log('rsponse',response.data.data);
    }

    useEffect(() => {
     fetchTransaction()
    }, [])
    

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
            "price": coins/10
        }
		const response = await axios.post(API_URL + "/redeem",body, { headers: { "Content-Type": "application/json", Authorization: token } })
        alert(response.data?.message)
    }

    return (
        <main>
            
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

                    {
                    transactionDetails?.map((item,index)=>{
                        let icon;
                        if (item.translation_type == "Login Refer") {
                            icon = XMLID
                        } else if (item.translation_type == "Coin Redeem")  {
                            icon = reward
                        }else{
                            icon = Vector
                        }
                    return <div className="coins-details">
                    <div className="coin-processing-icon">
                        <div className="icon-coin-data icd">
                            <a  ><img src={icon} alt="" /></a>
                        </div>
                        <div className="coin-details-text">
                            <h6>{item.translation_type}</h6>
                            <span>{item.details}</span>
                        </div>
                    </div>
                    <div className={`coins-dateprices ${item.translation_type == "Login Refer" ? "dprc":""}`}>
                        <p>{new Date(item.date).toDateString()}</p>
                        <strong>{item.translation_type == "Login Refer" ?"+":"-"} {item.Amount}</strong>
                    </div>
                </div>}
                    )
                }
                 
            </div>
        </div>
        </main>

    );
}

export default RedeemCoins;
