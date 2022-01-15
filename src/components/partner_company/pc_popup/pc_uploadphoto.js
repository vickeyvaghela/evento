import React from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

function PcUploadPhoto() {
  return (
    <div className="uplodephoto">
    <div className="edit-holder-p">
      <div className="edit-offer-p">
        <div className="popup-titel ro_hd">
          <h2>Upload Photo</h2>
          <a href="">
            <i className="icon-close"></i>
          </a>
        </div>
        <div className="input-holder-p epos">
          <label for="">Select Photo</label>
          <div className="c-p-f">
            <input id="file-upload" type="file" />
          </div>
        </div>
        <div className="ps-1_1 ps-2_2 epos apav-holder">
          <label for="">Price</label>
          <input type="text" id="" name="" value="" />
          <div className="pp_pe pe-1">
            <a href="">Per / Person</a>
            <a href="" className="per_ev">
              Per / Event
            </a>
          </div>
        </div>
        <div className="input-holder-p epos">
          <label for="">Details</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button>Submit</button>
    </div>
  </div>
  );
}

export default PcUploadPhoto;
