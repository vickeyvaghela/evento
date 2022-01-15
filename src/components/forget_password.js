import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";



import logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";

function ForgatePassword() {
    return (
        <div className="main">
            <div className="login-page">
                <div className="logo height">
                    <img src={logo} alt="logo" />
                </div>
                <div className="form-holder">
                    <div className="form-main">
                        <div className="form-title">
                            <h1>Forget Your Password?</h1>
                            <p>Please enter your email address to Recive a Varification Code.</p>
                        </div>
                        <div className="form f-2">
                            <form action="" method="post">
                                <div className="ps-1">
                                    <label for="">Enter Your Email</label>
                                    <input type="text" id="" name="" value="" className="input" />
                                </div>
                                <Link to="/otp"><button className="form-btn1 bt-2">SEND VERIFICATION CODE</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgatePassword
