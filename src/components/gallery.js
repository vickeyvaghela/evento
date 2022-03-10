import React,{useEffect} from "react";
import $ from 'jquery';

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";



function Gallery() {
	useEffect(() => {

			$('.content-tap-bar ul.tab-manu li').click(function () {
				var tab_id = $(this).attr('data-tab');

				$('.content-tap-bar ul.tab-manu li').removeClass('current');
				$('.event-continer').removeClass('current');

				$(this).addClass('current');
				$("#" + tab_id).addClass('current');
			});

			$(".vi-main").click(function () {
				$('iframe', this)[0].src += "&amp;autoplay=1";
				$(this).addClass('open');
			});

	}, [])

	return (
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
									<li data-tab="offer-1" className="current">All</li>
									<li data-tab="offer-2">Photos</li>
									<li data-tab="offer-3">Video</li>
								</ul>
							</div>

							<div className="event-continer gallry-m current" id="offer-1">
								<div className="masonry">
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1556228841-a3c527ebefe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1524&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560164365-0811bf2ee413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560178783-7d75fc1261e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3834&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560091410-7175d14a48f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560082847-0fe9da933ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1560087219-ce9ab9604990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560145836-d22431066353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2300&q=80" />
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1560097282-32eef95738b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1531&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560121161-4712d6f6cafc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560150063-7fc89bd73bd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560138040-a430c9552273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1520&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1549291536-e425d96af374?ixlib=rb-1.2.1&auto=format&fit=crop&w=3067&q=80" />
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1553367998-6ea7e682d40c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1553367998-6ea7e682d40c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560139517-d689341179a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3451&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560033311-b9b5cf8cbaa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1924&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560053260-ad5b8f3170f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1560097282-32eef95738b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1531&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560044267-be94615b8d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1559989960-106e6cd6273e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3500&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1559924508-1461423083c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3067&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1559861796-cc4eb7e3cf01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1901&q=80" />
									</div>
								</div>
							</div>

							<div className="event-continer gallry-m" id="offer-2">
								<div className="masonry">
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1556228841-a3c527ebefe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1524&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560164365-0811bf2ee413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560178783-7d75fc1261e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3834&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560091410-7175d14a48f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
									</div>
									<div className="brick">
										<img src="https://images.unsplash.com/photo-1560082847-0fe9da933ef4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80" />
									</div>
								</div>
							</div>

							<div className="event-continer gallry-m" id="offer-3">
								<div className="masonry">
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1558980394-dbb977039a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1560097282-32eef95738b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1531&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1553367998-6ea7e682d40c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
									<div className="vi-main">
										<div className="brick">
											<img src="https://images.unsplash.com/photo-1560087219-ce9ab9604990?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1576&q=80" />
											<div className="bt-play"></div>
										</div>
										<div className="video-container">
											<iframe width="590" height="332" src="https://www.youtube.com/embed/qIjZqxqDTNM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}



export default Gallery;
