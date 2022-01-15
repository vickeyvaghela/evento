import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/icon/font/style.css";

import place from "../../assets/img/park-bro.png";
import ps from "../../assets/img/prosnal skill bussiness.png";
import pc from "../../assets/img/pranter company business.png";

import Event from "../event_pages/event";
import PersonalSkill from "../personal_skill/personalskill";
import PartnerCompney from "../partner_company/PartnerCompany";
import NavigationBar from "../comman/Navigationbar";

function Dashboard({ match }) {
  return (
    <>
    {/* <NavigationBar/> */}
    {/* <Router> */}
    <main>
      <div class="continent-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-12 col-lg-12 evant-titel event-add">
              <div className="r-btn-group">
                <div className="cns-titel">
                  <span>What is Your Business?</span>
                </div>

                <div className="wiyb-box">
                  <div className="wiyb-holder">
                    <Link to={`/event/Event`}>
                      <img src={place} alt="" />
                      <div className="wiyb-text-holder">
                        <span>Hve you Places?</span>
                      </div>
                    </Link>
                  </div>

                  <div className="wiyb-holder">
                    <Link to={`/PersonalSkillHome`}>
                      <img src={ps} alt="" />
                      <div className="wiyb-text-holder">
                        <span>Personal skills business</span>
                      </div>
                    </Link>
                  </div>
                  <div className="wiyb-holder">
                    <Link to={`${match.path}/partnercompany`}>
                      <img src={pc} alt="" />
                      <div className="wiyb-text-holder">
                        <span>Partner Company Business</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* <Switch>
          <Route path={`${match.path}/event`} exact component={Event} />
          <Route
            path={`${match.path}/personal_skill_business`} exact
            component={PersonalSkill}
          />
          <Route
            path={`${match.path}/partnercompany`} exact
            component={PartnerCompney}
          />
        </Switch> */}
     
      </div>
      </main>
      {/* </Router> */}
      </>
  );
}

export default Dashboard;
