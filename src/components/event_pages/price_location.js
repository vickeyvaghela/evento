import React from "react";

import $ from "jquery";
import { Link } from "react-router-dom";

function PriceOfLocation() {
  return (
    <main>
      
    <div className="continent-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
            <Link to="/photo&video" className="back-btnt">
              <i className="icon-Back" aria-hidden="true"></i>
            </Link>
            <h2>Create New</h2>
            <Link to="/add_service" className="provider-place">
              Add Service
            </Link>
            <div className="e-btn">
              <Link to="/event" className="new-btn-creat">
                <i className="icon-plus" aria-hidden="true"></i> Add
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
                  Add
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb2" hidden className="cb-btn" />
                <span>02</span>
                <br />
                <label className="selact-btn" for="cb2">
                  Date & Time
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>03</span>
                <br />
                <label className="selact-btn" for="cb3">
                  seating arrangement
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>04</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Location
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>05</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Photos & Videos
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>06</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Permission
                </label>
              </li>
              <li className="process-stap">
                <input type="checkbox" id="cb3" hidden className="cb-btn" />
                <span>07</span>
                <br />
                <label className="selact-btn" for="cb3">
                  Live Event
                </label>
              </li>
            </ul>
          </div>
          <div className="location-main">
            <div className="Including-radio">
              <div className="r-btn-group place-povider">
                <div className="radio-btn">
                  <span><i className="icon-right"></i></span><label for="r-2">Including Facilities in this price</label>
                </div>
                
                <div className="item-price-holder">
                  <span>Excluding Item Price</span>
                  <div className="Excluding-items-holder">

                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Catrring</h2>
                        <span>250/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input id="someSwitchOptionDefault1" name="someSwitchOption001" type="checkbox" data-toggle-switch />
                            <label for="someSwitchOptionDefault1" className="label-default1"></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para"><p>Lorem Ipsum is simply dummy text of the printing and typestting industry.</p></div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Light</h2>
                        <span>150/PL</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input id="someSwitchOptionDefault2" name="someSwitchOption001" type="checkbox" data-toggle-switch />
                            <label for="someSwitchOptionDefault2" className="label-default1" ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para"><p>Lorem Ipsum is simply dummy text of the printing andtypestting industry.</p></div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Serve Equipment</h2>
                        <span>200/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input
                              id="someSwitchOptionDefault3"
                              name="someSwitchOption001"
                              type="checkbox"
                              data-toggle-switch
                            />
                            <label
                              for="someSwitchOptionDefault3"
                              className="label-default1"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typestting industry.
                        </p>
                      </div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Food</h2>
                        <span>200/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input
                              id="someSwitchOptionDefault4"
                              name="someSwitchOption001"
                              type="checkbox"
                              data-toggle-switch
                            />
                            <label
                              for="someSwitchOptionDefault4"
                              className="label-default1"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typestting industry.
                        </p>
                      </div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Drinks</h2>
                        <span>200/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input
                              id="someSwitchOptionDefault5"
                              name="someSwitchOption001"
                              type="checkbox"
                              data-toggle-switch
                            />
                            <label
                              for="someSwitchOptionDefault5"
                              className="label-default1"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typestting industry.
                        </p>
                      </div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Table</h2>
                        <span>200/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input
                              id="someSwitchOptionDefault6"
                              name="someSwitchOption001"
                              type="checkbox"
                              data-toggle-switch
                            />
                            <label
                              for="someSwitchOptionDefault6"
                              className="label-default1"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typestting industry.
                        </p>
                      </div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>Sofa</h2>
                        <span>200/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input
                              id="someSwitchOptionDefault7"
                              name="someSwitchOption001"
                              type="checkbox"
                              data-toggle-switch
                            />
                            <label
                              for="someSwitchOptionDefault7"
                              className="label-default1"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typestting industry.
                        </p>
                      </div>
                    </div>
                    <div className="excluding-item">
                      <div className="excluding-i-titel">
                        <h2>DJ</h2>
                        <span>200/PP</span>
                        <div className="s-product">
                          <div className="material-switch center-btn">
                            <input
                              id="someSwitchOptionDefault8"
                              name="someSwitchOption001"
                              type="checkbox"
                              data-toggle-switch
                            />
                            <label
                              for="someSwitchOptionDefault8"
                              className="label-default1"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className=" excluding-para">
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typestting industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-prw-holder ">
        <Link to="/photo&video" className="prew">
          <i className="icon-Back"></i>Back
        </Link>
        <Link to="/capacity" className="next">
          Next<i className="icon-Next"></i>
        </Link>
      </div>
    </div>
    </main>

  );
}

export default PriceOfLocation;
