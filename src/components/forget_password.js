import React,{useState} from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";



import logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import axios from "axios";
import { useHistory } from "react-router-dom";
let token = `Token ${localStorage.getItem("token")}`;

function ForgatePassword() {

    const [email, setEmail] = useState("")

    const history = useHistory()

   async function onSubmitHandler(e){
       e.preventDefault();
       
       console.log(email);
        try {
          
            const response = await axios.post(`${API_URL}/email_otp`,{email:email}, { headers: { "Content-Type": "application/json", Authorization: token } });

            if (response && response.data.data.otp) {
                history.push("/otp",{
                    email:email,
                    otp:response.data.data.otp
                })
            }
        } catch (errCallingApi) {
            alert("Error while sending OTP to mail.")
            console.log("errCallingApi", errCallingApi);
        }
    }

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
                            <form action="" onSubmit={onSubmitHandler} >
                                <div className="ps-1">
                                    <label for="">Enter Your Email</label>
                                    <input onChange={(e)=>setEmail(e.target.value)} type="text" id="" name=""  className="input" />
                                </div>
                               <button type="submit" className="form-btn1 bt-2">SEND VERIFICATION CODE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgatePassword
