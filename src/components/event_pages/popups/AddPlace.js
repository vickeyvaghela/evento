import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";


// import { API_URL } from "../../constants";
import { API_URL } from "../../../constants";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

const axios = require("axios");




function AddPlace({ set_isAddPlacesModalOpen }) {


    const history = useHistory();
    const [categoryAry, set_categoryAry] = useState([]);

    const [formData, setFormData] = useState({ place_name: "", place_price: 0, details: "" });

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
            const response = await axios.post(`${API_URL}/add_place_event`, formData, { headers: { "Content-Type": "application/json", Authorization: token } });

            if (response && response.data && response.data.isSuccess) {
                alert('added successfully') 
                window.location.reload()
                //history.push("/event/addedEvent/" + response.data.data.eventId);
            }
        }

    }

    return (

        <div className="lightbox-wrapper">
            <div className="popup-main">
                <div className="popup-titel">
                    <h2>Add Place</h2>
                    <button type="button" stye={{ "border": "none" }} class="" onClick={() => set_isAddPlacesModalOpen(false)}><i className="icon-close"></i></button>
                </div>
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                <div className="ps-1_1 ps-2_2 serce-hholr">
                        <label for="">Place Name</label>
                        <input type="text" onChange={(e) => setFormField('place_name', e.target.value)} required/>
                    </div>
                    <div className="ps-1_1 ps-2_2 serce-hholr">
                        <label for="">Price</label>
                        <input type="text" required onChange={(e) => setFormField('place_price', e.target.value)} />
                    </div>
                    <div className="ps-1_1 ps-2_2 serce-hholr">
                        <label for="">Price</label>
                        <textarea rows="10" onChange={(e) => setFormField('details', e.target.value)}></textarea>
                    </div>
                    <button type="submit" class="">Submit</button>
                </form>
            </div>
        </div>

    );
}

export default AddPlace;
