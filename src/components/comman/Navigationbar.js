import React from "react";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";


import slider_logo from "../../assets/img/slider-logo.png";
import user from "../../assets/img/user-i.png";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'


function NavigationBar({ match }) {

  return (
    <>
      <header class="header-main">
        <div class="header">
          <label for="">
            <input type="text" name="search" value="" placeholder="search"/>
            <i class ="icon-search"></i>
          </label>
          <div class="top-h">
            <a href=""><i class="icon-language" aria-hidden="true"></i></a>
            <a href=""><i class="icon-comeant" aria-hidden="true"></i></a>
            <a href=""><i class="icon-bell" aria-hidden="true"></i></a>
            <div class="uder-info">
              <a href="" class="user-img"><img src={user} class="img-fluid" alt=""/></a>
            </div>
          </div>
        </div>
      </header>
      <aside class="sidebar">
        <div class="side-bar-logo">
          <img src={slider_logo} class="img-fluid" alt="" />
        </div>
        <div class="side-nev">
          {/* <!-- <span>main</span> --> */}
          <ul>
            <li>
              <a href="">
                <i class="icon-deshbord" aria-hidden="true"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-Subsciption" aria-hidden="true"></i>
                Subsciption
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-Refer" aria-hidden="true"></i>
                Refer To Earn
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-redem" aria-hidden="true"></i>
                Redeem
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-Help" aria-hidden="true"></i>
                Help & FAQ
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-Gallery" aria-hidden="true"></i>
                Gallery
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-F-E" aria-hidden="true"></i>
                Festum Evento
              </a>
            </li>
            <li>
              <a href="">
                <i class="icon-Invoice" aria-hidden="true"></i>
                Invoice Perticullerly
              </a>
            </li>
          </ul>
        </div>

      </aside>
    </>
  );
}

export default NavigationBar;
