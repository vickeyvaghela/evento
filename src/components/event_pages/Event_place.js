import React from "react";
import $ from "jquery";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";
import { Link } from "react-router-dom";

function Event_place() {
  return (
    <div className="continent-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
            <Link to="/event_for" className="back-btnt">
              <i className="icon-Back" aria-hidden="true"></i>
            </Link>
            <h2>Create New</h2>
            <Link to="/add_event_place" className="provider-place">
              Add Place
            </Link>
            <div className="e-btn">
              <Link to="/event" className="new-btn-creat">
                <i className="icon-plus" aria-hidden="true"></i> Add event
              </Link>
            </div>
          </div>
          <div className="process-wrapper">
            <ul>
              <li className="process-stap">
                <input type="checkbox" id="cb1" hidden className="cb-btn" />
                <span>01</span>
                <br />
                <label className="selact-btn" for="cb1">
                  Add New
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb2" hidden className="cb-btn" />
                <span>02</span>
                <br />
                <label className="selact-btn" for="cb2">
                  For all or Couple
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>03</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Place Provider
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>04</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Photos & videos
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>05</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Price of Location
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>06</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Person / Parking
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>07</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Other
                </label>
              </li>
            </ul>
          </div>
          <div className="r-btn-group place-povider">
            <div className="d-t">
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Farm</label><span>100 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Banquate Hall</label><span>250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Resort</label><span>3650 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Resturent</label><span>1250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Hotel</label><span>1560 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Banglow</label><span>1560 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Beach Area</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Ground</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Conference Centers</label><span>2550 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Meeting Rooms</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Convention Center</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Theaters</label><span>2250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Stadiums and Arenas</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Yachts</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Rooftops</label><span>2250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Ball Rooms</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Gardens</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Universites</label><span>2550 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Mansions</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Museums</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Bars</label><span>2250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Pubs</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Clubs</label><span>2250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Business Center</label><span>2250 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Sports Clubs</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Art Galleries</label><span>150 INR</span>
              </div>
              <div className="radio-btn">
                <span><i className="icon-right"></i></span><label for="r-2">Stately Homes</label><span>2250 INR</span>
              </div>
            </div>
            <div className="provider-textaria">
              <span>Discription of Location</span>
              <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prw-holder ">
        <Link to="/event_for" className="prew">
          <i className="icon-Back"></i>Back
        </Link>
        <Link to="/photo&video" className="next">
          Next<i className="icon-Next"></i>
        </Link>
      </div>
    </div>
  );
}

$(function () {
  $(".radio-btn").click(function (j) {
    $(this).toggleClass("active");
  });
});

export default Event_place;
