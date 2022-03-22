import React, { useState } from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../../constants";

function AddEquipment({ id, set_modalState }) {
	const [equ_name, setEquName] = useState("");
	const [equ_details, setEquDetails] = useState("");
	const [equ_price, setEquPrice] = useState("");
	const [equ_price_period, setEquPricePeriod] = useState("");
	const [equ_price_type, setEquPriceType] = useState(1);
	var token = `Token ${localStorage.getItem("token")}`;
	var userId = localStorage.getItem("userId")
		? localStorage.getItem("userId")
		: 0;

	const handleSubmit = async (e) => {
		e.preventDefault();
		// http://143.244.137.15:8000/ps_add_equipment
		const data = await axios.post(
			`${API_URL}/ps_add_equipment`,
			{
				user: userId,
				equ_name,
				equ_price_type,
				equ_details,
				equ_price,
				equ_price_period,
			},
			{ headers: { "Content-Type": "application/json", Authorization: token } }
		);
		if (data && data.data && data.data.isSuccess) {
			set_modalState(false);
		}
	};
	// 	{
	//     "user" : 1,
	//     "equ_name" : "Bike",
	//     "equ_price" : 800,
	//     "equ_price_period" : 0, // send 0 only here
	//     "equ_price_type" : 1, //if 1 -> per person if 2->per event
	//     "equ_details" : "for safty"
	// }
	return (
		// <div className="w_r_p_holder">
		<div className="w_r_p_holder">
			<div className="write-reivew-popup_holder">
				<div className="w-r-holder ro_hd">
					<h2>Add Equipment</h2>
					<div
						onClick={() => {
							set_modalState(false);
						}}
					>
						<i className="icon-close"></i>
					</div>
				</div>
				<div className="w-r-form-holder">
					<form onSubmit={handleSubmit}>
						<div className="ps-1_1 epos">
							<label for="">Equipment Name</label>
							<input
								type="text"
								id=""
								name=""
								onChange={(e) => {
									setEquName(e.target.value);
								}}
							/>
						</div>
						<div className="ps-1_1 epos">
							<label for="">Price</label>
							<input
								type="text"
								id=""
								name=""
								onChange={(e) => {
									setEquPrice(e.target.value);
								}}
							/>
						</div>
						<div className="ps-1_1 ps-2_2 epos">
							<label for="">Price</label>
							<input
								type="text"
								id=""
								name=""
								onChange={(e) => {
									setEquPricePeriod(e.target.value);
								}}
							/>
							<div className="pp_pe pe-1 equi-holdr">
								<span
									onClick={() => {
										setEquPriceType(1);
									}}
									className={`equipement ${equ_price_type === 1 && "active_equipement"
										}`}
								>
									Per / Person
								</span>
								<span
									onClick={() => {
										setEquPriceType(2);
									}}
									className={`equipement ${equ_price_type === 2 && "active_equipement"
										}`}
								>
									Per / Event
								</span>
							</div>
						</div>
						<div className="ps-1_1 epos">
							<label for="">Details</label>
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								onChange={(e) => {
									setEquDetails(e.target.value);
								}}
							></textarea>
						</div>
						<button>Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AddEquipment;
