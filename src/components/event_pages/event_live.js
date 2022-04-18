import React from "react";


import event1 from "../../assets/img/evant1.png"
import event2 from "../../assets/img/evant2.png"
import event3 from "../../assets/img/evant3.png"

function EventLive() {
  return (
      <main>
    
    <div className="continent-wrapper">
    <div className="container">
        <div className="row">
             <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">                            
                 <a   className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></a>                               
                 <h2>Create new event</h2>
                 <div className="e-btn">
                     <a   className="new-btn-creat"><i className="icon-plus" aria-hidden="true"></i>Add</a>
                 </div>                              
             </div> 
            <div className="process-wrapper">
             <ul>
                 <li className="process-stap">
                     <input type="checkbox" id="cb1" hidden className="cb-btn"/>
                     <span>01</span><br/>
                     <label className="selact-btn" for="cb1">Add</label>
                 </li>
                 <li className="process-stap">
                    <input type="checkbox" id="cb2" hidden className="cb-btn"/>
                    <span>02</span><br/>
                    <label className="selact-btn" for="cb2">Date & Time</label>                                   
                </li>
                <li className="process-stap">
                    <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                    <span>03</span><br/>
                    <label className="selact-btn" for="cb3">seating arrangement</label>                                   
                </li>
                <li className="process-stap">
                    <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                    <span>04</span><br/>
                    <label className="selact-btn" for="cb3">Location</label>                                   
                </li>
                <li className="process-stap">
                    <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                    <span>05</span><br/>
                    <label className="selact-btn" for="cb3">Photos & Videos</label>                                   
                </li>
                <li className="process-stap">
                    <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                    <span>06</span><br/>
                    <label className="selact-btn" for="cb3">Permission</label>                                   
                </li>
                <li className="process-stap">
                    <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                    <span>07</span><br/>
                    <label className="selact-btn" for="cb3">Live Event</label>                                   
                </li>                                
             </ul>
            </div> 
            <div className="event-wrapper">                           
             <div className="booking-holder">
                 <div className="fs-holder">
                     <div className="book-img">
                         <img src={event1} className="" alt=""/>
                     </div>
                     <div className="event-holder">
                         <div className="titel-event live-event-holder">
                             <div className="live-event-b">
                                 <button>Caterers</button>
                                 <div className="rating-star">
                                     <i className="icon-Star"></i>                         
                                     <i className="icon-Star"></i> 
                                     <i className="icon-Star"></i> 
                                     <i className="icon-silver-Star"></i> 
                                     <i className="icon-silver-Star"></i> 
                                 </div>           
                                 <h3>Cakes N Shapes</h3>                                     
                             </div>    
                             <div className="material-switch "> 
                                 <h3>250 INR</h3>
                                 <span>Live</span>                                               
                                 <input id="someSwitchOptionDefault1" name="someSwitchOption001" type="checkbox" data-toggle-switch/>                                                
                                 <label for="someSwitchOptionDefault1" className="label-default1"></label>
                             </div>                                       
                         </div>
                         <div className="event-info">
                             <ul>
                                 <li>
                                     <a  ><i className="icon-location"></i>Dallas, Texas</a>
                                 </li>
                                 <li className="live-event-ad">Available</li>
                                 <li className="share-bt"><i className="icon-share"></i></li>
                             </ul>
                         </div>
                     </div>                                          
                 </div>
             </div>
             <div className="booking-holder">
                 <div className="fs-holder">
                     <div className="book-img">
                         <img src={event2} className="" alt=""/>
                     </div>
                     <div className="event-holder">
                         <div className="titel-event live-event-holder">
                             <div className="live-event-b">
                                 <button>Caterers</button>
                                 <div className="rating-star">
                                     <i className="icon-Star"></i>                         
                                     <i className="icon-Star"></i> 
                                     <i className="icon-Star"></i> 
                                     <i className="icon-silver-Star"></i> 
                                     <i className="icon-silver-Star"></i> 
                                 </div>           
                                 <h3>Cakes N Shapes</h3>                                     
                             </div>    
                             <div className="material-switch "> 
                                 <h3>250 INR</h3>
                                 <span>Live</span>                                               
                                 <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox" data-toggle-switch/>                                                
                                 <label for="someSwitchOptionDefault" className="label-default1"></label>
                             </div>                                       
                         </div>
                         <div className="event-info">
                             <ul>
                                 <li>
                                     <a  ><i className="icon-location"></i>Dallas, Texas</a>
                                 </li>
                                 <li className="live-event-ad">Available</li>
                                 <li className="share-bt"><i className="icon-share"></i></li>
                             </ul>
                         </div>
                     </div>                                          
                 </div>
             </div>
             <div className="booking-ad">
                 <span>Ad</span>
                 </div>
             <div className="booking-holder">
                 <div className="fs-holder">
                     <div className="book-img">
                         <img src={event3} className="" alt=""/>
                     </div>
                     <div className="event-holder">
                         <div className="titel-event live-event-holder">
                             <div className="live-event-b">
                                 <button>Caterers</button>
                                 <div className="rating-star">
                                     <i className="icon-Star"></i>                         
                                     <i className="icon-Star"></i> 
                                     <i className="icon-Star"></i> 
                                     <i className="icon-silver-Star"></i> 
                                     <i className="icon-silver-Star"></i> 
                                 </div>           
                                 <h3>Cakes N Shapes</h3>                                     
                             </div>    
                             <div className="material-switch "> 
                                 <h3>250 INR</h3>
                                 <span>Live</span>                                               
                                 <input id="someSwitchOptionDefaul" name="someSwitchOption001" type="checkbox" data-toggle-switch/>                                                
                                 <label for="someSwitchOptionDefaul" className="label-default1"></label>
                             </div>                                       
                         </div>
                         <div className="event-info">
                             <ul>
                                 <li>
                                     <a  ><i className="icon-location"></i>Dallas, Texas</a>
                                 </li>
                                 <li className="live-event-ad">Available</li>
                                 <li className="share-bt"><i className="icon-share"></i></li>
                             </ul>
                         </div>
                     </div>                                          
                 </div>
             </div>
                
                 
            </div>
        </div>
    </div>
    <div className="next-prw-holder ">
     <a   className="prew"><i className="icon-Back"></i>Back</a>
     <a   className="next">Go to Dashboard<i className="icon-Next"></i></a>
</div>
</div>
      
</main>
  );
}

export default EventLive;
