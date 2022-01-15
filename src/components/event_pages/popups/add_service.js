import React from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import { Link } from "react-router-dom";

function AddService() {
  return (
    <div className="w_r_p_holder">
    <div className="write-reivew-popup_holder">
        <div className="w-r-holder ro_hd">
            <h2>Add Service</h2>
            <a href=""><i className="icon-close"></i></a> 
        </div>  
        <div className="w-r-form-holder">
           <form action="" method="POST">
                <div className="ps-1_1">
                    <label for="">Name</label>
                    <input type="text" id="" name="" value="" placeholder="Catering"/>
                </div>
                <div className="ps-1_1 ps-2_2 serce-hholr">
                    <label for="">Price</label>
                    <input type="text" id="" name="" value=""/>
                    <div className="pp_pe asevc-holder">
                    <a href="">Per / Person</a>
                    <a href="" className="per_ev">Per / Event</a>
                    </div>
                </div>
                <div className="ps-1_1">
                    <label for="">Details</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                <Link to="/price_fo_location"><button>Submit</button></Link>
           </form>
        </div>    
    </div>  
</div>    
  );
}

export default AddService;
