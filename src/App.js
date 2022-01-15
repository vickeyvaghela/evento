import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import NavigationBar from "./components/comman/Navigationbar";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import ForgatePassword from "./components/forget_password";
// import Otp from "./components/otp";
// import NewPassword from "./components/new_password";
// import Dashboard from "./components/Dashb/dashboard";
import Home from "./components/home";

// import Eventcreate from "./components/event_pages/popups/create_event";
// import Event from "./components/event_pages/event";
// import Add_event from "./components/event_pages/add_event";
// import Event_place from "./components/event_pages/Event_place";
// import Event_for from "./components/event_pages/event_for";
// import Add_event_place from "./components/event_pages/popups/Add_event_place";
// import Photo_video from "./components/event_pages/photo_video";
// import Upload_img from "./components/event_pages/popups/upload_img";
// import PersonCapacity from "./components/event_pages/PersonCapacity";
// import AddService from "./components/event_pages/popups/add_service";
// import PriceOfLocation from "./components/event_pages/price_location";
// import TermsAndConditions from "./components/event_pages/TermsAndConditions";
// import EventPreview from './components/event_pages/event_preview';
// import EventView from "./components/event_pages/event_view";
// import LiveEventPopup from "./components/event_pages/popups/liveevent";

// import PersonalSkill from "./components/personal_skill/personalskill";
// import AddEquipment from "./components/personal_skill/pspopup/AddEquipment";
// import UploadImage from "./components/personal_skill/pspopup/UploadImage";

// import PcSelectDecor from "./components/partner_company/pc_popup/pc_selectdecor";
// import PcSelectArtist from "./components/partner_company/pc_popup/pc_selectartist";
// import PcAddDecor from "./components/partner_company/pc_popup/pc_adddecor";
// import PcUploadPhoto from "./components/partner_company/pc_popup/pc_uploadphoto";
// import PcAddArtist from "./components/partner_company/pc_popup/pc_addartist";
// import PartnerCompney from "./components/partner_company/PartnerCompany";
// import PcAddEquipment from "./components/partner_company/pc_popup/pc_addequipment";

// import LanguageChange from "./components/Functionality/language";
// import RedeemCoins from "./components/Functionality/redeem_coins";
// import FAQ from "./components/Functionality/faq";
// import Chatbot from "./components/Functionality/chatbot";
// import Gallery from "./components/Functionality/gallery";
// import SubPlans from "./components/Functionality/subscribeplan";
// import ReferAndEarn from "./components/Functionality/referandearn";

// import CreateNotification from "./components/Notification/createnotification";
// import NMembership from "./components/Notification/n_membership_payment";
// import SelectBusiness from "./components/Notification/selectbusiness";
// import SelectUser from "./components/Notification/selectuser";
// import NotificationMode from "./components/Notification/notificationmode";
// import NSelectPage from "./components/Notification/pageselection";

// import ErrorPage from "./components/comman/404Error/404error";

function App() {
  return (
    <div className="App">
      <Router>
        <Home></Home>
          {/* <Route path="/" exact component={Login} /> */}
        <Switch>
          {/* <Route path="/register" exact component={Register} />
          <Route path="/forgatepassword" exact component={ForgatePassword} />
          <Route path="/otp" exact component={Otp} />
          <Route path="/newpassword" exact component={NewPassword} />
          <Route path="/dashboard" exact component={Home} /> */}

          {/* <Route path="/navigationbar" exact component={NavigationBar} /> */}
          {/* <Switch>

            <Route path="/event" exact component={Event} />
            <Route path="/eventcreate" exact component={Eventcreate} />
            <Route path="/add_event" exact component={Add_event} />
            <Route path="/event_place" exact component={Event_place} />
          </Switch> */}
          {/* <Route path="/event_for" exact component={Event_for} />
          <Route path="/add_event_place" exact component={Add_event_place} />
          <Route path="/photo&video" exact component={Photo_video} />
          <Route path="/upload_photo" exact component={Upload_img} />
          <Route path="/capacity" exact component={PersonCapacity} />
          <Route path="/add_service" exact component={AddService} />
          <Route path="/price_fo_location" exact component={PriceOfLocation} />
          <Route path="/terms&condition" exact component={TermsAndConditions} />
          {/* <Route path="/event_preview" exact component={EventPreview} /> */}
          {/* <Route path="/event_view" exact component={EventView} />
          <Route path="/event_live" exact component={LiveEventPopup} />

          <Route
            path="/personal_skill_business"
            exact
            component={PersonalSkill}
          />
          <Route path="/addequipment" exact component={AddEquipment} />
          <Route path="/uploadphoto" exact component={UploadImage} />

          <Route path="/partnercompany" exact component={PartnerCompney} />
          <Route path="/select_artist" exact component={PcSelectArtist} />
          <Route path="/Signage&Decorations" exact component={PcSelectDecor} />
          <Route path="/pc_add_equpment" exact component={PcAddEquipment} />
          <Route path="/add_artist" exact component={PcAddArtist} />
          <Route path="/add_decor" exact component={PcAddDecor} />
          <Route path="/upload_photo" exact component={PcUploadPhoto} /> */} 

          {/* <Route path="/subscription" exact component={SubPlans} />
          <Route path="/language" exact component={LanguageChange} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/chatbot" exact component={Chatbot} />
          <Route path="/redeemcoin" exact component={RedeemCoins} />
          <Route path="/refer_and_earn" exact component={ReferAndEarn} />
          <Route path="/gallery" exact component={Gallery} /> */}

          {/* <Route
            path="/create_notification"
            exact
            component={CreateNotification}
          />
          <Route path="/membership_payment" exact component={NMembership} />
          <Route path="/selectbusiness" exact component={SelectBusiness} />
          <Route path="/selectuser" exact component={SelectUser} />
          <Route path="/notificationmode" exact component={NotificationMode} />
          <Route
            path="/notification_selectPage"
            exact
            component={NSelectPage}
          /> */}

          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
