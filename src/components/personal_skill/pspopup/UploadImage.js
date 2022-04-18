import React, { useState } from "react";

import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import axios from "axios";
import { API_URL } from "../../../constants";


function UploadImage({ set_modalState, setUploadImage, uploadImageList, id }) {
  const [photo_price_period, setPhotoPricePeriod] = useState("")
  const [photo_details, setPhotoDetails] = useState("")
  var token = `Token ${localStorage.getItem("token")}`;
  var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0;

  const handleSubmit = async () => {
    console.log(photo_details,photo_price_period,id);
    const form = new FormData()
    console.log(uploadImageList[0])
    // form.append("image" , uploadImageList)
    console.log(form)
    // uploadImageList.map((data) => (
    //   form.append("photo_file", data)
    // ))
    for (let i = 0; i < uploadImageList.length; i++) {
      form.append("photo_file", uploadImageList[i])
    }
    form.append("p_skill", id)
    form.append("photo_price_period", photo_price_period)
    form.append("photo_details", photo_details)
    if (form) {
      try {
        const data = await axios.post(`${API_URL}/ps_add_photo`, form, { headers: { "Content-Type": "application/json", Authorization: token } })
        console.log('ps_add_photo',data);
      if (data && data.data && data.data.isSuccess) {
        set_modalState(false)
      }
      } catch (error) {
        alert("Error in Image Uploading.")
      }
      
    }
  }
  return (
    <div className="w_r_p_holder">
      <div className="edit-holder-p">
        <div className="edit-offer-p">
          <div className="popup-titel ro_hd">
            <h2>Upload Photo</h2>
            <a href="javascript:void(0)" onClick={() => { set_modalState(false) }}>
              <i className="icon-close"></i>
            </a>
          </div>
          <div className="input-holder-p epos">
            <label for="">Select Photo</label>
            <div className="c-p-f poster-m">

              <input id="file-upload" onChange={(e) => { setUploadImage(e.target.files) }} multiple type="file" accept="image/x-png,image/gif,image/jpeg" />
            </div>
          </div>
          <div className="ps-1_1 ps-2_2 epos apav-holder">
            <label for="">Price</label>
            <input type="text" onChange={(e) => { setPhotoPricePeriod(e.target.value) }} id="" name="" />
            <div className="pp_pe pe-1">
              <a  >Per / Person</a>
              <a   className="per_ev">
                Per / Event
              </a>
            </div>
          </div>
          <div className="input-holder-p epos">
            <label for="">Details</label>
            <textarea onChange={(e) => { setPhotoDetails(e.target.value) }} name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default UploadImage;
