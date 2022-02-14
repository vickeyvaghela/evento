import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import { Link ,useHistory} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../constants";

// {
//     "user" : 1,
//     "equ_name" : "Bike",
//     "equ_price" : 50000,
//     "equ_price_period" : 500,
//     "equ_price_type" : 1,
//     "equ_details" : "Yoo This is Bike" 
// }


function PcAddEquipment() {


    const [formData, setFormData] = useState({
        "user" : null,
        "equ_name" : null,
        "equ_price" : null,
        "equ_price_period" : null,
        "equ_price_type" : 1,
        "equ_details" : null 
    })
    const history = useHistory()

    const setFormField = (field, value) => {
		setFormData({ ...formData, [field]:value })
	}

    async function onSubmitHandler(e) {
        e.preventDefault()

        try {
            const response = await axios.post(`${API_URL}/pc_equipment`, formData); 
            console.log('response', response);
            if (response && response.data && response.data.isSuccess ) {
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
            <h2>Add Equipment</h2>
           <Link to="/PartnerCompany" ><i className="icon-close"></i></Link>
        </div>  
        <div className="w-r-form-holder">
           <form action="" >   
                <div className="ps-1_1 epos">
                    <label for="">Equipment Name</label>
                    <input value={formData.equ_name} onChange={(e)=>setFormField('equ_name',e.target.value)} type="text" id="" name="" />
                </div>
                <div className="ps-1_1 epos">
                    <label for="">Price</label>
                    <input value={formData.equ_price} onChange={(e)=>setFormField('equ_price',e.target.value)} type="text" id="" name="" />
                </div>
                <div className="ps-1_1 ps-2_2 epos">
                    <label for="">Price</label>
                    <input value={formData.equ_price_period} onChange={(e)=>setFormField('equ_price_period',e.target.value)} type="text" id="" name="" />
                    <div className="pp_pe pe-1 equi-holdr">
                    <a href="javascript:void(0)" className={(formData.equ_price_type===1)?"per_ev border border-primary":"per_ev"} onClick={()=>setFormField("equ_price_type",1)} >Per / Person</a>
                    <a href="javascript:void(0)" className={(formData.equ_price_type===2)?"per_ev border border-primary":"per_ev"}  onClick={()=>setFormField("equ_price_type",2)} >Per / Event</a>
                    </div>
                </div>
                <div className="ps-1_1 epos">
                    <label for="">Details</label>
                    <textarea value={formData.equ_details} onChange={(e)=>setFormField('equ_details',e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                </div>
                {/* <Link to="/partnercompany"> */}
                    <button onClick={onSubmitHandler}>Submit</button>
                    {/* </Link> */}
           </form>
        </div>    
    </div>  
</div>
  );
}

export default PcAddEquipment;
