import React, { useRef } from "react";

import fb from "../../assets/img/fb-1.png"
import youtub from "../../assets/img/youtube 1.png"
import twitter from "../../assets/img/twitter-1.png"
import printrest from "../../assets/img/printpest.png"
import instagram from "../../assets/img/instagram 1.png"
import vimo from "../../assets/img/vimo.png"
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants";
import { useState } from "react";
import GoogleMapPicker from "./pc_popup/pc_google_map";
import PhotoUpload from "./photo_upload_component";
import VideoUpload from "./video_upload_component";

var token = `Token ${localStorage.getItem("token")}`;
var userId = localStorage.getItem("userId");

function PartnerCompany() {

  // States declaration
  const [categories, setCategories] = useState([])
  const [pcid, setPcid] = useState()
  const [equipments, setEquipments] = useState([])
  const [openMap, setOpenMap] = useState(false)
  const [eqId, setEqId] = useState("")
  const [submitCounter, setSubmitCounter] = useState(0)

  const [formData, setFormData] = useState({
    User: userId,
    categoryId: null,
    name: null,
    mobile_no: null,
    alt_mobile_no: null,
    email_id: null,
    equip_ids: null,
    artist: null,
    artist_price: null,
    decor: null,
    decor_price: null,
    w_price: null,
    w_discount: null,
    travel_cost: null,
    accommodation: null,
    food: null,
    com_name: null,
    com_contact: null,
    com_email: null,
    com_address: null,
    let: 10,
    long: 106,
    facebook: null,
    youtube: null,
    twitter: null,
    pinterest: null,
    instagram: null,
    vimeo: null,
    live: null,
  })



  const history = useHistory()



  useEffect(() => {
    if (localStorage.getItem("token") === null) { history.push("/Login"); }
    else {
      getCategory();
      getPcId() 
      getEquipments();
    }

  }, []) 



  // Function starts

  const setFormField = (field, value) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [field]: value
      };
    });
    
  }

  function gstpickerHandler(e) {
    setFormField("com_gstfile",e.target.files[0])
    // console.log(e.target.files[0]);
  }

  async function getEquipments() {
    const response = await axios.get(`${API_URL}/pc_equipment`, { headers: { "Content-Type": "application/json", Authorization: token } })
    // console.log("categories",response.data.data);
    if (response.data.data) {
      setEquipments(response.data.data)
    }
    console.log(response.data.data);
  }

  async function getCategory() {
    const response = await axios.get(`${API_URL}/pc_category`, { headers: { "Content-Type": "application/json", Authorization: token } })
    // console.log("categories",response.data.data);
    if (response.data.data) {
      setCategories(response.data.data)
    }
  }

  async function onSubmitHandler(e) {
    e.preventDefault()
    console.log(formData);
    console.log(submitCounter);

    const response = await axios.post(`${API_URL}/partnercompany`, formData, { headers: { "Content-Type": "application/json", Authorization: token } })
    console.log(response);
        if (response.data.isSuccess) {
            alert(response.data.message)
        }
    setSubmitCounter(submitCounter+1)
  }

  async function getPcId() {
    const response = await axios.get(`${API_URL}/partnercompany`, { headers: { "Content-Type": "application/json", Authorization: token } })
    // console.log(response.data.data[0].parcomId);
    if (response.data?.data[0]?.parcomId) setPcid(response.data?.data[0].parcomId);
  }

  function includeExcludeHandler(equipmentId) {
    if(eqId.indexOf(equipmentId)===-1){
    setEqId(eqId+","+equipmentId);
    setFormField("equip_ids",eqId+","+equipmentId)

    }else{
      setEqId(eqId.replace(`,${equipmentId}`,""))
    setFormField("equip_ids",eqId.replace(`,${equipmentId}`,""))

    }


  }

  return (
    <main>
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
                  <select onChange={(e) => setFormField("categoryId", e.target.value)} name="Banker" id="Banker">
                    {categories.map((item) =>
                      <option value={item.Id}>{item.category}</option>
                    )}
                  </select>
                </div>
                <div className="so-holdr">
                  <label for="">Full Name (Mr / Mrs / Ms)</label>
                  <input onChange={(e) => setFormField("name", e.target.value)} type="text" />
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Mobile Number</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input onChange={(e) => setFormField("mobile_no", e.target.value)} type="text" id="" name="" />
                </div>
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Alternative Mobile Number</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input onChange={(e) => setFormField("alt_mobile_no", e.target.value)} type="text" id="" name="" />
                </div>
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Email Address</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input type="checkbox" id="" name="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input onChange={(e) => setFormField("email_id", e.target.value)} type="text" id="" name="" />
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
                  <input onChange={(e) => setFormField("w_price", e.target.value)} type="text" id="" name="" />
                  <div className="prdi-1_2">
                    <a href="javascript:void(0)">Per / hr</a>
                    <a href="javascript:void(0)" className="per_ev">
                      Per / Day
                    </a>
                  </div>
                </div>
                <div className="prdi-1 ptd-2">
                  <label for="">Discount</label>
                  <input onChange={(e) => setFormField("w_discount", e.target.value)} type="text" id="" name="" />
                  <div className="prdi-1_2">
                    <a href="javascript:void(0)">
                      <i className="icon-Percentage"></i>
                    </a>
                    <a href="javascript:void(0)" className="per_ev">
                      <i className="icon-Rs"></i>
                    </a>
                    <a href="javascript:void(0)" className="per_ev">
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
                        onChange={(e) => setFormField("travel_cost", e.target.value)}
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
                        onChange={(e) => setFormField("accommodation", e.target.value)}
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
                        onChange={(e) => setFormField("food", e.target.value)}
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
                <Link to="/PartnerCompany/popups/PcAddEquipment">
                  <i className="icon-plus"></i>Add Equipment
                </Link>
              </div>
              {
                equipments.map((item, index) =>
                  <div className="cb_mc-holder">
                    <div className="cb_mc_text">
                      <div className="cb_text">
                        <h3>{item.equ_name}</h3>
                      </div>
                      <div className="cb_prise">
                        <div className="inr-cb-holder">
                          <span>{item.equ_price} INR</span>
                        </div>
                        <div className="tg-btn-holder tb-holder">
                          <h3>Include</h3>
                          <label className="switch">
                            <input onChange={()=>includeExcludeHandler(item.Id)} type="checkbox" />
                            <span className="slider"></span>
                          </label>
                          <h3>Exclude</h3>
                        </div>
                      </div>
                    </div>
                    <p>
                      {item.equ_details}
                    </p>
                  </div>)
              }
            </div>

            <div className="photo-video-holder psb-5">
              <PhotoUpload title="Photos"  pcid={pcid} submitCounter={submitCounter} route="/pc_photo" formFieldname="photo_file"/>
              <VideoUpload title={"Video"} pcid={pcid} submitCounter={submitCounter} route="/pc_video" formFieldname="video_file"/>
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
                        onChange={(e) => setFormField("com_name", e.target.value)}
                        type="checkbox"
                        id=""
                        name=""
                        className="cn_check"
                      />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input type="text" id="" name="" />
                </div>
                <div className="so-holdr">
                  <label for="">Company GST (Optional)</label>
                  <div className="c-p-f">
                    <input onChange={gstpickerHandler} id="file-upload" type="file" />
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
                      <input type="checkbox" id="" name="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input onChange={(e) => setFormField("com_contact", e.target.value)} type="text" id="" name="" />
                </div>
                <div className="so-holdr">
                  <div className="mae-holder">
                    <div className="mae-text-holder">
                      <label for="">Company Email</label>
                    </div>
                    <div className="mae-checkbox-holder">
                      <input  type="checkbox" id="" name="" />
                      <label for="">Hidden</label>
                    </div>
                  </div>
                  <input onChange={(e) => setFormField("com_email", e.target.value)} type="text" id="" name="" />
                </div>
              </div>
              <div className="pd-1 so-hodr">
                <div className="so-holdr">
                  <label for="">Company Address</label>
                  <textarea
                    onChange={(e) => setFormField("com_address", e.target.value)}
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Type here Address..."
                  ></textarea>
                  <button onClick={(e) => { e.preventDefault(); setOpenMap(!openMap) }}  >Location from Google map</button>
                </div>
              </div>
              {openMap && <GoogleMapPicker setFormField={setFormField} />}
              <PhotoUpload title="Company Photos (max 10)"  pcid={pcid} submitCounter={submitCounter} route="/pc_photo" formFieldname={"c_photo_file"} />
              <VideoUpload title={"Company Video (max 3)"}  pcid={pcid} submitCounter={submitCounter} route="/pc_video" formFieldname={"c_video_file"}/>
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
                      <input onChange={(e) => setFormField("facebook", e.target.value)} type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 px-0">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={youtub} alt="" />
                      </div>
                      <input onChange={(e) => setFormField("youtube", e.target.value)} type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={twitter} alt="" />
                      </div>
                      <input onChange={(e) => setFormField("twitter", e.target.value)} type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 px-0 mt-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={printrest} alt="" />
                      </div>
                      <input onChange={(e) => setFormField("pinterest", e.target.value)} type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={instagram} alt="" />
                      </div>
                      <input onChange={(e) => setFormField("instagram", e.target.value)} type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                  <div className="col-md-6 col-12 px-0 mt-2">
                    <label for="">
                      <div className="s-pleform-icon">
                        <img src={vimo} alt="" />
                      </div>
                      <input onChange={(e) => setFormField("vimeo", e.target.value)} type="text" placeholder="Enter URL" name="" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="psb-8">
              {/* <Link to="/dashboard"> */}
              <button onClick={onSubmitHandler} >Submit</button>
              {/* </Link>  */}
            </div>
          </form>
        </div>
      </div>
    </div>
    </main>
  );
}

export default PartnerCompany;
