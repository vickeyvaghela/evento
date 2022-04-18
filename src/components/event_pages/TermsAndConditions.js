import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faBold, faItalic, faUnderline, faAlignLeft, faAlignCenter, faAlignRight, faAlignJustify, faListUl ,faListOl } from "@fortawesome/free-solid-svg-icons";

import fb from "../../assets/img/fb-1.png"
import youtub from "../../assets/img/youtube 1.png"
import twitter from "../../assets/img/twitter-1.png"
import printrest from "../../assets/img/printpest.png"
import instagram from "../../assets/img/instagram 1.png"
import vimo from "../../assets/img/vimo.png"
import { Link } from "react-router-dom";

function TermsAndConditions() {
  return (
      <main>
          
    <div className="continent-wrapper">
                   <div className="container">
                       <div className="row">
                            <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">                            
                                <Link to="/capacity" className="back-btnt"><i className="icon-Back" aria-hidden="true"></i></Link>                               
                                <h2>Create New</h2>
                                <div className="e-btn">
                                    <Link to="/event" className="new-btn-creat"><i className="icon-plus" aria-hidden="true"></i>Add</Link>
                                </div>                              
                            </div> 
                           <div className="process-wrapper">
                            <ul>
                                <li className="process-stap">
                                    <input type="checkbox" id="cb1" hidden className="cb-btn"/>
                                    <span>01</span><br/>
                                    <label className="selact-btn" for="cb1">Add</label>
                                </li>
                                <li className="process-stap">
                                   <input type="checkbox" id="cb2" hidden className="cb-btn"/>
                                   <span>02</span><br/>
                                   <label className="selact-btn" for="cb2">Date & Time</label>                                   
                               </li>
                               <li className="process-stap">
                                   <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                                   <span>03</span><br/>
                                   <label className="selact-btn" for="cb3">seating arrangement</label>                                   
                               </li>
                               <li className="process-stap">
                                   <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                                   <span>04</span><br/>
                                   <label className="selact-btn" for="cb3">Location</label>                                   
                               </li>
                               <li className="process-stap">
                                   <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                                   <span>05</span><br/>
                                   <label className="selact-btn" for="cb3">Photos & Videos</label>                                   
                               </li>
                               <li className="process-stap">
                                   <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                                   <span>06</span><br/>
                                   <label className="selact-btn" for="cb3">Permission</label>                                   
                               </li>
                               <li className="process-stap">
                                   <input type="checkbox" id="cb3" hidden className="cb-btn"/>
                                   <span>07</span><br/>
                                   <label className="selact-btn" for="cb3">Live Event</label>                                   
                               </li>                                
                            </ul>
                           </div> 
                           <div className="event-wrapper">                           
                               <div className="person-capacity-holder">

                                    <div className="textaditor">
                                        <div className="toolbar">
                                        <div className="fore-wrapper"><FontAwesomeIcon icon={faFont}/>
                                            <div className="fore-palette">
                                            </div>
                                        </div>
                                        <a href="#" data-command='bold'><FontAwesomeIcon icon={faBold}/></a>
                                        <a href="#" data-command='italic'><FontAwesomeIcon icon={faItalic}/></a>
                                        <a href="#" data-command='underline'><FontAwesomeIcon icon={faUnderline}/></a>
                                        <a href="#" data-command='justifyLeft'><FontAwesomeIcon icon={faAlignLeft}/></a>
                                        <a href="#" data-command='justifyCenter'><FontAwesomeIcon icon={faAlignCenter}/></a>
                                        <a href="#" data-command='justifyRight'><FontAwesomeIcon icon={faAlignRight}/></a>
                                        <a href="#" data-command='justifyFull'><FontAwesomeIcon icon={faAlignJustify}/></a>
                                        <a href="#" data-command='insertUnorderedList'><FontAwesomeIcon icon={faListUl}/></a>
                                        <a href="#" data-command='insertOrderedList'><FontAwesomeIcon icon={faListOl}/></a>
                                        <a href="#" data-command='h1'>H1</a>
                                        <a href="#" data-command='h2'>H2</a>
                                        </div>
                                        <textarea id='editor' placeholder="text type" contenteditable>
                                        </textarea>
                                    </div> 

                                    <div className="social-media-main">
                                        <span>Social Media</span>
                                        <div className="s-pletform">
                                           <div className="row mx-0 mt-1">
                                                <div className="col-md-6 col-12 pl-0 pr-2">
                                                    <label for="">
                                                        <div className="s-pleform-icon">
                                                            <img src={fb} alt=""/> 
                                                        </div>                                                        
                                                        <input type="text" placeholder="Enter URL" name=""/>
                                                    </label>
                                                </div>
                                                <div className="col-md-6 col-12 px-0">
                                                    <label for="">
                                                        <div className="s-pleform-icon">
                                                            <img src={youtub} alt=""/>
                                                        </div>                                                       
                                                        <input type="text" placeholder="Enter URL" name=""/>
                                                    </label>
                                                </div>
                                                <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                                                    <label for="">
                                                        <div className="s-pleform-icon">
                                                            <img src={twitter} alt=""/>
                                                        </div>                                                        
                                                        <input type="text" placeholder="Enter URL" name=""/>
                                                    </label>
                                                </div>
                                                <div className="col-md-6 col-12 px-0 mt-2">
                                                    <label for="">
                                                        <div className="s-pleform-icon">
                                                            <img src={printrest} alt=""/>
                                                        </div>                                                       
                                                        <input type="text" placeholder="Enter URL" name=""/>
                                                    </label>
                                                </div>
                                                <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                                                    <label for="">
                                                        <div className="s-pleform-icon">
                                                            <img src={instagram} alt=""/>
                                                        </div>                                                        
                                                        <input type="text" placeholder="Enter URL" name=""/>
                                                    </label>
                                                </div>
                                                <div className="col-md-6 col-12 px-0 mt-2">
                                                    <label for="">
                                                        <div className="s-pleform-icon">
                                                            <img src={vimo} alt=""/>
                                                        </div>                                                        
                                                        <input type="text" placeholder="Enter URL" name=""/>
                                                    </label>
                                                </div>
                                           </div>                                          
                                        </div>
                                        <div className="form-check check-input-s">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                            <label className="form-check-label" for="exampleCheck1">Accept Your Terms and Conditions</label>
                                        </div>
                                        <div className="event-other-btn">
                                            <Link to="/event_live"><button>Sumbit</button></Link>
                                        </div>
                                    </div>
                                    
                               </div>                                
                           </div>
                       </div>
                   </div>
                   <div className="next-prw-holder ">
                        <Link to="/capacity" className="prew"><i className="icon-Back"></i>Back</Link>
                        <Link to="/event" className="next">Next<i className="icon-Next"></i></Link>
                  </div>
              </div>
      </main>

  );
}


export default TermsAndConditions;
