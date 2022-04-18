import React from "react";

import { Link } from "react-router-dom";

function PersonCapacity() {
  return (
   <main>
       
    <div class="continent-wrapper">
    <div class="container">
        <div class="row">
             <div class="col-12 col-md-12 col-lg-12 evant-titel event-add">                            
                 <Link to="/price_fo_location" class="back-btnt"><i class="icon-Back" aria-hidden="true"></i></Link>                               
                 <h2>Create New</h2>
                 <div class="e-btn">
                     <Link to="/event" class="new-btn-creat"><i class="icon-plus" aria-hidden="true"></i>Add</Link>
                 </div>                              
             </div> 
            <div class="process-wrapper">
             <ul>
                 <li class="process-stap">
                     <input type="checkbox" id="cb1" hidden class="cb-btn"/>
                     <span>01</span><br/>
                     <label class="selact-btn" for="cb1">Add</label>
                 </li>
                 <li class="process-stap">
                    <input type="checkbox" id="cb2" hidden class="cb-btn"/>
                    <span>02</span><br/>
                    <label class="selact-btn" for="cb2">Date & Time</label>                                   
                </li>
                <li class="process-stap">
                    <input type="checkbox" id="cb3" hidden class="cb-btn"/>
                    <span>03</span><br/>
                    <label class="selact-btn" for="cb3">seating arrangement</label>                                   
                </li>
                <li class="process-stap">
                    <input type="checkbox" id="cb3" hidden class="cb-btn"/>
                    <span>04</span><br/>
                    <label class="selact-btn" for="cb3">Location</label>                                   
                </li>
                <li class="process-stap">
                    <input type="checkbox" id="cb3" hidden class="cb-btn"/>
                    <span>05</span><br/>
                    <label class="selact-btn" for="cb3">Photos & Videos</label>                                   
                </li>
                <li class="process-stap">
                    <input type="checkbox" id="cb3" hidden class="cb-btn"/>
                    <span>06</span><br/>
                    <label class="selact-btn" for="cb3">Permission</label>                                   
                </li>
                <li class="process-stap">
                    <input type="checkbox" id="cb3" hidden class="cb-btn"/>
                    <span>07</span><br/>
                    <label class="selact-btn" for="cb3">Live Event</label>                                   
                </li>                                
             </ul>
            </div> 
            <div class="event-wrapper">                           
                <div class="person-capacity-holder">
                 <div class="shop-name">
                     <span for="">Person Capacity</span>
                     <input type="text" name="" id=""/>
                 </div>
                 <div class="shop-name">
                     <span for="">Parking Capacity</span>
                     <input type="text" name="" id=""/>
                 </div>
                 <div class="event-add">
                     <span>What’s the Location?</span>
                     <textarea name="" placeholder="Type here Address..." id="" cols="30" rows="5"></textarea>
                     <button>Location from Google map</button>
                 </div>
                </div>                                
            </div>
        </div>
    </div>
    <div class="next-prw-holder ">
     <Link to="/price_fo_location" class="prew"><i class="icon-Back"></i>Back</Link>
     <Link to="/terms&condition" class="next">Next<i class="icon-Next"></i></Link>
</div>
</div>

</main>

  
  );
}

export default PersonCapacity;
