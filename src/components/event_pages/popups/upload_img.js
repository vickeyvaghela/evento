import React from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";

function Upload_img({set_isImageUploadModalOpen}) {

  return (

    <div className="edit-holder-p" style={{marginTop:50}}>
      <div className="edit-offer-p">
        <div className="popup-titel">
          <h2>Upload Photo</h2>          
          <a onClick={()=>set_isImageUploadModalOpen(false)} ><i className="icon-close"></i></a>
        </div>
        <div className="input-holder-p">
          <label for="">Select Photo</label>
          <div className="c-p-f">
            <input id="file-upload" type="file" />
          </div>
        </div>
        <div className="input-holder-p">
          <label for="">Details</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      <button>Submit</button>
    </div>
  );
}

export default Upload_img;
