import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

import ph1 from "../../assets/img/ph1.png"
import ph2 from "../../assets/img/ph2.png"
import { Link } from "react-router-dom";

function Photo_video() {
  return (
    <div class="continent-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12 evant-titel event-add">
            <Link to="/event_place" class="back-btnt">
              <i class="icon-Back" aria-hidden="true"></i>
            </Link>
            <h2>Create New</h2>
            <div class="e-btn">
              <Link to="/event" class="new-btn-creat">
                <i class="icon-plus" aria-hidden="true"></i> Add event
              </Link>
            </div>
          </div>
          <div class="process-wrapper">
            <ul>
              <li class="process-stap">
                <input type="checkbox" id="cb1" hidden class="cb-btn" />
                <span>01</span>
                <br />
                <label class="selact-btn" for="cb1">
                  Add Event
                </label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb2" hidden class="cb-btn" />
                <span>02</span>
                <br />
                <label class="selact-btn" for="cb2">
                  Date & Time
                </label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" />
                <span>03</span>
                <br />
                <label class="selact-btn" for="cb3">
                  seating arrangement
                </label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" />
                <span>04</span>
                <br />
                <label class="selact-btn" for="cb3">
                  Location
                </label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" />
                <span>05</span>
                <br />
                <label class="selact-btn" for="cb3">
                  Photos & Videos
                </label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" />
                <span>06</span>
                <br />
                <label class="selact-btn" for="cb3">
                  Permission
                </label>
              </li>
              <li class="process-stap">
                <input type="checkbox" id="cb3" hidden class="cb-btn" />
                <span>07</span>
                <br />
                <label class="selact-btn" for="cb3">
                  Live Event
                </label>
              </li>
            </ul>
          </div>
          <div class="photo-video-holder">
            <div class="p-v-main">
              <h1>Photos <span>(Upload upto 100max)</span></h1>
              <div class="poster-m">
                <div class="images-selctor ">
                  <input type="file" class="file-input" name="" value="" accept="image/*" />
                </div>
              </div>
            </div>
            <div class="ph-main">
              <span>Uploaded Photo</span>
              <div class="img-holder">
                <div class="photo-box p">
                  <div class="images-selctor ">
                    <img src={ph1} class="img-fluid" alt="" /><button>Remove</button></div>
                </div>
                <div class="photo-box p">
                  <div class="images-selctor ">
                    <img src={ph2} class="img-fluid" alt="" /><button>Remove</button></div>
                </div>
              </div>
            </div>
            <div class="p-v-main video-uploder">
              <h1>Videos{" "}<span>(Upload upto 25 to 100max and Duration 30min to 40min max.)</span></h1>
              <div class="poster-m">
                <div class="images-selctor ">
                  <input type="file" class="file-input" name="" value="" accept="image/*" />
                </div>
              </div>
            </div>
            <div class="ph-main">
              <span>Uploaded Video</span>
              <div class="img-holder">
                <div class="video-main">
                  <div class="vedio-item">
                    <div class="o-video"><iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe></div>
                    <button>Remove</button>
                  </div>
                </div>
                <div class="video-main">
                  <div class="vedio-item">
                    <div class="o-video"><iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe></div>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="next-prw-holder ">
        <Link to="/event_place" class="prew">
          <i class="icon-Back"></i>Back
        </Link>
        <Link to="/price_fo_location" class="next">
          Next<i class="icon-Next"></i>
        </Link>
      </div>
    </div>
  );
}

export default Photo_video;
