import React, { useState } from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import axios from "axios";
import { API_URL } from "../../../constants";
import { Link, useHistory } from "react-router-dom";

// {
//     "pc" : "1",
//     "decor_type" : "stage",
//     "decor_price" : "5000"
// }

function PcAddDecor() {

    const [formData, setFormData] = useState({
        "pc": 1,
        "decor_type": null,
        "decor_price": null,
    })
    const history = useHistory()

    const setFormField = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    async function onSubmitHandler(e) {
        e.preventDefault()

        try {
            const response = await axios.post(`${API_URL}/pc_decors`, formData);
            console.log('response', response);
            if (response && response.data && response.data.isSuccess) {
                alert(response.data.message)
                history.goBack()
            }
        } catch (error) {
            console.log(error);
            alert("Some error occured. Please try again")
        }

        console.log(formData);
    }

    return (
        <div className="w_r_p_holder">
            <div className="write-reivew-popup_holder">
                <div className="w-r-holder ro_hd">
                    <h2>Add Place</h2>
                    <Link to="/PartnerCompany" ><i className="icon-close"></i></Link>
                </div>
                <div className="w-r-form-holder">
                    <form action="" method="POST">
                        <div className="ps-1_1">
                            <label for="">Artist</label>
                            <input value={formData.decor_type} onChange={(e) => setFormField('decor_type', e.target.value)} type="text" id="" name="" />
                        </div>
                        <div className="ps-1_1 ps-2_2 serce-hholr">
                            <label for="">Price</label>
                            <input value={formData.decor_price} onChange={(e) => setFormField('decor_price', e.target.value)} type="text" id="" name="" />
                            <div className="pp_pe asevc-holder">
                                <a href="javascript:void(0)" className={(formData.price_type === 1) ? "per_ev border border-primary" : "per_ev"} onClick={() => setFormField("price_type", 1)} >Per / Person</a>
                                <a href="javascript:void(0)" className={(formData.price_type === 2) ? "per_ev border border-primary" : "per_ev"} onClick={() => setFormField("price_type", 2)} >Per / Event</a>
                            </div>
                        </div>
                        <button onClick={onSubmitHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PcAddDecor;
