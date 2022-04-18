import React from "react";



import { Link } from "react-router-dom";

function Event_for() {
  return (
    <main>
    <div class="continent-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12 evant-titel event-add">
            <Link to="/event" class="back-btnt">
              <i class="icon-Back" aria-hidden="true"></i>
            </Link>
            <h2>Create New</h2>
            <div class="e-btn">
              <Link to="/event" class="new-btn-creat">
                <i class="icon-plus" aria-hidden="true"></i> Add
              </Link>
            </div>
          </div>
          <div class="process-wrapper">
            <ul>
              <li class="process-stap">
                <input type="checkbox" id="cb1" hidden class="cb-btn" /><span>01</span><br />
                <label class="selact-btn" for="cb1">Add New</label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb2" hidden class="cb-btn" /><span>02</span><br />
                <label class="selact-btn" for="cb2">For all or Couple</label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" /><span>03</span><br />
                <label class="selact-btn" for="cb3">Place Provider</label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" /><span>04</span><br />
                <label class="selact-btn" for="cb3">Photos & videos</label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" /><span>05</span><br />
                <label class="selact-btn" for="cb3">Price of Location</label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" /><span>06</span><br />
                <label class="selact-btn" for="cb3">Person / Parking</label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" /><span>07</span><br />
                <label class="selact-btn" for="cb3">Other</label>
              </li>
            </ul>
          </div>
          <div class="r-btn-group">
            <div class="loction-r-holder">
              <div class="s-product">
                <div class="material-switch center-btn">
                  <span>For All</span>
                  <input id="someSwitchOptionDefault2" name="someSwitchOption001" type="checkbox" data-toggle-switch />
                  <label for="someSwitchOptionDefault2" class="label-default1"></label><span>For Couple</span>
                </div>
              </div>
            </div>
            <div class="d-t">
              <div class="radio-btn">
                <span><i class="icon-right"></i></span><label for="r-2">Romantic Stay</label>
              </div>
              <div class="radio-btn">
                <span><i class="icon-right"></i></span><label for="r-2">Romantic Lunch / Dinner</label>
              </div>
              <div class="radio-btn">
                <span><i class="icon-right"></i></span><label for="r-2">Romantic Candlelight Dinner </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next-prw-holder ">
        <button to="/add_event" class="prew"><i class="icon-Back"></i>Back</button>
        <button to="/event_place" class="next">Next<i class="icon-Next"></i></button>
      </div>
    </div>
    </main>
  );
}



export default Event_for;
