import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";


// import { API_URL } from "../../constants";
import { API_URL } from "../../../constants";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

const axios = require("axios");




function AddService({ set_isAddServicesModalOpen }) {


    const history = useHistory();
    const [categoryAry, set_categoryAry] = useState([]);

    const [formData, setFormData] = useState({ 
        service_name: "",
        service_price: null,
        service_desc: "",
        service_price_type: 1,
     });


     const changePriceType = (price_type) => {
        //setFormData({ ...formData, service_price_type: price_type })
     }

    const setFormField = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    useEffect(() => {
        (async () => {
            try {
                let token = `Token ${localStorage.getItem("token")}`;
                const response = await axios.get(`${API_URL}/event_category`, { headers: { "Content-Type": "application/json", Authorization: token } });

                if (response && response.data && response.data.data && response.data.data && response.data.data.length) {
                    console.log("response.data.data.length", response.data.data.length);
                    set_categoryAry(response.data.data);
                    //setFormData({ display_name: "", category: parseInt(response.data.data[0].categoryId) })
                }
            } catch (errCallingApi) {
                console.log("errCallingApi", errCallingApi);
            }
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle form");

        console.log('formData', formData);

        let userID;
        userID = localStorage.getItem("userId");
        if (!userID) {
            alert('Error occured please try again')
        } else {
            let token = `Token ${localStorage.getItem("token")}`;
            const response = await axios.post(`${API_URL}/add_service_event`, formData, { headers: { "Content-Type": "application/json", Authorization: token } });

            if (response && response.data && response.data.isSuccess) {
                alert('added successfully') 
                window.location.reload()
                //history.push("/event/addedEvent/" + response.data.data.eventId);
            }
        }

    }

    return (

        <div className="w_r_p_holder">
            <div className="popup-main">
                <div className="popup-titel">
                    <h2>Add Service</h2>
                    <button type="button" stye={{ "border": "none" }} class="" onClick={() => set_isAddServicesModalOpen(false)}><i className="icon-close"></i></button>
                </div>
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="ps-1_1 ps-2_2 serce-hholr">
                        <label for="">Service Name</label>
                        <input type="text" onChange={(e) => setFormField('service_name', e.target.value)} required/>
                    </div>
                    <div className="ps-1_1 ps-2_2 serce-hholr">
                        <label for="">Price</label>
                        <input type="text" required onChange={(e) => setFormField('service_price', e.target.value)} />
                        <div className="pp_pe asevc-holder">
                            <span onClick={()=>setFormField('service_price_type', 1) } className={`${formData.service_price_type===1 ? 'selected' : '' }`  }>Per / Person</span>
                            <span onClick={()=>setFormField('service_price_type', 0) } className={`${formData.service_price_type===0 ? 'selected' : '' }`  }>Per / Event</span>
                        </div>
                    </div>
                    <div className="ps-1_1 ps-2_2 serce-hholr">
                        <label for="">Description</label>
                        <textarea rows="10" onChange={(e) => setFormField('service_desc', e.target.value)}></textarea>
                    </div>
                    <button type="submit" class="">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default AddService;
