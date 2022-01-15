import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

import user1 from "../../assets/img/user-1.png"
import user2 from "../../assets/img/user-2.png"
import user3 from "../../assets/img/user-3.png"
import user4 from "../../assets/img/user-4.png"
import user5 from "../../assets/img/user-5.png"
import user6 from "../../assets/img/user-6.png"

function SelectUser() {
  return (
    <div className="continent-wrapper">
    <div className="container">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">                            
               <a href="" className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></a>                               
                 <h2>Create New Notification</h2>
                <div className="e-btn">
                   <a href="" className="new-btn-creat"><i className="icon-plus" aria-hidden="true"></i> Add event</a>
                </div>                              
            </div>   
            <div className="process-wrapper">
                <ul className="Create-Notification">
                    <li className="process-stap">
                        <input type="checkbox" id="cb1" hidden className="cb-btn"/>
                        <span>01</span><br/>
                        <label className="selact-btn" for="cb1">Select Page</label>
                    </li>
                    <li className="process-stap">
                       <input type="checkbox" id="cb2" hidden className="cb-btn"/>
                       <span>02</span><br/>
                       <label className="selact-btn" for="cb2">Select Business</label>                                   
                   </li>
                   <li className="process-stap">
                       <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                       <span>03</span><br/>
                       <label className="selact-btn" for="cb3">Select User</label>                                   
                   </li>
                   <li className="process-stap">
                       <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                       <span>04</span><br/>
                       <label className="selact-btn" for="cb3">Notification Mode</label>                                   
                   </li>
                   <li className="process-stap">
                       <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                       <span>05</span><br/>
                       <label className="selact-btn" for="cb3">Membership & Payment</label>                                   
                   </li>
                </ul>
            </div>  

            <div className="r-btn-group select-upload">  
                <div className="Select-User-holder">
                   <div className="cns-titel">
                       <span>Select User</span>
                   </div>
                   <div className="user-selction">
                       <label for="select-all">
                           <input type="checkbox" name="" id="select-all"/>
                           <span>Select All</span>
                       </label>
                       <label for="select-1">
                           <input type="checkbox" name="" id="select-1"/>
                           <div className="user-img">
                               <img src={user1} alt=""/>
                           </div>
                           <span>Christopher Colon</span>
                       </label>
                        <label for="select-2">
                            <input type="checkbox" name="" id="select-2"/>
                            <div className="user-img">
                                  <img src={user2} alt=""/>
                            </div>
                            <span>Gloria Blankenship</span>
                        </label>
                        <label for="select-3">
                           <input type="checkbox" name="" id="select-3"/>
                           <div className="user-img">
                                 <img src={user3} alt=""/>
                           </div>
                           <span>Quincy Montgomery</span>
                       </label>
                       <label for="select-4">
                           <input type="checkbox" name="" id="select-4"/>
                           <div className="user-img">
                                 <img src={user4} alt=""/>
                           </div>
                           <span>Ezequiel Martin</span>
                       </label>
                       <label for="select-5">
                           <input type="checkbox" name="" id="select-5"/>
                           <div className="user-img">
                                 <img src={user5} alt=""/>
                           </div>
                           <span>Alexandria Wilkerson</span>
                       </label>
                       <label for="select-6">
                           <input type="checkbox" name="" id="select-6"/>
                           <div className="user-img">
                                 <img src={user6} alt=""/>
                           </div>
                           <span>Ansley Christensen</span>
                       </label>

                   </div>
               </div>
               <div className="Select-User-holder">
                   <div className="cns-titel">
                       <span>Upload Exel</span>
                   </div>
                   <div className="user-selction">
                       <div className="upload-e-file" for="exl-upload">
                           <input type="file" name="" id="exl-upload"/>
                       </div>                             
                   </div>
               </div>
                                                     
           </div> 
       </div>                    
    </div>

</div>
  );
}



export default SelectUser;
