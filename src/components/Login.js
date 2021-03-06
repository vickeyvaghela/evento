import React, { useState } from 'react';

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import logo from "../assets/img/logo.jpg";
import googlelogo from "../assets/img/google.png";
import facebooklogo from "../assets/img/facebook.png";
import { Link } from "react-router-dom";


import { API_URL } from "../constants"

const axios = require('axios');


function Login() {

	console.log('API_URL',API_URL);

	const [ userData, setUserData ] = useState({ emailOrPhone: "", password: "" });
	const [ errMsg, setErrMsg ] = useState("");


	const setFormField = (field, value) => {
		setUserData({ ...userData, [field]:value })
	}


	const handleSubmit = async () => {
		console.log("handle form submit");
		console.log('userData',userData);

		// const response = await axios.post('http://143.244.137.15:8000/login', { username: "kishup713@gmail.com", password: "A" });
		const response = await axios.post('http://143.244.137.15:8000/login', { username: userData.emailOrPhone, password: userData.password });
		console.log('response',response);
		if(response && response.data && response.data.data && response.data.data.token){

			localStorage.clear();

			localStorage.setItem("token", response.data.data.token);

			if(response && response.data && response.data.data && response.data.data.userId){
				localStorage.setItem("userId", response.data.data.userId);
			}

			window.location.href = "/";

			//alert('login success')
		}else{
			//alert('login error')
			setErrMsg("Username or Password incorrect");

		}

		
	}

	return (
		<div className="main">
			<div className="login-page">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="form-holder">
					<div className="form-main">
						<div className="form-title">
							<h1>Welcome Back!</h1>
							<p>Log in with your data that you entered during your registration</p>
						</div>
						<div className="form">
							{ errMsg && <span style={{color: "red"}}>Username or Password incorrect</span> }
							<form action="" method="post" >
								<div className="ps-1">
									<label for="">Email or Phone number</label>
									<input type="text" id="" name="" value={userData.emailOrPhone} onChange={(e) => { setFormField('emailOrPhone', e.target.value) }}/>
								</div>
								<div className="ps-1">
									<label for="">Password</label>
									<input type="password" id="" name="" value={userData.password} onChange={(e) => { setFormField('password', e.target.value) }} />
								</div>

								<Link to="/forgatepassword"> Forget Password?</Link>
								<button type="button" onClick={handleSubmit}>LOGIN NOW</button>
							</form>
						</div>
						<div className="btn-hr">
							<p>or</p>
						</div>
						<div className="social-holder">
							<a href="https://www.google.com/" className="social-btn btn1">
								<img src={googlelogo} alt="goooglelogo" />
								<p>Google</p>
							</a>
							<a href="https://www.google.com/" className="social-btn btn2">
								<img src={facebooklogo} alt="facebooklogo" />
								<p>Facebook</p>
							</a>
						</div>
						<div className="botm-t">
							<p>
								Are You new? <Link to="/register">Registrater Now</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
