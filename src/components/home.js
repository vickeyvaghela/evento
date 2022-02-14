import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationBar from "./comman/Navigationbar";

/* #region  Main Pages */
import Login from "./Login";
import Register from "./Register";
import ForgatePassword from "./forget_password";
import NewPassword from "./new_password";
import Otp from "./otp";

import LanguageChange from "../components/language"; 
import RedeemCoins from "../components/redeem_coins"; 
import FAQ from "../components/faq";
import Chatbot from "../components/chatbot";
import Gallery from "../components/gallery";
import SubPlans from "../components/subscribeplan";
import ReferAndEarn from "../components/referandearn";

import ErrorPage from "./404Error/404error";
/* #endregion Main Pages */

/* #region  event pages */
// import Add_event from "../components/event_pages/add_event";
import Event from "../components/event_pages/event";
import AddedEvent from "../components/event_pages/addedEvent";
import Event_for from "../components/event_pages/event_for";
import EventLive from "../components/event_pages/event_live";
import Event_place from "../components/event_pages/Event_place";
import EventPreview from "../components/event_pages/event_preview";
import EventView from "../components/event_pages/event_view";
import PersonCapacity from "../components/event_pages/PersonCapacity";
import Photo_video from "../components/event_pages/photo_video";
import PriceOfLocation from "../components/event_pages/price_location";
import TermsAndConditions from "../components/event_pages/TermsAndConditions";

import Add_event_place from "../components/event_pages/popups/Add_event_place";
import AddService from "../components/event_pages/popups/add_service";
import Eventcreate from "../components/event_pages/popups/create_event";
import LiveEventPopup from "../components/event_pages/popups/liveevent";
import Upload_img from "../components/event_pages/popups/upload_img";
/* #endregion Event Pages */

/* #region  region notification */
import CreateNotification from "../components/Notification/createnotification";
import NMembership from "../components/Notification/n_membership_payment";
import NotificationMode from "../components/Notification/notificationmode";
import NSelectPage from "../components/Notification/pageselection";
import SelectBusiness from "../components/Notification/selectbusiness";
import SelectUser from "../components/Notification/selectuser";
/* #endregion region notification ends */

/* #region  Partner Company starts */
import PartnerCompany from "../components/partner_company/PartnerCompany";
import PcAddArtist from "../components/partner_company/pc_popup/pc_addartist";
import PcAddDecor from "../components/partner_company/pc_popup/pc_adddecor";
import PcAddEquipment from "../components/partner_company/pc_popup/pc_addequipment";
import PcSelectArtist from "../components/partner_company/pc_popup/pc_selectartist";
import PcSelectDecor from "../components/partner_company/pc_popup/pc_selectdecor";
import PcUploadPhoto from "../components/partner_company/pc_popup/pc_uploadphoto";
/* #endregion Partner Company ends */

import PersonalSkill from "../components/personal_skill/personalskill";
import AddEquipment from "../components/personal_skill/pspopup/AddEquipment";
import UploadImage from "../components/personal_skill/pspopup/UploadImage";

import Dashboard from "../components/Dashb/dashboard";
import GoogleMapPicker from "./partner_company/pc_popup/pc_google_map";

function Home() {
	return (
		<>
			<NavigationBar></NavigationBar>
			<Router>
				<Switch>
					{/* <Route path={`/event/Add_event`} component={Add_event} /> */}
					<Route path={`/event/Event`} component={Event} />
					<Route path={`/event/addedEvent/:eventID`} component={AddedEvent} />
					<Route path={`/event/EventView/:eventID`} component={EventView} />


					<Route path={`/event/Event_for`} component={Event_for} />
					<Route path={`/event/EventLive`} component={EventLive} />
					<Route path={`/event/Event_place`} component={Event_place} />
					<Route path={`/event/EventPreview`} component={EventPreview} />
					<Route path={`/event/PersonCapacity`} component={PersonCapacity} />
					<Route path={`/event/Photo_video`} component={Photo_video} />
					<Route path={`/event/PriceOfLocation`} component={PriceOfLocation} />
					<Route path={`/event/TermsAndConditions`} component={TermsAndConditions} />
					<Route path={`/event/popups/Add_event_place`} component={Add_event_place} />
					<Route path={`/event/popups/add_service`} component={AddService} />
					<Route path={`/event/popups/create_event`} component={Eventcreate} />
					<Route path={`/event/popups/liveevent`} component={LiveEventPopup} />
					<Route path={`/event/popups/upload_img`} component={Upload_img} />

					<Route path={`/ErrorPage`} component={ErrorPage} />
					<Route path={`/ForgatePassword`} component={ForgatePassword} />
					<Route path={`/Login`} component={Login} />
					<Route path={`/NewPassword`} component={NewPassword} />
					<Route path={`/Otp`} component={Otp} />
					<Route path={`/Register`} component={Register} />
					<Route path={`/language`} component={LanguageChange} />
					<Route path={`/RedeemCoins`} component={RedeemCoins} />
					<Route path={`/FAQ`} component={FAQ} />
					<Route path={`/Chatbot`} component={Chatbot} />
					<Route path={`/Gallery`} component={Gallery} />
					<Route path={`/ReferAndEarn`} component={ReferAndEarn} />
					<Route path={`/SubPlans`} component={SubPlans} />

					<Route path={`/notification/CreateNotification`} component={CreateNotification} />
					<Route path={`/notification/NMembership`} component={NMembership} />
					<Route path={`/notification/NotificationMode`} component={NotificationMode} />
					<Route path={`/notification/NSelectPage`} component={NSelectPage} />
					<Route path={`/notification/SelectBusiness`} component={SelectBusiness} />
					<Route path={`/notification/SelectUser`} component={SelectUser} />

					<Route path={`/PartnerCompany/popups/PcAddArtist`} component={PcAddArtist} />
					<Route path={`/PartnerCompany/popups/PcAddDecor`} component={PcAddDecor} />
					<Route path={`/PartnerCompany/popups/PcAddEquipment`} component={PcAddEquipment} />
					<Route path={`/PartnerCompany/popups/PcSelectArtist`} component={PcSelectArtist} />
					<Route path={`/PartnerCompany/popups/PcSelectDecor`} component={PcSelectDecor} />
					<Route path={`/PartnerCompany/popups/PcUploadPhoto`} component={PcUploadPhoto} />
					<Route path={`/PartnerCompany`} component={PartnerCompany} />

					<Route path={`/PersonalSkillHome`} component={PersonalSkill} />
					<Route path={`/PersonalSkill/popups/AddEquipment`} component={AddEquipment} />
					<Route path={`/PersonalSkill/popups/UploadImage`} component={UploadImage} />

					<Route path={`/`} component={Dashboard} />
				</Switch>
			</Router>
		</>
	);
}

export default Home;
