import React, { useEffect, useState, useRef } from "react";

import { API_URL } from "../../constants";


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

import Modal from "./../comman/modal/Modal";
import AddEquipment from "./pspopup/AddEquipment";



const axios = require("axios");


var token = `Token ${localStorage.getItem("token")}`;
var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0;


function PersonalSkill() {

    const [mainCatList, set_mainCatList] = useState([]);
    const [subCatList, set_subCatList] = useState([]);
    const [equipmentList, set_equipmentList] = useState([]);

    const [modalState, set_modalState] = useState(false);

    let allPrsnlSkillData = {
        mainCatID: 0,
        subCatID: 0,
        fullName: null,
        phone: null, isPhoneHidden: false,
        altPhone: null, isAltPhoneHidden: false,
        email: null, isEmailHidden: false,
        price: null, priceType: null, // 1 => per hr, 2 => per day
        discount: null, discountType: null, // 1 => % , 2 => Rs. 3 => non
        travelCost: null, isTravelCostIncluded: false, travelCostDesc: null,
        accomodationCost: null, isAccomodationCostIncluded: false, accomodationCostDesc: null,
        food: null, isFoodIncluded: false, foodDesc: null,
        equipmentIDS: [], photos: [], videos: [],
        companyName: null, isCompanyNameHidden: false, companyGST: null,
        companyPhone: null, isCompanyPhoneHidden: false,
        companyEmail: null, isCompanyEmailHidden: false,
        companyAddress: null,
        companyPhotos: [], companyVideos: [],

        facebook: null,
        youtube: null,
        twitter: null,
        pinterest: null,
        instagram: null,
        vimeo: null,

    }


    const [allSkillData, set_allSkillData] = useState({});
    const [errData, set_errData] = useState({});

    useEffect(() => {
        (async () => {

            /* #region  get main cat data */
            try {
                const response = await axios.get(`${API_URL}/ps_category`, { headers: { "Content-Type": "application/json", Authorization: token } });

                let tmpList = response.data?.data ?? [];

                if (tmpList.length) {
                    set_mainCatList(tmpList)
                }

            } catch (errCallingEventDataApi) {
                console.log("errCallingEventDataApi", errCallingEventDataApi);
            }
            /* #endregion  */



        })();
    }, []);


    return (
        <main>
            <div className="continent-wrapper">
                <div className="container">
                    <div className="persk-holder">
                        <h2>Personal Skill Business</h2>
                    </div>
                    <div className="persk_form_holder">
                        <form action="" method="post">
                            <div className="psb-1">
                                <label for="">Select Option</label>
                                <select name="Sounds and Lights" id="Sounds and Lights">
                                    <option value="Sounds and Lights">Sounds and Lights</option>
                                    <option value="Sounds and Lights">Sounds Lights</option>
                                    <option value="Sounds and Lights">Sounds Lights</option>
                                    <option value="Sounds and Lights">Sounds Lights</option>
                                </select>
                            </div>
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
                            <div className="psb-3">
                                <h3>Work Details</h3>
                                <div className="pd-holder">
                                    <div className="prdi-1 ptd-1">
                                        <label for="">Price</label>
                                        <input type="text" id="" name="" value="" />
                                        <div className="prdi-1_2">
                                            <a href="">Per / hr</a>
                                            <a href="" className="per_ev">Per / Day</a>
                                        </div>
                                    </div>
                                    <div className="prdi-1 ptd-2">
                                        <label for="">Discount</label>
                                        <input type="text" id="" name="" value="" />
                                        <div className="prdi-1_2">
                                            <a href=""><i className="icon-Percentage"></i></a>
                                            <a href="" className="per_ev"><i className="icon-Rs"></i></a>
                                            <a href="" className="per_ev">Non</a>
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
                                                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Details..."></textarea>
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
                                                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Details..."></textarea>
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
                                                <textarea name="" id="" cols="30" rows="10" placeholder="Enter Details..."></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="psb-4">
                                <div className="equi-holder">
                                    <h3>Equipment</h3>
                                    <Link to="/addequipment"><i className="icon-plus"></i>Add Equipment</Link>
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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                            <div className="photo-video-holder psb-5">
                                <div className="p-v-main">
                                    <h1>Photos Mainnnnn</h1>
                                    <div className="poster-m">
                                        <div className="images-selctor ">
                                            {/* <input type="file" className="file-input" name="" value="" accept="image/*" /> */}
                                            <button type="button" onClick={() => set_modalState(true)} className="new-btn-creat"><i className="icon-plus" aria-hidden="true"></i>Upload Images</button>
                                            <Modal title="My Modal" onClose={() => set_modalState(false)} modalState={modalState}>
                                                <AddEquipment set_modalState={set_modalState} />
                                            </Modal>

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
                                    <h1>Videos mainnnnnn</h1>
                                    <div className="poster-m">
                                        <div className="images-selctor ">
                                            <input type="file" className="file-input" name="" value="" accept="image/*" />
                                        </div>
                                    </div>
                                </div>
                                <div className="ph-main">
                                    <span>Uploaded Video</span>
                                    <div className="img-holder">
                                        <div className="video-main">
                                            <div className="vedio-item">
                                                <div className="o-video">
                                                    <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe>
                                                </div>
                                                <button>Remove</button>
                                            </div>
                                        </div>
                                        <div className="video-main">
                                            <div className="vedio-item">
                                                <div className="o-video">
                                                    <iframe src="https://www.youtube.com/embed/Kch8n4tcOZQ" allowfullscreen></iframe>
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
                                                <input type="checkbox" id="" name="" value="" className="cn_check" />
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
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Type here Address..."></textarea>
                                        <button>Location from Google map</button>
                                    </div>
                                </div>
                                <div className="pd-1 so-hodr">
                                    <div className="p-v-main">
                                        <h3>Compan Photos (Upload upto 10Photos max.)</h3>
                                        <div className="poster-m">
                                            <div className="images-selctor ">
                                                <input type="file" className="file-input" name="" value="" accept="image/*" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pd-1 so-hodr">
                                    <div className="p-v-main video-uploder">
                                        <h3>Company Video (Upload upto 3 Video max.)</h3>
                                        <div className="poster-m">
                                            <div className="images-selctor ">
                                                <input type="file" className="file-input" name="" value="" accept="image/*" />
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
        </main>
    );
}

export default PersonalSkill;
