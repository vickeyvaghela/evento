import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";


// import { API_URL } from "../../constants";
import { API_URL } from "../../../constants";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

const axios = require("axios");




function EditEvent({ setShow, eventID, display_name ,categoryId, fetchEventDataAgain }) {


    const history = useHistory();
    const [ categoryAry, set_categoryAry ] = useState([]);

    const [formData, setFormData] = useState({ display_name: display_name, category: categoryId });

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
                    //setFormData({ display_name: "", category: parseInt(response.data.data[0].categoryId ) })
                }
            } catch (errCallingApi) {
                console.log("errCallingApi", errCallingApi);
            }
        })();
    },[eventID]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handle form");

        console.log('formData',formData);

        let userID;
        userID = localStorage.getItem("userId");
        if(!userID){
            alert('Error occured please try again')
        }else{
            let token = `Token ${localStorage.getItem("token")}`;
            let postData = { User: userID, eventId: eventID, categoryId: formData.category, display_name: formData.display_name }
            const response = await axios.put(`${API_URL}/events`, postData, { headers: { "Content-Type": "application/json", Authorization: token } });

            if (response && response.data && response.data.data && response.data.data.eventId) {
                setShow(false)
                fetchEventDataAgain()
                history.push("/event/addedEvent/"+response.data.data.eventId);
            }
        }
        
    }

    return (

        <div className="w_r_p_holder">
            <div className="popup-main">
                <div className="popup-titel">
                    <h2>Edit Event</h2>
                    <button type="button" stye={{ "border": "none" }} class="" onClick={() => setShow(false)}><i className="icon-close"></i></button>
                </div>
                <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="category-selctor">
                        <span for="">Select Category</span>
                        <select className="ce_pop" onChange={(e) => { setFormField('category', e.target.value) }} value={formData.category}>
                            {categoryAry.map((item, i) => (
                                <option key={item.categoryId} value={item.categoryId}>{item.category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="f-input">
                        <span>Give Display Name of Your Category</span>
                        <input type="text" required  onChange={(e) => { setFormField('display_name', e.target.value) }} value={formData.display_name} />
                    </div>
                    <div className="form-btn">
                        {/* <Link to="/add_event"><button>Submit</button></Link> */}
                        <button type="submit" class="">Submit</button>
                    </div>
                </form>
            </div>
        </div>

    );
}


export default EditEvent;
