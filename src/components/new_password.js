import React from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";

import logo from "../assets/img/logo.jpg"
import { Link } from "react-router-dom";

function NewPassword() {
	return (
		<div class="main">
			<div class="login-page">
				<div class="logo height">
					<img src={logo} alt="logo" />
				</div>
				<div class="form-holder">
					<div class="form-main">
						<div class="form-title">
							<h1>Enter new Password</h1>
							<p>Please enter a new password</p>
						</div>
						<div class="form f1">
							<form action="" method="post">
								<div class="new-ps-holder">
									<div class="sm-1 new-ps-1">
										<label for="">Password</label>
										<div class="c-pass">
											<input type="password" id="" name="" value="" />
											<i class="icon-view"></i>
										</div>
									</div>
									<div class="sm-1 new-ps-1">
										<label for="">Confirm Password</label>
										<div class="c-pass">
											<input type="password" id="" name="" value="" />
											<i class="icon-view"></i>
										</div>
									</div>
								</div>

								<Link to="/"><button class="form-btn1">SUBMIT A NEW PASSWORD</button></Link>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewPassword
