import React from "react";
import "../../../assets/css/style.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/icon/font/style.css";
import { Link } from "react-router-dom";

function Eventcreate() {
  return (

    <div className="w_r_p_holder">
    <div className="popup-main">
        <div className="popup-titel">
            <h2>Create Event</h2>
            <a href="javascript-void(0)"><i className="icon-close"></i></a>
        </div>
        <form action="" method="post">
            <div className="category-selctor">
                <span for="">Select Category</span>
                <select name="event-new" id="event-new" className="ce_pop">
                   <option value="volvo">Sweet Love Catering</option>
                   <option value="saab">Saab</option>
                   <option value="opel">Opel</option>
                   <option value="audi">Audi</option>
                 </select>
              </div>
            <div className="f-input">
              <span>Give Display Name of Your Category</span>
              <input type="text" name="" value=""/>
            </div>
            <div className="form-btn">
                <Link to="/add_event"><button>Submit</button></Link>
            </div>
        </form>
    </div>
</div>
  
  );
}

export default Eventcreate;
