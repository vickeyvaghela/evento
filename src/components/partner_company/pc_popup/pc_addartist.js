import React,{useState} from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import axios from "axios";
import { API_URL } from "../../../constants";
import { Link, useHistory } from "react-router-dom";


// {
//   "pc" : "4",
//   "artist" : "Sloth",
//   "price" : 50000,
//   "price_type" : 1
// }

function PcAddArtist() {


  const [formData, setFormData] = useState({
    "pc" : 1,
    "artist" : null,
    "price" : null,
    "price_type" : 1,
})
const history = useHistory()

const setFormField = (field, value) => {
setFormData({ ...formData, [field]:value })
}

async function onSubmitHandler(e) {
    e.preventDefault()

    try {
        const response = await axios.post(`${API_URL}/pc_artist`, formData); 
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
          <h2>Add Artist</h2>
          <Link to="/PartnerCompany" ><i className="icon-close"></i></Link>

        </div>
        <div className="w-r-form-holder">
          <form action="" method="POST">
            <div className="ps-1_1">
              <label for="">Artist</label>
              <input value={formData.artist} onChange={(e)=>setFormField('artist',e.target.value)} type="text" id="" name="" />
            </div>
            <div className="ps-1_1 ps-2_2 serce-hholr">
            <label for="">Price</label>
                    <input value={formData.price} onChange={(e)=>setFormField('price',e.target.value)} type="text" id="" name="" />
                    <div className="pp_pe pe-1 equi-holdr">
                    <a href="javascript:void(0)" className={(formData.price_type===1)?"per_ev border border-primary":"per_ev"} onClick={()=>setFormField("price_type",1)} >Per / Person</a>
                    <a href="javascript:void(0)" className={(formData.price_type===2)?"per_ev border border-primary":"per_ev"}  onClick={()=>setFormField("price_type",2)} >Per / Event</a>
                    </div>
            </div>
            <button onClick={onSubmitHandler}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PcAddArtist;
