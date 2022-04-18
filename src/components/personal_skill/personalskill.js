import React, { useEffect, useState, useRef } from "react";

import { API_URL } from "../../constants";




import ps1 from "../../assets/img/ph1.png"
import ps2 from "../../assets/img/ph2.png"
import fbIcon from "../../assets/img/fb-1.png"
import youtubeIcon from "../../assets/img/youtube 1.png"
import twitterIcon from "../../assets/img/twitter-1.png"
import printrestIcon from "../../assets/img/printpest.png"
import instagramIcon from "../../assets/img/instagram 1.png"
import vimeoIcon from "../../assets/img/vimo.png"
import { Link } from "react-router-dom";

import Modal from "./../comman/modal/Modal";
import AddEquipment from "./pspopup/AddEquipment";
import Switch from '@mui/material/Switch';
import UploadImage from "./pspopup/UploadImage";
import GoogleMapPicker from "../partner_company/pc_popup/pc_google_map";






const axios = require("axios");


var token = `Token ${localStorage.getItem("token")}`;
var userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : 0;


function PersonalSkill() {


	const [modalState, set_modalState] = useState(false);
	const [imagePopup, setImagePopUp] = useState(false)
	const [equipmentPopUp, setEquipMentPopUp] = useState(false)
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


	const [personalSkills, setPersonalSkills] = useState([])
	const [categoryMain, setCategoryMain] = useState([])
	const [subCategory, setSubCategory] = useState([])
	const [equipment, setEquipment] = useState([])
	const [uploadImageList, setUploadImage] = useState([])
	const [images, setImages] = useState([])
	const [videos, setVideos] = useState([])
	const [videoUpdate, setVideoUpdate] = useState([])
	const [request, setRequest] = useState("")
	const [isLoading, setIsLoading] = useState(true)
	const [openMap, setOpenMap] = useState(false)
	const [location, setLocation] = useState({let:"",long:""})
	//formdata

	const [pro_category, setPro_Category] = useState("")
	const [profession, setProfession] = useState("")
	const [name, setName] = useState("")
	const [mobile_no, setMobile_no] = useState("")
	const [alt_mobile_no, setAlt_mobile_no] = useState("")
	const [email, setEmail] = useState("")
	const [work_price, setWork_Price] = useState(0)
	const [isPricePerHr, setIsPricePerHr] = useState(true)
	const [work_discount, setWorkDiscount] = useState(0)
	const [discount_isPer, setDiscount_isPer] = useState(false)
	// const [calc_price, setCalc_price] = useState("")
	const [travel_cost, setTravelCost] = useState("")
	const [accommodation, setAccommodation] = useState()
	const [food, setFood] = useState()
	const [equip_name, setEquipName] = useState()
	const [equip_price, setEquipPrice] = useState("")
	const [com_name, setComName] = useState("")
	const [com_gstfile, setComGstFile] = useState([])
	const [com_contact, setComContact] = useState("")
	const [com_email, setComEmail] = useState("")
	const [com_address, setComAddress] = useState("")
	const [facebook, setFacebook] = useState("")
	const [youtube, setYouTube] = useState("")
	const [twitter, setTwitter] = useState("")
	const [pinterest, setPinterest] = useState("")
	const [instagram, setInstagram] = useState("")
	const [vimeo, setVimeo] = useState("")
	const [EquipmentArray, setEquipmentArray] = useState([])

	const getCategoryMain = async () => {
		const data = await axios.get(`${API_URL}/ps_category`, { headers: { "Content-Type": "application/json", Authorization: token } })
		console.log('data',data);
		if (data && data.data) {
			setCategoryMain(data.data.data)
			setPro_Category(data.data.data[0].Id)
		}
	}
	const getPersonalSkill = async () => {
		const data = await axios.get(`${API_URL}/personalskill`, { headers: { "Content-Type": "application/json", Authorization: token } })
		if (data && data.data && data.data.data.length > 0) {
			setPersonalSkills(data.data.data[0])
			setPro_Category(data.data.data[0].pro_category_id)
			setProfession(data?.data?.data[0]?.profession_id)
			setName(data?.data?.data[0]?.name)
			setMobile_no(data?.data?.data[0]?.mobile_no)
			setAlt_mobile_no(data?.data?.data[0]?.alt_mobile_no)
			setEmail(data?.data?.data[0]?.email)
			setWork_Price(data?.data?.data[0]?.work_price)
			setWorkDiscount(data?.data?.data[0]?.work_discount)
			setTravelCost(data?.data?.data[0]?.travel_cost)
			setAccommodation(data?.data?.data[0]?.accommodation)
			setFood(data?.data?.data[0]?.food)
			setEquipName(data?.data?.data[0]?.equip_name)
			setEquipPrice(data?.data?.data[0]?.equip_price)
			setComName(data?.data?.data[0]?.com_name)
			setComGstFile(data?.data?.data[0]?.com_gstfile)
			setComContact(data?.data?.data[0]?.com_contact)
			setComEmail(data?.data?.data[0]?.com_email)
			setComAddress(data?.data?.data[0]?.com_address)
			setFacebook(data?.data?.data[0]?.facebook)
			setYouTube(data?.data?.data[0]?.youtube)
			setTwitter(data?.data?.data[0]?.twitter)
			setPinterest(data?.data?.data[0]?.pinterest)
			setInstagram(data?.data?.data[0]?.instagram)
			setVimeo(data?.data?.data[0]?.vimeo)
			setEquipmentArray(data.data.data[0].equip_ids.split(","))

			setRequest("put")
			setIsLoading(false)
			return
		}
		setRequest("post")
		setIsLoading(false)
	}
	const getSubCategory = async () => {
		const data = await axios.get(`${API_URL}/ps_sub_category/${pro_category}`, { headers: { "Content-Type": "application/json", Authorization: token } })
		console.log('data',data);
		if (data && data.data && data.data.data.length > 0) {
			setSubCategory(data.data.data)
		}

	}
	const getEquipMent = async () => {
		const data = await axios.get(`${API_URL}/ps_add_equipment`, { headers: { "Content-Type": "application/json", Authorization: token } })
		if (data && data.data && data.data.data.length > 0) {
			setEquipment(data.data.data)
		}
	}
	const handleEquipement = (e, data) => {
		if (EquipmentArray.indexOf(JSON.stringify(data.Id)) === -1) {
			setEquipmentArray([...EquipmentArray, JSON.stringify(data.Id)])
			return
		}
		else {
			let modifiedArr = [...EquipmentArray];
			let indx = modifiedArr.findIndex(
				(x) => x === JSON.stringify(data.Id)
			);
			modifiedArr.splice(indx, 1);
			setEquipmentArray(modifiedArr);
		}
	}
	const getImages = async () => {
		const data = await axios.get(`${API_URL}/ps_add_photo`, { headers: { "Content-Type": "application/json", Authorization: token } })
		console.log('getImages',data);
		if (data && data.data && data.data.data.length > 0) {
			setImages(data.data.data)
		}
	}
	const getVideos = async () => {
		const data = await axios.get(`${API_URL}/ps_add_video`, { headers: { "Content-Type": "application/json", Authorization: token } })
		if (data && data.data && data.data.data.length > 0) {
			setVideos(data.data.data)
		}
	}
	const handleComPhotoChange = async (e, id) => {
		if (personalSkills.Company_photo.length + e.target.files.length <= 10) {

			const form = new FormData()
			for (let i = 0; i < e.target.files.length; i++) {
				form.append("c_photo_file", e.target.files[i])
			}
			form.append("p_skill", parseInt(id))
			if (form) {
				const data = await axios.post(`${API_URL}/ps_add_com_photo`, form, { headers: { "Content-Type": "application/json", Authorization: token } })
				if (data && data.data && data.data.isSuccess) {
					// set_modalState(false)
					getPersonalSkill()
				}
			}
		}
	}
	const handleComVideoChange = async (e, id) => {
		console.log('e.target.files.length', e.target.files.length );
		// if (personalSkills.Company_video.length + e.target.files.length <= 3) {
		if ( e.target.files.length <= 3) {
			const form = new FormData()
			for (let i = 0; i < e.target.files.length; i++) {
				form.append("c_video_file", e.target.files[i])
			}
			form.append("p_skill", parseInt(id))
			if (form) {
				const data = await axios.post(`${API_URL}/ps_add_com_video`, form, { headers: { "Content-Type": "application/json", Authorization: token } })
				console.log('videoUpload',data);
				if (data && data.data && data.data.isSuccess) {
					// set_modalState(false)
					getPersonalSkill()
				}
			}
		}
	}
	const handleUploadVideo = async (e, id) => {

		const form = new FormData()
		for (let i = 0; i < e.target.files.length; i++) {
			form.append("video_file", e.target.files[i])
		}
		form.append("p_skill", parseInt(id))
		if (form) {
			const data = await axios.post(`${API_URL}/ps_add_video`, form, { headers: { "Content-Type": "application/json", Authorization: token } })
			if (data && data.data && data.data.isSuccess) {
				getVideos()
			}
		}
	}
	const handlePdfChange = async (e) => {
		setComGstFile(e.target.files)
	}
	const onSubmit = async (e) => {
		e.preventDefault()
		const dataForm = new FormData()
		if(typeof com_gstfile ==='object' && com_gstfile!==null){
			console.log("coming here")
			for (let i = 0; i < com_gstfile.length; i++) {
				dataForm.append("com_gstfile", com_gstfile[i])
			}
		}
		else{

			dataForm.append("com_gstfile" , com_gstfile)
		}
		let calc_price=0
		if (discount_isPer) {
			calc_price = work_price -(work_price * work_discount/100)
		}else{
			calc_price = work_price - work_discount
		}
			dataForm.append("User", userId)
			dataForm.append("pro_category", pro_category)
			dataForm.append("profession", profession)
			dataForm.append("name", name)
			dataForm.append("mobile_no", mobile_no)
			dataForm.append("alt_mobile_no", alt_mobile_no)
			dataForm.append("email", email)
			dataForm.append("work_price", work_price)
			dataForm.append("is_price_per_hr", isPricePerHr)
			dataForm.append("work_discount", work_discount)
			dataForm.append("price", calc_price)
			dataForm.append("travel_cost", travel_cost === false ? "no" : travel_cost)
			dataForm.append("accommodation", accommodation === false ? "no" : accommodation)
			dataForm.append("food", food === false ? "no" : food)
			dataForm.append("equip_name", equip_name)
			dataForm.append("equip_price", equip_price)
			dataForm.append("com_name", com_name)
			// dataForm.append("com_gstfile",com_gstfile)
			dataForm.append("com_contact", com_contact)
			dataForm.append("com_email", com_email)
			dataForm.append("com_address", com_address)
			dataForm.append("facebook", facebook)
			dataForm.append("youtube", youtube)
			dataForm.append("twitter", twitter)
			dataForm.append("pinterest", pinterest)
			dataForm.append("instagram", instagram)
			dataForm.append("vimeo", vimeo)
			dataForm.append("equip_ids", EquipmentArray.toString())
			dataForm.append("let", location.let)
			dataForm.append("long", location.long)


			if (request === "put") {
				const data = await axios.put(`${API_URL}/personalskill`, dataForm, { headers: { "Content-Type": "application/json", Authorization: token } })
				return
			}
			const data = await axios.post(`${API_URL}/personalskill`, dataForm, { headers: { "Content-Type": "application/json", Authorization: token } })
		

	}

	function setFormField(key,value) {
		setLocation((prevState)=>{
			return{...prevState,[key]:value}
		})
	}

	useEffect(() => {
		getImages()
		getVideos()
	}, [imagePopup])
	useEffect(() => {
		getEquipMent()

	}, [equipmentPopUp])
	useEffect(() => {

		console.log('pro_category',pro_category);
		getSubCategory()
	}, [pro_category])
	useEffect(() => {
		getPersonalSkill()
		getCategoryMain()
	}, [])
	return (
		!isLoading && <main>
			<div className="continent-wrapper">
				<div className="container">
					<div className="persk-holder">
						<h2>Personal Skill Business</h2>
					</div>
					<div className="persk_form_holder">

						<div className="psb-1">
							<label for="">Select Option</label>
							<select name="categorymain" id="categorymain" onChange={(e) => { setPro_Category(e.target.value) }}>
								{categoryMain.map((data) => (
									<option selected={personalSkills.pro_category_id === data.Id} value={data.Id}>{data.category}</option>
								))}
							</select>
						</div>
						<div className="psb-2">
							<h3>Personal Details</h3>
							<div className="pd-1">
								<div className="so-holdr">
									<label for="">Select Option</label>
									<select name="Banker" id="Banker" onChange={(e) => { setProfession(e.target.value) }}>
										{subCategory.map((data) => (

											<option selected={personalSkills.pro_category === data.category} value={data.Id}>{data.category}</option>
										))}
									</select>
								</div>
								<div className="so-holdr">
									<label for="">Full Name (Mr / Mrs / Ms)</label>
									<input defaultValue={personalSkills.name} onChange={(e) => { setName(e.target.value) }} type="text" />
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
									<input defaultValue={personalSkills.mobile_no} type="text" id="" name="" />
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
									<input onChange={(e) => { setAlt_mobile_no(e.target.value) }} type="text" id="" name="" defaultValue={personalSkills.alt_mobile_no} />
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
									<input type="text" id="" name="" defaultValue={personalSkills.email} onChange={(e) => { setEmail(e.target.value) }} />
								</div>
							</div>
						</div>
						<div className="psb-3">
							<h3>Work Details</h3>
							<div className="pd-holder">
								<div className="prdi-1 ptd-1">
									<label for="">Price</label>
									<input type="text" id="" name="" defaultValue={personalSkills.work_price} onChange={(e) => { setWork_Price(e.target.value) }} />
									<div  className="prdi-1_2 pt">
										<a onClick={()=>setIsPricePerHr(true)} className={`${isPricePerHr?"":"per_ev"}`} >Per / hr</a>
										<a onClick={()=>setIsPricePerHr(false)} className={`${isPricePerHr?"per_ev":""}`}>Per / Day</a>
									</div>
								</div>
								<div className="prdi-1 ptd-2">
									<label for="">Discount</label>
									<input type="text" id="" name="" defaultValue={personalSkills.work_discount} onChange={(e) => { setWorkDiscount(e.target.value) }} />
									<div className="prdi-1_2 pt">
										<a onClick={()=>setDiscount_isPer(true)}  className={` ${discount_isPer?"":"per_ev"}`}>%</a>
										<a onClick={()=>setDiscount_isPer(false)}  className={` ${discount_isPer?"per_ev":""}`}><i className="icon-Rs"></i></a>
									</div>
								</div>
							</div>
							<div className="pd-holder tsfmain-holdr">
								<div className="taf-holder">
									<label for="">Travel Cost</label>
									<div className="inclued_exclued-holder">
										<div className="tg-btn-holder">
											<h3>Include</h3>
											<Switch defaultChecked={personalSkills.travel_cost !== "no" ? false : true} onChange={(e) => { setTravelCost(e.target.checked) }} />
											<h3>Exclude</h3>
										</div>
										<div className="ie-text">
											<textarea onChange={(e) => { setTravelCost(e.target.value) }} defaultValue={personalSkills.travel_cost === "no" ? "" : personalSkills.travel_cost} name="" id="" cols="30" rows="10" placeholder="Enter Details..."></textarea>
										</div>
									</div>
								</div>
								<div className="taf-holder">
									<label for="">Accommodation</label>
									<div className="inclued_exclued-holder">
										<div className="tg-btn-holder">
											<h3>Include</h3>

											<Switch defaultChecked={personalSkills.accommodation !== "no" ? false : true} onChange={(e) => { setAccommodation(e.target.checked) }} />

											<h3>Exclude</h3>
										</div>
										<div className="ie-text">
											<textarea onChange={(e) => { setAccommodation(e.target.value) }} name="" id="" cols="30" rows="10" defaultValue={personalSkills.accommodation === "no" ? "" : personalSkills.accommodation} placeholder="Enter Details..."></textarea>
										</div>
									</div>
								</div>
								<div className="taf-holder">
									<label for="">Food</label>
									<div className="inclued_exclued-holder">
										<div className="tg-btn-holder">
											<h3>Include</h3>
											<Switch defaultChecked={personalSkills.food !== "no" ? false : true} onChange={(e) => { setFood(e.target.checked) }} />
											<h3>Exclude</h3>
										</div>
										<div className="ie-text">
											<textarea onChange={(e) => { setFood(e.target.value) }} name="" id="" cols="30" rows="10" placeholder="Enter Details..." defaultValue={personalSkills.food === "no" ? "" : personalSkills.food}></textarea>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="psb-4">
							<div className="equi-holder">
								<h3>Equipment</h3>
								<div onClick={() => { setEquipMentPopUp(true) }}><i className="icon-plus"></i>Add Equipment</div>
								<Modal title="My Modal" onClose={() => setImagePopUp(false)} show={equipmentPopUp}>
									<AddEquipment id={personalSkills.perskillId} method="image" uploadImageList={uploadImageList} setUploadImage={setUploadImage} set_modalState={setEquipMentPopUp} />
								</Modal>
							</div>
							{equipment.map((data) => (
								<div className="cb_mc-holder">


									<div className="cb_mc_text">
										<div className="cb_text">
											<h3>{data.equ_name}</h3>
										</div>
										<div className="cb_prise">
											<div className="inr-cb-holder">
												<span>{`${data.equ_price} INR`}</span>
											</div>
											<div className="tg-btn-holder tb-holder">
												<h3>Include</h3>
												<Switch defaultChecked={EquipmentArray.indexOf(JSON.stringify(data.Id)) !== -1 ? true : false} onChange={(e) => { handleEquipement(e, data) }} />
												<h3>Exclude</h3>
											</div>
										</div>
									</div>
									<p>{data.equ_details + data.Id}</p>
								</div>
							))}
						</div>
						<div className="photo-video-holder psb-5">
							<div className="p-v-main">
								<h1>Photos </h1>
								<div className="poster-m">
									<div onClick={() => setImagePopUp(true)} className="images-selctor ">
										<Modal title="My Modal" onClose={() => setImagePopUp(false)} show={imagePopup}>
											{console.log(personalSkills.perskillId)}
											<UploadImage id={personalSkills.perskillId} method="image" uploadImageList={uploadImageList} setUploadImage={setUploadImage} set_modalState={setImagePopUp} />
										</Modal>
									</div>
								</div>
							</div>
							<div className="ph-main">
								<span>Uploaded Photo</span>
								<div className="img-holder">
									{images.map((data) => (
										<div className="photo-box p">
											<div className="images-selctor ">
												<img src={`${"http://eventopackage.com"}${data.photo_file}`} className="img-fluid" alt="" />
												<button>Remove</button>
											</div>
										</div>
									))}
								</div>
							</div>
							<div className="p-v-main video-uploder">
								<h1>Videos </h1>
								<div className="poster-m">
									<div className="images-selctor ">
										<input type="file" className="file-input" name="" value="" accept="video/mp4,video/x-m4v,video/*" onChange={(e) => { handleUploadVideo(e, personalSkills.perskillId) }} />
									</div>
								</div>
							</div>
							<div className="ph-main">
								<span>Uploaded Video</span>
								<div className="img-holder">
									{videos.map((data) => (
										<div className="video-main">
											<div className="vedio-item">
												<div className="o-video">
													<video controls width="100%" height="100%" src={`${"http://eventopackage.com"}${data.video_file}`}></video>
												</div>
												<button>Remove</button>
											</div>
										</div>
									))}
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
									<input type="text" id="" name="" defaultValue={personalSkills.com_name} onChange={(e) => { setComName(e.target.value) }} />
								</div>
								<div className="so-holdr">
									<label for="">Company GST (Optional)</label>
									<div className="c-p-f">
										<input id="file-upload" type="file" accept="application/pdf,application/vnd.ms-excel" onChange={(e) => { handlePdfChange(e) }} />
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
									<input type="text" id="" name="" onChange={(e) => { setComContact(e.target.value) }} defaultValue={personalSkills.com_contact} />
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
									<input type="text" id="" name="" defaultValue={personalSkills.com_email} onChange={(e) => { setComEmail(e.target.value) }} />
								</div>
							</div>
							<div className="pd-1 so-hodr">
								<div className="so-holdr">
									<label for="">Company Address</label>
									<textarea defaultValue={personalSkills.com_address} onChange={(e) => { setComAddress(e.target.value) }} name="" id="" cols="30" rows="10" placeholder="Type here Address..."></textarea>
									<button onClick={()=>{setOpenMap(!openMap)}} >Location from Google map</button>
								</div>
							</div>
							{openMap && <GoogleMapPicker setFormField={setFormField} />}
							<div className="pd-1 so-hodr">
								<div className="p-v-main">
									<h3>Company Photos (Upload upto 10Photos max.)</h3>
									<div className="poster-m">
										<div className="images-selctor ">
											<input type="file" className="file-input" multiple name="" value="" accept="image/x-png,image/gif,image/jpeg" onChange={(e) => { handleComPhotoChange(e, personalSkills.perskillId) }} />
										</div>
									</div>
									<div className="ph-main">
										<span>Uploaded Photo</span>
										<div className="img-holder">
											{personalSkills?.Company_photo?.map((data) => (
												<div className="photo-box p">
													<div className="images-selctor ">
														<img src={`${"http://eventopackage.com"}${data.c_photo_file}`} className="img-fluid" alt="" />
														<button>Remove</button>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="pd-1 so-hodr">
								<div className="p-v-main video-uploder">
									<h3>Company Video (Upload upto 3 Video max.)</h3>
									<div className="poster-m">
										<div className="images-selctor ">
											<input onChange={(e) => { handleComVideoChange(e, personalSkills.perskillId) }} type="file" className="file-input" name="" />
										</div>
									</div>
									<div className="ph-main">
										<span>Uploaded Video</span>
										<div className="img-holder">
											{personalSkills?.Company_video?.map((data) => (
												<div className="video-main">
													<div className="vedio-item">
														<div className="o-video">
															<video controls width="100%" height="100%" src={`${"http://eventopackage.com"}${data.c_video_file}`}></video>
														</div>
														<button>Remove</button>
													</div>
												</div>

											))}
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
												<img src={fbIcon} alt="" />
											</div>
											<input type="text" onChange={(e) => { setFacebook(e.target.value) }} defaultValue={personalSkills.facebook} placeholder="Enter URL" name="" />
										</label>
									</div>
									<div className="col-md-6 col-12 px-0">
										<label for="">
											<div className="s-pleform-icon">
												<img src={youtubeIcon} alt="" />
											</div>
											<input type="text" onChange={(e) => { setYouTube(e.target.value) }} defaultValue={personalSkills.youtube} placeholder="Enter URL" name="" />
										</label>
									</div>
									<div className="col-md-6 col-12 pl-0 mt-2 pr-2">
										<label for="">
											<div className="s-pleform-icon">
												<img src={twitterIcon} alt="" />
											</div>
											<input type="text" onChange={(e) => { setTwitter(e.target.value) }} defaultValue={personalSkills.twitter} placeholder="Enter URL" name="" />
										</label>
									</div>
									<div className="col-md-6 col-12 px-0 mt-2">
										<label for="">
											<div className="s-pleform-icon">
												<img src={printrestIcon} alt="" />
											</div>
											<input type="text" onChange={(e) => { setPinterest(e.target.value) }} defaultValue={personalSkills.pinterest} placeholder="Enter URL" name="" />
										</label>
									</div>
									<div className="col-md-6 col-12 pl-0 mt-2 pr-2">
										<label for="">
											<div className="s-pleform-icon">
												<img src={instagramIcon} alt="" />
											</div>
											<input type="text" onChange={(e) => { setInstagram(e.target.value) }} defaultValue={personalSkills.instagram} placeholder="Enter URL" name="" />
										</label>
									</div>
									<div className="col-md-6 col-12 px-0 mt-2">
										<label for="">
											<div className="s-pleform-icon">
												<img src={vimeoIcon} alt="" />
											</div>
											<input type="text" onChange={(e) => { setVimeo(e.target.value) }} defaultValue={personalSkills.vimeo} placeholder="Enter URL" name="" />
										</label>
									</div>
								</div>
							</div>
						</div>
						<div className="psb-8">
							<button onClick={onSubmit}>Sumbit</button>
						</div>

					</div>
				</div>
			</div>
		</main>
	);
}

export default PersonalSkill;
