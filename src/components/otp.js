import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";

function Otp() {
  return (
    <div className="main">
        <div className="login-page">
            <div className="logo height"> 
                <img src={logo} alt="logo"/>
            </div>
            <div className="form-holder">
                <div className="form-main">
                    <div className="form-title">
                        <h1>Enter OTP</h1>
                        <p>Please enter the 4 Digit code sent to</p>                                
                    </div>
                    <div className="name-change">
                        <p>yourname@company.com</p>
                        <Link to="/forgatepassword">Change?</Link>
                    </div>
                    <div className="form">
                        <form action="" method="post">
                            <label for="" className="otp-titel">Enter OTP</label>
                            <div className="otp-holder">                                
                                <div className="otp-nub">
                                    <input type="text" placeholder="0"  className="otp-input"/>
                                </div>
                                <div className="otp-nub">
                                    <input type="text" placeholder="0"  className="otp-input"/>
                                </div>
                                <div className="otp-nub">
                                    <input type="text" placeholder="0"  className="otp-input"/>
                                </div>
                                <div className="otp-nub">
                                    <input type="text" placeholder="0"  className="otp-input"/>
                                </div>
                            </div>
                        <Link to="/newpassword"><button className="form-btn1">VERIFICATION CODE</button></Link>
                        </form>                                                   
                    </div>
                    <div className="botm-t">
                        <p>Now Get? <a href="javascript-void(0)">Re-Send</a></p>
                    </div>                           
                </div>                    
            </div>      
        </div>           
    </div>
  );
}

export default Otp
