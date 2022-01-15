import React from "react";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

import ps1 from "../../assets/img/ph1.png"
import ps2 from "../../assets/img/ph2.png"
import fb from "../../assets/img/fb-1.png"
import youtub from "../../assets/img/youtube 1.png"
import twitter from "../../assets/img/twitter-1.png"
import printrest from "../../assets/img/printpest.png"
import instagram from "../../assets/img/instagram 1.png"
import vimo from "../../assets/img/vimo.png"
import { Link } from "react-router-dom";


function PartnerCompany() {
  return (
    <div className="continent-wrapper">
      <div className="container">
        <div className="persk-holder">
          <h2>Partner Company Business</h2>
        </div>
        <div className="persk_form_holder">
          <form action="" method="post">
            <div className="psb-2">
              <h3>Personal Details</h3>
              <div className="pd-1">
                <div className="so-holdr">
                  <label for="">Select Option</label>
                  <select name="Banker" id="Banker">
                    <option value="Banker">Banker</option>
                    <option value="Banker">Bank</option>
                    <option value="Banker">Bank</option>
                  </select>
                </div>
                <div className="so-holdr">
                  <label for="">Full Name (Mr / Mrs / Ms)</label>
                  <input type="text" />
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Mobile Number</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" value="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" value="" />
                </div>
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Alternative Mobile Number</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" value="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" value="" />
                </div>
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Email Address</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" value="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" value="" />
                </div>
              </div>
            </div>
            <div className="psb-1 pcb-1">
              <label for="">Select Option</label>
              <div className="pcb-selection">
                <select name="" id="">
                  <option value="Caterer">Caterer</option>
                  <option value="1">Caterer</option>
                  <option value="2">Caterer</option>
                  <option value="3">Caterer</option>
                  <option value="4">Caterer</option>
                </select>
                <div className="pcb-food">
                  <span>Food Safe : 120 PP</span>
                  <span>Food Servant : 300 PP</span>
                  <span>leaner : 50PP</span>
                </div>
              </div>
            </div>
            <div className="psb-3">
              <h3>Work Details</h3>
              <div className="pd-holder">
                <div className="prdi-1 ptd-1">
                  <label for="">Price</label>
                  <input type="text" id="" name="" value="" />
                  <div className="prdi-1_2">
                    <a href="">Per / hr</a>
                    <a href="" className="per_ev">
                      Per / Day
                    </a>
                  </div>
                </div>
                <div className="prdi-1 ptd-2">
                  <label for="">Discount</label>
                  <input type="text" id="" name="" value="" />
                  <div className="prdi-1_2">
                    <a href="">
                      <i className="icon-Percentage"></i>
                    </a>
                    <a href="" className="per_ev">
                      <i className="icon-Rs"></i>
                    </a>
                    <a href="" className="per_ev">
                      Non
                    </a>
                  </div>
                </div>
              </div>
              <div className="pd-holder tsfmain-holdr">
                <div className="taf-holder">
                  <label for="">Travel Cost</label>
                  <div className="inclued_exclued-holder">
                    <div className="tg-btn-holder">
                      <h3>Include</h3>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <h3>Exclude</h3>
                    </div>
                    <div className="ie-text">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Enter Details..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="taf-holder">
                  <label for="">Accommodation</label>
                  <div className="inclued_exclued-holder">
                    <div className="tg-btn-holder">
                      <h3>Include</h3>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <h3>Exclude</h3>
                    </div>
                    <div className="ie-text">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Enter Details..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="taf-holder">
                  <label for="">Food</label>
                  <div className="inclued_exclued-holder">
                    <div className="tg-btn-holder">
                      <h3>Include</h3>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <h3>Exclude</h3>
                    </div>
                    <div className="ie-text">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Enter Details..."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="psb-4">
              <div className="equi-holder">
                <h3>Equipment</h3>
                <Link to="/pc_add_equpment">
                  <i className="icon-plus"></i>Add Equipment
                </Link>
              </div>
              <div className="cb_mc-holder">
                <div className="cb_mc_text">
                  <div className="cb_text">
                    <h3>Cutting board</h3>
                  </div>
                  <div className="cb_prise">
                    <div className="inr-cb-holder">
                      <span>250 INR</span>
                    </div>
                    <div className="tg-btn-holder tb-holder">
                      <h3>Include</h3>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <h3>Exclude</h3>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="cb_mc-holder">
                <div className="cb_mc_text">
                  <div className="cb_text">
                    <h3>Measuring cups and spoons</h3>
                  </div>
                  <div className="cb_prise">
                    <div className="inr-cb-holder">
                      <span>300 INR</span>
                    </div>
                    <div className="tg-btn-holder tb-holder">
                      <h3>Include</h3>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                      <h3>Exclude</h3>
                    </div>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="photo-video-holder psb-5">
              <div className="p-v-main">
                <h1>Photos</h1>
                <div className="poster-m">
                  <div className="images-selctor ">
                    <input
                      type="file"
                      className="file-input"
                      name=""
                      value=""
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
              <div className="ph-main">
                <span>Uploaded Photo</span>
                <div className="img-holder">
                  <div className="photo-box p">
                    <div className="images-selctor ">
                      <img src={ps1} className="img-fluid" alt="" />
                      <button>Remove</button>
                    </div>
                  </div>
                  <div className="photo-box p">
                    <div className="images-selctor ">
                      <img src={ps2} className="img-fluid" alt="" />
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-v-main video-uploder">
                <h1>Videos</h1>
                <div className="poster-m">
                  <div className="images-selctor ">
                    <input
                      type="file"
                      className="file-input"
                      name=""
                      value=""
                      accept="image/*"
                    />
                  </div>
                </div>
              </div>
              <div className="ph-main">
                <span>Uploaded Video</span>
                <div className="img-holder">
                  <div className="video-main">
                    <div className="vedio-item">
                      <div className="o-video">
                        <iframe
                          src="https://www.youtube.com/embed/Kch8n4tcOZQ"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <button>Remove</button>
                    </div>
                  </div>
                  <div className="video-main">
                    <div className="vedio-item">
                      <div className="o-video">
                        <iframe
                          src="https://www.youtube.com/embed/Kch8n4tcOZQ"
                          allowfullscreen
                        ></iframe>
                      </div>
                      <button>Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="psb-6">
              <h3>Company Details</h3>
              <div className="pd-1">
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Company Name</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input
                        type="checkbox"
                        id=""
                        name=""
                        value=""
                        className="cn_check"
                      />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" value="" />
                </div>
                <div className="so-holdr">
                  <label for="">Company GST (Optional)</label>
                  <div className="c-p-f">
                    <input id="file-upload" type="file" />
                  </div>
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Company Contact No</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" value="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" value="" />
                </div>
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Company Email</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" value="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" value="" />
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="so-holdr">
                  <label for="">Company Address</label>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Type here Address..."
                  ></textarea>
                  <button>Location from Google map</button>
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="p-v-main">
                  <h3>Company Photos (Upload upto 10Photos max.)</h3>
                  <div className="poster-m">
                    <div className="images-selctor ">
                      <input
                        type="file"
                        className="file-input"
                        name=""
                        value=""
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="p-v-main video-uploder">
                  <h3>Company Video (Upload upto 3 Video max.)</h3>
                  <div className="poster-m">
                    <div className="images-selctor ">
                      <input
                        type="file"
                        className="file-input"
                        name=""
                        value=""
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-media-main psb-7">
              <h3>Social Media</h3>
              <div className="s-pletform">
                <div className="row mx-0 mt-1">
                  <div className="col-md-6 col-12 pl-0 pr-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={fb} alt="" />
                      </div>
                      <input type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 px-0">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={youtub} alt="" />
                      </div>
                      <input type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={twitter} alt="" />
                      </div>
                      <input type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 px-0 mt-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={printrest} alt="" />
                      </div>
                      <input type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={instagram} alt="" />
                      </div>
                      <input type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 px-0 mt-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={vimo} alt="" />
                      </div>
                      <input type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="psb-8">
             <Link to="/dashboard"><button>Sumbit</button></Link> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PartnerCompany;
