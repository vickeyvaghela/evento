import React from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import { Link } from "react-router-dom";

function Add_event_place() {
  return (
    <div className="w_r_p_holder">
      <div className="write-reivew-popup_holder">
        <div className="w-r-holder ro_hd">
          <h2>Add Place</h2>
          <a href="javascript-void(0)">
            <i className="icon-close"></i>
          </a>
        </div>
        <div className="w-r-form-holder">
          <form action="" method="POST">
            <div className="ps-1_1">
              <label for="">Artist</label>
              <input type="text" id="" name="" value="" placeholder="" />
            </div>
            <div className="ps-1_1 ps-2_2 serce-hholr">
              <label for="">Price</label>
              <input type="text" id="" name="" value="" />
              <div className="pp_pe asevc-holder">
                <a href="javascript-void(0)">Per / Person</a>
                <a href="javascript-void(0)" className="per_ev">
                  Per / Event
                </a>
              </div>
            </div>
           <Link to="/event_place"><button className="artis-btn">Submit</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_event_place;
