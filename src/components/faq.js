import React from "react";
import $ from 'jquery';

import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/icon/font/style.css";


function FAQ() {
	return (
		<main>
			
		<div className="continent-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
						<h2>FAQ</h2>
					</div>
					<div className="acc">
						<div className="acc__card2">
							<div className="acc__title2"><h1>What is the meaning of Lorem ipsum? </h1></div>
							<div className="acc__panel2">
								<p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
							</div>
						</div>
						<div className="acc__card2">
							<div className="acc__title2 active"><h1>Where on your website can I open a customer account?</h1></div>
							<div className="acc__panel2">
								<p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
							</div>
						</div>
						<div className="acc__card2">
							<div className="acc__title2"><h1>Do I need to create an account to make an order?</h1></div>
							<div className="acc__panel2">
								<p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
							</div>
						</div>
						<div className="acc__card2">
							<div className="acc__title2"><h1>Why do the prices in the shop sometimes change?</h1></div>
							<div className="acc__panel2">
								<p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
							</div>
						</div>
						<div className="acc__card2">
							<div className="acc__title2"><h1>Do you also sell magazines that have been financed by crowdfunding?</h1></div>
							<div className="acc__panel2">
								<p>You can create a new account at the end of the order process or on the following page: Create new account. You can view all of your orders and subscriptions in your customer account. You can also change your addresses and your password.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</main>

	);
}

$(function () {
  $('.acc__panel2').slideUp();
  $('.acc__title2.active').next().slideDown();
  $('.acc__title2').click(function (j) {


    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().slideUp();
    }
    else {
      $('.acc__title2').removeClass('active');
      $('.acc__panel2').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }

  });
});

export default FAQ;
