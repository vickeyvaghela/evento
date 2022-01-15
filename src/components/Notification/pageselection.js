import React from "react";
import $ from "jquery";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

function NSelectPage() {
   return (
      <div className="continent-wrapper">
         <div className="container">
            <div className="row">
               <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
                  <a href="" className="back-btnt">
                     <i className="icon-Back" aria-hidden="true"></i>
                  </a>
                  <h2>Create New Notification</h2>
                  <div className="e-btn">
                     <a href="" className="new-btn-creat">
                        <i className="icon-plus" aria-hidden="true"></i> Add event
                     </a>
                  </div>
               </div>
               <div className="process-wrapper">
                  <ul className="Create-Notification">
                     <li className="process-stap">
                        <input type="checkbox" id="cb1" hidden className="cb-btn" />
                        <span>01</span>
                        <br />
                        <label className="selact-btn" for="cb1">
                           Select Page
                        </label>
                     </li>
                     <li className="process-stap">
                        <input type="checkbox" id="cb2" hidden className="cb-btn" />
                        <span>02</span>
                        <br />
                        <label className="selact-btn" for="cb2">
                           Select Business
                        </label>
                     </li>
                     <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>03</span>
                        <br />
                        <label className="selact-btn" for="cb3">
                           Select User
                        </label>
                     </li>
                     <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>04</span>
                        <br />
                        <label className="selact-btn" for="cb3">
                           Notification Mode
                        </label>
                     </li>
                     <li className="process-stap">
                        <input type="checkbox" id="cb3" hidden className="cb-btn" />
                        <span>05</span>
                        <br />
                        <label className="selact-btn" for="cb3">
                           Membership & Payment
                        </label>
                     </li>
                  </ul>
               </div>
               <div className="r-btn-group">
                  <div className="cns-titel">
                     <span>Select Page</span>
                  </div>
                  <div className=" d-t">
                     <div className="radio-btn">
                        <span>
                           <i className="icon-right"></i>
                        </span>
                        <label for="r-2">Event List</label>
                     </div>
                     <div className="radio-btn">
                        <span>
                           <i className="icon-right"></i>
                        </span>
                        <label for="r-2">Place List</label>
                     </div>
                     <div className="radio-btn">
                        <span>
                           <i className="icon-right"></i>
                        </span>
                        <label for="r-2">Event Details</label>
                     </div>
                     <div className="radio-btn">
                        <span>
                           <i className="icon-right"></i>
                        </span>
                        <label for="r-2">Artist Page</label>
                     </div>
                     <div className="radio-btn">
                        <span>
                           <i className="icon-right"></i>
                        </span>
                        <label for="r-2">Artist Details</label>
                     </div>
                     <div className="radio-btn">
                        <span>
                           <i className="icon-right"></i>
                        </span>
                        <label for="r-2">Decoration Page</label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

// $(function () {
//   $(".radio-btn").click(function (j) {
//     if ($(this).hasClass("active")) {
//       $(this).removeClass("active");
//     } else {
//       $(".radio-btn").removeClass("active");
//       $(this).addClass("active");
//     }
//   });
// });

export default NSelectPage;
