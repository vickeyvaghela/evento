import React, { useEffect, useState } from "react";

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";
import axios from "axios";
import { API_URL } from "../constants";


var token = `Token ${localStorage.getItem("token")}`;

function Gallery() {

	const [activeTab, setActiveTab] = useState("all")
	const [fetchedImages, setFetchedImages] = useState([])
	const [fetchedVideos, setFetchedVideos] = useState([])

	async function fetchGalleryVideos() {
		const response = await axios.get(API_URL + "/galleryvideo", { headers: { "Content-Type": "application/json", Authorization: token } })
		// console.log(response.data.data);
		setFetchedVideos(response.data.data)
	}

	async function fetchGalleryImages() {
		const response = await axios.get(API_URL + "/galleryimage", { headers: { "Content-Type": "application/json", Authorization: token } })
		// console.log(response.data.data);
		setFetchedImages(response.data.data)
	}

	useEffect(() => {

		fetchGalleryImages()
		fetchGalleryVideos()
	}, [])

	return (
		<main>
			
		<div className="continent-wrapper ">
			<div className="container">
				<div className="row">
					<div className="item-view-main">
						<div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
							<h2>My Event & Offer</h2>
							<div className="event-offer-date">
								<label for="">
									<i className="icon-date"></i>
									<input type="time" value="" placeholder="" />
								</label>
							</div>
						</div>
						<div className="event-offer-contend">
							<div className="content-tap-bar">
								<ul className="tab-manu">
									<li onClick={() => setActiveTab("all")} data-tab="offer-1" className={(activeTab === "all") ? "current" : ""} >All</li>
									<li onClick={() => setActiveTab("photos")} data-tab="offer-2" className={(activeTab === "photos") ? "current" : ""} >Photos</li>
									<li onClick={() => setActiveTab("videos")} data-tab="offer-3" className={(activeTab === "videos") ? "current" : ""}>Video</li>
								</ul>
							</div>

							{(activeTab === "all" || activeTab === "photos") &&
								<div className="event-continer gallry-m current" id="offer-1">
									<div className="masonry">
										{fetchedImages.map((item, index) =>
											<div key={index} className="brick">
												<img src={"http://eventopackage.com" + item.image} />
											</div>
										)}
									</div>
								</div>}

							{(activeTab === "videos") && 
							<div className="event-continer gallry-m current" id="offer-3">
									<div className="masonry ">
										{
											fetchedVideos?.map((item, index) =>
												<div key={index} className="vi-main">
													<a href={"http://eventopackage.com" + item.video} target="_blank">
													<div  className="brick">
														<video style={{ height: "100%", width: "100%" }} src={"http://eventopackage.com" + item.video} />
														<div className="bt-play"></div>
													</div>
													</a>
												</div>
											)
										}
									</div>
								</div>
							}
						</div>

					</div>
				</div>
			</div>
		</div >
		</main>


	);
}



export default Gallery;


{/* <div className="vi-main">
	<div className="brick">
		<img src="https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
		<div className="bt-play"></div>
	</div>
	<div className="video-container">
		<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
	</div>
</div> */}