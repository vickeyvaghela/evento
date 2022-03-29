import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "./../comman/modal/Modal";
import EditEvent from "./popups/edit_event";
import AddPlace from "./popups/AddPlace";
import AddService from "./popups/AddService";
import { API_URL } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFont,
  faBold,
  faItalic,
  faUnderline,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faListUl,
  faListOl,
} from "@fortawesome/free-solid-svg-icons";

import fb from "../../assets/img/fb-1.png";
import youtub from "../../assets/img/youtube 1.png";
import twitter from "../../assets/img/twitter-1.png";
import printrest from "../../assets/img/printpest.png";
import instagram from "../../assets/img/instagram 1.png";
import vimo from "../../assets/img/vimo.png";
import { useHistory } from "react-router-dom";
import Upload_img from "./popups/upload_img";
const axios = require("axios");

var token = `Token ${localStorage.getItem("token")}`;
var userId = localStorage.getItem("userId")
  ? localStorage.getItem("userId")
  : 0;
var userData = localStorage.getItem("userData" + userId)
  ? JSON.parse(localStorage.getItem("userData" + userId))
  : {};

var allTabCloseObj = {
  addNew: { isOpen: false, isUpdated: false },
  for_who_Id: { isOpen: false, isUpdated: false },
  placeProvider: { isOpen: false, isUpdated: false },
  photosAndVideos: { isOpen: false, isUpdated: false },
  priceOfLocation: { isOpen: false, isUpdated: false },
  personParking: { isOpen: false, isUpdated: false },
  other: { isOpen: false, isUpdated: false },
};

function AddedEvent() {
  const { eventID } = useParams();

  let history = useHistory();

  if (userData && userData["event" + eventID]) {
    if (userData["event" + eventID]["for_who_Id"]) {
      allTabCloseObj.for_who_Id = userData["event" + eventID]["for_who_Id"];
    }

    if (userData["event" + eventID]["placeProvider"]) {
      allTabCloseObj.placeProvider =
        userData["event" + eventID]["placeProvider"];
    }

    if (userData["event" + eventID]["photosAndVideos"]) {
      allTabCloseObj.photosAndVideos =
        userData["event" + eventID]["photosAndVideos"];
    }
    allTabCloseObj.addNew = { isOpen: false, isUpdated: true };
  } else {
    allTabCloseObj.addNew = { isOpen: true, isUpdated: true };
  }

  const [show, setShow] = useState(false);

  const [isAddPlacesModalOpen, set_isAddPlacesModalOpen] = useState(false);
  const [isAddServicesModalOpen, set_isAddServicesModalOpen] = useState(false);
  const [isImageUploadModalOpen, set_isImageUploadModalOpen] = useState(false);


  const [eventObj, set_eventObj] = useState({});

  const [allEventData, set_allEventData] = useState({});

  const [placesAry, set_placesAry] = useState([]);
  const [servicesAry, set_servicesAry] = useState([]);

  //const [eventForWhoAry, set_eventForWhoAry] = useState([]);
  //const [forWhoFilter, set_forWhoFilter] = useState(1);

  const [isPutRequest, set_isPutRequest] = useState(false);
  const [eventCategoryID, set_eventCategoryID] = useState(0);

  const set_includingFacility = (isIncluded) => {
    let tmpStateData = { ...allEventData };
    tmpStateData.priceOfLocationTab.IncludingFacilities = isIncluded;
    localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
    set_allEventData(tmpStateData);
  };

  // const [place_description, set_place_description] = useState("");

  useEffect(() => {
    (async () => {
      var tmpEventData = {};
      var tmpPlacesList = [];
      var tmpServicesList = [];
      var tmpForWhoList = [];

      /* #region  get event data */
      try {
        const response = await axios.get(`${API_URL}/events/${eventID}`, {
          headers: { "Content-Type": "application/json", Authorization: token },
        });

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data[0]
        ) {
          set_eventObj(response.data.data[0]);
          tmpEventData = response.data.data[0];

          if (tmpEventData.categoryId) {
            set_eventCategoryID(parseInt(tmpEventData.categoryId) || 0);
          }

          if (
            tmpEventData &&
            tmpEventData.event &&
            tmpEventData.event.length &&
            (tmpEventData.event[0].for_who_Id || tmpEventData.event[0].for_who)
          ) {
            set_isPutRequest(true);
          }
        }
      } catch (errCallingEventDataApi) {
        console.log("errCallingEventDataApi", errCallingEventDataApi);
      }
      /* #endregion  */

      /* #region  add_place_event */
      try {
        const response = await axios.get(`${API_URL}/add_place_event`, {
          headers: { "Content-Type": "application/json", Authorization: token },
        });

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length
        ) {
          set_placesAry(response.data.data);
          tmpPlacesList = response.data.data;
        }
      } catch (errCallingEventDataApi) {
        console.log("errCallingEventDataApi", errCallingEventDataApi);
      }
      /* #endregion  */

      /* #region  add_service_event */
      try {
        const response = await axios.get(`${API_URL}/add_service_event`, {
          headers: { "Content-Type": "application/json", Authorization: token },
        });

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length
        ) {
          set_servicesAry(response.data.data);
          tmpServicesList = response.data.data;
        }
      } catch (errCallingEventDataApi) {
        console.log("errCallingEventDataApi", errCallingEventDataApi);
      }
      /* #endregion  */

      /* #region  event_forwho */
      try {
        let forWhoParam = parseInt(1) === 1 ? "" : "/1";
        const response = await axios.get(
          `${API_URL}/event_forwho${forWhoParam}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length
        ) {
          tmpForWhoList = response.data.data;
        }
      } catch (errCallingEvent_forwhoApi) {
        console.log("errCallingEvent_forwhoApi", errCallingEvent_forwhoApi);
      }
      /* #endregion  */

      let localStoreEvtData = localStorage.getItem("event" + eventID)
        ? JSON.parse(localStorage.getItem("event" + eventID))
        : {};

      let tmpEventStateObj = {};

      if (tmpEventData && tmpEventData.display_name) {
        tmpEventStateObj.display_name = tmpEventData.display_name;
      }
      if (tmpEventData && tmpEventData.eventId) {
        tmpEventStateObj.eventId = tmpEventData.eventId;
      }

      //if(localStoreEvtData.addNewTab)
      tmpEventStateObj.addNewTab = localStoreEvtData.addNewTab
        ? localStoreEvtData.addNewTab
        : { isOpen: true, isUpdated: true };
      // tmpEventStateObj.addNewTab = { isOpen: true, isUpdated: true };

      if (tmpForWhoList.length) {
        tmpEventStateObj.forWhoTab = { isOpen: false, isUpdated: false };
        tmpEventStateObj.forWhoTab.forWhoList = tmpForWhoList;
        if (
          tmpEventData &&
          tmpEventData.event &&
          tmpEventData.event[0] &&
          tmpEventData.event[0] &&
          tmpEventData.event[0]["for_who_Id"]
        ) {
          tmpEventStateObj.forWhoTab.selectedForWhoID =
            tmpEventData.event[0]["for_who_Id"];
        }

        if (localStoreEvtData.forWhoTab) {
          tmpEventStateObj.forWhoTab = localStoreEvtData.forWhoTab;
        }
      }

      if (tmpPlacesList.length) {
        tmpEventStateObj.placeProviderTab = { placesList: tmpPlacesList };
        if (
          tmpEventData &&
          tmpEventData.event &&
          tmpEventData.event[0] &&
          tmpEventData.event[0] &&
          tmpEventData.event[0]["place_Id"]
        ) {
          tmpEventStateObj.placeProviderTab.selectedPlaceID =
            tmpEventData.event[0]["place_Id"];
          tmpEventStateObj.placeProviderTab.place_description =
            tmpEventData.event[0]["place_description"];
        }
        tmpEventStateObj.placeProviderTab.isOpen = false;
        tmpEventStateObj.placeProviderTab.isUpdated = false;

        if (localStoreEvtData.placeProviderTab) {
          tmpEventStateObj.placeProviderTab =
            localStoreEvtData.placeProviderTab;
        }
      }

      tmpEventStateObj.photosAndVideosTab = { isOpen: false, isUpdated: false };
      if (tmpEventData && tmpEventData.image && tmpEventData.image.length) {
        tmpEventStateObj.photosAndVideosTab.imagesList = tmpEventData.image;
      }
      if (tmpEventData && tmpEventData.image && tmpEventData.video.length) {
        tmpEventStateObj.photosAndVideosTab.videosList = tmpEventData.video;
      }
      if (
        tmpEventData.image &&
        tmpEventData.image.length &&
        tmpEventData.image &&
        tmpEventData.video.length
      ) {
        tmpEventStateObj.photosAndVideosTab.isUpdated = true;
      }

      tmpEventStateObj.priceOfLocationTab = { isOpen: false, isUpdated: false };
      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].IncludingFacilities
      ) {
        tmpEventStateObj.priceOfLocationTab.IncludingFacilities = true;
      } else {
        tmpEventStateObj.priceOfLocationTab.IncludingFacilities = false;
      }
      if (tmpServicesList.length) {
        tmpEventStateObj.priceOfLocationTab.servicesList = tmpServicesList;
      }

      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].service &&
        tmpEventData.event[0].service.length
      ) {
        tmpEventStateObj.priceOfLocationTab.selectedServicesList =
          tmpEventData.event[0].service.map((i) => i.s_id);
      }

      if (localStoreEvtData.priceOfLocationTab) {
        tmpEventStateObj.priceOfLocationTab =
          localStoreEvtData.priceOfLocationTab;
      }

      tmpEventStateObj.personParkingTab = { isOpen: false, isUpdated: false };
      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].parking_capacity
      ) {
        tmpEventStateObj.personParkingTab.parking_capacity =
          tmpEventData.event[0].parking_capacity;
      }
      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].person_capacity
      ) {
        tmpEventStateObj.personParkingTab.person_capacity =
          tmpEventData.event[0].person_capacity;
      }
      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].let
      ) {
        tmpEventStateObj.personParkingTab.let = tmpEventData.event[0].let;
      }
      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].long
      ) {
        tmpEventStateObj.personParkingTab.long = tmpEventData.event[0].long;
      }

      if (
        tmpEventData &&
        tmpEventData.event &&
        tmpEventData.event[0] &&
        tmpEventData.event[0].address
      ) {
        tmpEventStateObj.personParkingTab.address =
          tmpEventData.event[0].address;
      }
      if (localStoreEvtData.personParkingTab) {
        tmpEventStateObj.personParkingTab = localStoreEvtData.personParkingTab;
      }

      tmpEventStateObj.otherTab = { isOpen: false, isUpdated: false };
      if (tmpEventData && tmpEventData.event && tmpEventData.event[0]) {
        if (tmpEventData.event[0].t_and_c) {
          tmpEventStateObj.otherTab.t_and_c = tmpEventData.event[0].t_and_c;
        }

        if (tmpEventData.event[0].facebook) {
          tmpEventStateObj.otherTab.facebook = tmpEventData.event[0].facebook;
        }
        if (tmpEventData.event[0].youtube) {
          tmpEventStateObj.otherTab.youtube = tmpEventData.event[0].youtube;
        }
        if (tmpEventData.event[0].twitter) {
          tmpEventStateObj.otherTab.twitter = tmpEventData.event[0].twitter;
        }
        if (tmpEventData.event[0].pinterest) {
          tmpEventStateObj.otherTab.pinterest = tmpEventData.event[0].pinterest;
        }
        if (tmpEventData.event[0].instagram) {
          tmpEventStateObj.otherTab.instagram = tmpEventData.event[0].instagram;
        }
        if (tmpEventData.event[0].vimeo) {
          tmpEventStateObj.otherTab.vimeo = tmpEventData.event[0].vimeo;
        }
      }
      if (localStoreEvtData.otherTab) {
        tmpEventStateObj.otherTab = localStoreEvtData.otherTab;
      }

      set_allEventData(tmpEventStateObj);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      /* #region  event_forwho */
      try {
        let forWhoParam = parseInt(1) === 1 ? "" : "/1";
        const response = await axios.get(
          `${API_URL}/event_forwho${forWhoParam}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data[0]
        ) {
        }
      } catch (errCallingEvent_forwhoApi) {
        console.log("errCallingEvent_forwhoApi", errCallingEvent_forwhoApi);
      }
      /* #endregion  */
    })();
  }, []);

  // const toggleForWho = () => {
  //     if (parseInt(forWhoFilter) === 1) {
  //         set_forWhoFilter(2)
  //     } else {
  //         set_forWhoFilter(1)
  //     }
  // }

  const handleNext = () => {
    console.log("next");

    let tmpStateData = { ...allEventData };

    if (tmpStateData.addNewTab.isOpen) {
      tmpStateData.addNewTab.isOpen = false;
      tmpStateData.forWhoTab.isOpen = true;
    } else if (tmpStateData.forWhoTab.isOpen) {
      if (!tmpStateData.forWhoTab.selectedForWhoID) {
        alert("Please select for who");
      } else {
        tmpStateData.forWhoTab.isOpen = false;
        tmpStateData.forWhoTab.isUpdated = true;
        tmpStateData.placeProviderTab.isOpen = true;
      }
    } else if (tmpStateData.placeProviderTab.isOpen) {
      if (
        tmpStateData.placeProviderTab &&
        tmpStateData.placeProviderTab.selectedPlaceID
      ) {
        tmpStateData.placeProviderTab.isUpdated = true;
        tmpStateData.placeProviderTab.isOpen = false;
        tmpStateData.photosAndVideosTab.isOpen = true;
      } else {
        alert("please select a place");
      }
    } else if (tmpStateData.photosAndVideosTab.isOpen) {
      if (
        tmpStateData.photosAndVideosTab &&
        tmpStateData.photosAndVideosTab.imagesList &&
        tmpStateData.photosAndVideosTab.videosList &&
        tmpStateData.photosAndVideosTab.imagesList.length &&
        tmpStateData.photosAndVideosTab.videosList.length
      ) {
        tmpStateData.photosAndVideosTab.isUpdated = true;
        tmpStateData.photosAndVideosTab.isOpen = false;
        tmpStateData.priceOfLocationTab.isOpen = true;
      } else {
        alert("Please upload video and image");
      }
    } else if (tmpStateData.priceOfLocationTab.isOpen) {
      tmpStateData.priceOfLocationTab.isOpen = false;
      tmpStateData.priceOfLocationTab.isUpdated = true;
      tmpStateData.personParkingTab.isOpen = true;
    } else if (tmpStateData.personParkingTab.isOpen) {
      if (
        tmpStateData.personParkingTab &&
        tmpStateData.personParkingTab.parking_capacity &&
        tmpStateData.personParkingTab.person_capacity &&
        tmpStateData.personParkingTab.address
      ) {
        tmpStateData.personParkingTab.isOpen = false;
        tmpStateData.personParkingTab.isUpdated = true;
        tmpStateData.otherTab.isOpen = true;
      } else {
        alert("please fill out all fields");
      }
    }

    localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
    console.log(tmpStateData);
    set_allEventData(tmpStateData);
  };

  const handlePrevious = () => {
    console.log("previous");
    let tmpStateData = { ...allEventData };

    if (tmpStateData.otherTab.isOpen) {
      tmpStateData.otherTab.isOpen = false;
      tmpStateData.otherTab.isUpdated = true;
      tmpStateData.personParkingTab.isOpen = true;
    } else if (tmpStateData.personParkingTab.isOpen) {
      tmpStateData.personParkingTab.isOpen = false;
      tmpStateData.priceOfLocationTab.isOpen = true;
    } else if (tmpStateData.priceOfLocationTab.isOpen) {
      tmpStateData.priceOfLocationTab.isOpen = false;
      tmpStateData.photosAndVideosTab.isOpen = true;
    } else if (tmpStateData.photosAndVideosTab.isOpen) {
      tmpStateData.photosAndVideosTab.isOpen = false;
      tmpStateData.placeProviderTab.isOpen = true;
    } else if (tmpStateData.placeProviderTab.isOpen) {
      tmpStateData.placeProviderTab.isOpen = false;
      tmpStateData.forWhoTab.isOpen = true;
    } else if (tmpStateData.forWhoTab.isOpen) {
      tmpStateData.forWhoTab.isOpen = false;
      tmpStateData.addNewTab.isOpen = true;
    }

    localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
    console.log(tmpStateData);
    set_allEventData(tmpStateData);
  };

  const handleDirectTabClick = (tabName) => {
    let tmpStateData = { ...allEventData };
    tmpStateData.addNewTab.isOpen = false;
    tmpStateData.forWhoTab.isOpen = false;
    tmpStateData.placeProviderTab.isOpen = false;
    tmpStateData.photosAndVideosTab.isOpen = false;
    tmpStateData.priceOfLocationTab.isOpen = false;
    tmpStateData.personParkingTab.isOpen = false;
    tmpStateData.otherTab.isOpen = false;

    tmpStateData[tabName].isOpen = true;
    set_allEventData(tmpStateData);
  };

  const setForWhoValue = (value) => {
    let tmpTabData = { ...allEventData };

    if (tmpTabData.forWhoTab) {
      tmpTabData.forWhoTab.selectedForWhoID = parseInt(value);
    }
    set_allEventData(tmpTabData);
  };

  const set_place_description = (value) => {
    let tmpTabData = { ...allEventData };

    if (tmpTabData.placeProviderTab) {
      tmpTabData.placeProviderTab.place_description = value;
    }
    set_allEventData(tmpTabData);
  };

  const setPlaceProvider = (value) => {
    let tmpTabData = { ...allEventData };

    if (tmpTabData.placeProviderTab) {
      tmpTabData.placeProviderTab.selectedPlaceID = parseInt(value);
    }
    set_allEventData(tmpTabData);
  };

  const fetchEventDataAgain = () => {
    (async () => {
      try {
        const response = await axios.get(`${API_URL}/events/${eventID}`, {
          headers: { "Content-Type": "application/json", Authorization: token },
        });

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data[0]
        ) {
          set_eventObj(response.data.data[0]);
        }
      } catch (errCallingEventDataApi) {
        console.log("errCallingEventDataApi", errCallingEventDataApi);
      }
    })();
  };

  const fetchEventDataAgainForFileUpload = () => {
    (async () => {
      try {
        const response = await axios.get(`${API_URL}/events/${eventID}`, {
          headers: { "Content-Type": "application/json", Authorization: token },
        });

        if (
          response &&
          response.data &&
          response.data.data &&
          response.data.data &&
          response.data.data.length &&
          response.data.data[0]
        ) {
          let tmpStateData = { ...allEventData };
          if (
            response.data.data[0] &&
            response.data.data[0]["image"] &&
            response.data.data[0]["image"][0]
          ) {
            tmpStateData.photosAndVideosTab.imagesList =
              response.data.data[0]["image"];
          }
          if (
            response.data.data[0] &&
            response.data.data[0]["video"] &&
            response.data.data[0]["video"][0]
          ) {
            tmpStateData.photosAndVideosTab.videosList =
              response.data.data[0]["video"];
          }

          localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
          set_allEventData(tmpStateData);
        }
      } catch (errCallingEventDataApi) {
        console.log("errCallingEventDataApi", errCallingEventDataApi);
      }
    })();
  };

  const editEvent = (eventID) => {
    setShow(true);
  };

  const [selectedImage, setSelectedImage] = useState([])
  const [imageDetails, setImageDetails] = useState("")

  const imageUploaded = async (e,isSubmit = false) => {
     e.preventDefault()
    if (!isSubmit) {
        setSelectedImage(e.target.files)
        return
    }

    try {
      var formData = new FormData();

      for (let i = 0; i < selectedImage.length; i++)
        formData.append("image", selectedImage[i]);

      formData.append("image_details", imageDetails);
      formData.append("event", eventID);
      console.log("formdata", formData.get("image"));

      const url = `${API_URL}/image_event`;
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      };
      const response = await axios.post(url, formData, { headers });

      if (response && response.data && response.data.isSuccess) {
        fetchEventDataAgainForFileUpload();
        set_isImageUploadModalOpen(false)
        alert("Images uploaded successfully!!!");
      }
    } catch (errUploadingImages) {
      alert("error while uploading images.");
      console.log("errUploadingImages", errUploadingImages);
    }finally{
        setImageDetails([])
    }

  };


  const videoUploaded = async (e) => {
    try {
      var formData = new FormData();

      for (let i = 0; i < e.target.files.length; i++)
        formData.append("video", e.target.files[i]);
      formData.append("event", eventID);

      const url = `${API_URL}/video_event`;
      const headers = {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      };
      const response = await axios.post(url, formData, { headers });

      if (response && response.data && response.data.isSuccess) {
        fetchEventDataAgainForFileUpload();
        alert("Videos uploaded successfully!!!");
      }
    } catch (errUploadingVideos) {
      alert("error while uploading videos.");
      console.log("errUploadingVideos", errUploadingVideos);
    }
  };

  const saveCheckedService = (e) => {
    console.log("e.target.value", e.target.value);
    console.log("e.target.checked", e.target.checked);

    let item = parseInt(e.target.value);

    let tmpStateData = { ...allEventData };

    if (
      tmpStateData.priceOfLocationTab &&
      tmpStateData.priceOfLocationTab.selectedServicesList
    ) {
      let tmpServiceList = tmpStateData.priceOfLocationTab.selectedServicesList;
      if (tmpServiceList.includes(item)) {
        tmpServiceList = tmpServiceList.filter(function (e) {
          return e !== item;
        });
        tmpStateData.priceOfLocationTab.selectedServicesList = tmpServiceList;
      } else {
        tmpServiceList.push(item);
      }
    } else {
      tmpStateData.priceOfLocationTab.selectedServicesList = [
        parseInt(e.target.value),
      ];
    }

    localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
    set_allEventData(tmpStateData);
  };

  const savePersonAndParkingData = (value, field) => {
    let tmpStateData = { ...allEventData };
    tmpStateData.personParkingTab[field] = value;
    localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
    set_allEventData(tmpStateData);
  };

  const saveOtherData = (value, field) => {
    let tmpStateData = { ...allEventData };
    tmpStateData.otherTab[field] = value;
    localStorage.setItem("event" + eventID, JSON.stringify(tmpStateData));
    set_allEventData(tmpStateData);
  };

  const handleFinalSubmit = (event) => {
    event.preventDefault();

    if (!tncBox.current.checked) {
      alert("Please accept terms and conditions");
    } else {
      //console.log('submit form');

      (async () => {
        try {
          //let tmpEventData = allEventData;

          let forWhoString = "";
          let selectedForWhoTmpData = allEventData.forWhoTab.forWhoList.filter(
            (item) => {
              return (
                parseInt(item.Id) ===
                parseInt(allEventData.forWhoTab.selectedForWhoID)
              );
            }
          );
          if (selectedForWhoTmpData.length) {
            forWhoString = selectedForWhoTmpData[0].plan_name || "";
          }

          let placeName = "";
          let placePrice = 0;
          let selectedPlaceTmpData =
            allEventData.placeProviderTab.placesList.filter((item) => {
              return (
                parseInt(item.Id) ===
                parseInt(allEventData.placeProviderTab.selectedPlaceID)
              );
            });
          if (selectedPlaceTmpData.length) {
            placeName = selectedPlaceTmpData[0].place_name || "";
            placePrice = selectedPlaceTmpData[0].place_price || 0;
          }

          //let serviceName = "";
          let servicePrice = 0;
          let serviceIDAry =
            allEventData.priceOfLocationTab.selectedServicesList;

          // let selectedServiceTmpData = allEventData.priceOfLocationTab.servicesList.filter((item) => { return parseInt(item.Id) === parseInt((allEventData.priceOfLocationTab.selectedServicesList && allEventData.priceOfLocationTab.selectedServicesList.length) ? allEventData.priceOfLocationTab.selectedServicesList : []) });
          // if (selectedServiceTmpData.length) {
          //     serviceName = selectedServiceTmpData[0].service_name || ""
          //     servicePrice = selectedServiceTmpData[0].service_price || 0;
          //     serviceIDAry = selectedServiceTmpData.map(i => i.Id);

          // }

          let postData = {
            event: parseInt(eventID),
            for_who_Id: allEventData.forWhoTab.selectedForWhoID,
            for_who: forWhoString,
            place_Id: allEventData.placeProviderTab.selectedPlaceID,
            place_name: placeName,
            place_price: placePrice,
            place_description: allEventData.placeProviderTab.place_description,
            IncludingFacilities: allEventData.priceOfLocationTab
              .IncludingFacilities
              ? true
              : false,
            service_Id: serviceIDAry,
            service_name: servicePrice,
            service_price: servicePrice,
            person_capacity: allEventData.personParkingTab.person_capacity || 0,
            parking_capacity:
              allEventData.personParkingTab.parking_capacity || 0,
            address: allEventData.personParkingTab.address || "",

            t_and_c: allEventData.otherTab.t_and_c || "",
            facebook: allEventData.otherTab.facebook || "",
            youtube: allEventData.otherTab.youtube || "",
            twitter: allEventData.otherTab.twitter || "",
            pinterest: allEventData.otherTab.pinterest || "",
            instagram: allEventData.otherTab.instagram || "",
            vimeo: allEventData.otherTab.vimeo || "",
            categoryId: eventCategoryID,
            display_name: allEventData.display_name,
            User: parseInt(userId),
          };

          const response = await axios[`${isPutRequest ? "put" : "post"}`](
            `${API_URL}/create_event`,
            postData,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: token,
              },
            }
          );

          if (response && response.data && response.data.isSuccess) {
            //console.log("response.data.data.length", response.data.data.length);
            localStorage.removeItem("event" + eventID);
            alert(response.data.message);
            history.push("/event/Event");
            // window.location.href = "/event/Event";
          }
        } catch (errCallingApi) {
          console.log("errCallingApi", errCallingApi);
        }
      })();
    }
  };

  function imageRemoveHandler(e, imageObj) {
    e.preventDefault();
    let tempEvent = allEventData;
    let tempArray = tempEvent.photosAndVideosTab.imagesList;
    let index = tempArray.indexOf(imageObj);
    tempEvent.photosAndVideosTab.imagesList.splice(index, 1);
    console.log("allEventData", allEventData);
    set_allEventData(tempEvent);
  }

  const tncBox = useRef(null);

  return (
    <main>
      <div className="continent-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12 evant-titel event-add">
              <Link to="/dashboard" className="back-btnt">
                <i className="icon-Back" aria-hidden="true"></i>
              </Link>
              <h2>All Category</h2>
              {/* <div className="category-selctor">
                                <select name="event-new" id="category-selctor">
                                    <option value="All-Category">All Category</option>
                                    <option value="saab">Saab</option>
                                    <option value="opel">Opel</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div> */}
              <div className="e-btn">
                {allEventData.placeProviderTab?.isOpen && (
                  <button
                    onClick={() => set_isAddPlacesModalOpen(true)}
                    className="new-btn-creat"
                  >
                    <i className="icon-plus" aria-hidden="true"></i>Add Place
                  </button>
                )}

                {allEventData.priceOfLocationTab?.isOpen && (
                  <button
                    onClick={() => set_isAddServicesModalOpen(true)}
                    className="new-btn-creat"
                  >
                    <i className="icon-plus" aria-hidden="true"></i>Add Service
                  </button>
                )}

                <Modal
                  title="Add Listing"
                  onClose={() => set_isAddPlacesModalOpen(false)}
                  show={isAddPlacesModalOpen}
                >
                  <AddPlace
                    set_isAddPlacesModalOpen={set_isAddPlacesModalOpen}
                  />
                </Modal>

                <Modal
                  title="Add Service"
                  onClose={() => set_isAddServicesModalOpen(false)}
                  show={isAddServicesModalOpen}
                >
                  <AddService
                    set_isAddServicesModalOpen={set_isAddServicesModalOpen}
                  />
                </Modal>

                {/* Image Upload Popup  */}
                <Modal
                  title="Upload Photo"
                  onClose={() => set_isImageUploadModalOpen(false)}
                  show={isImageUploadModalOpen}
                >
                  <div className="edit-holder-p" style={{ marginTop: 50 }}>
                    <div className="edit-offer-p">
                      <div className="popup-titel">
                        <h2>Upload Photo</h2>
                        <a onClick={() => set_isImageUploadModalOpen(false)}>
                          <i className="icon-close"></i>
                        </a>
                      </div>
                      <div className="input-holder-p">
                        <label for="">Select Photo</label>
                        <div className="c-p-f">
                        <input
                            type="file"
                            className="file-input"
                            name="image[]"
                            accept="image/*"
                            onChange={(e) => imageUploaded(e)}
                          />
                        </div>
                      </div>
                      <div className="input-holder-p">
                        <label for="">Details</label>
                        <textarea onChange={(e)=>setImageDetails(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                      </div>
                    </div>
                    <button onClick={(e)=>imageUploaded(e,true)} >Submit</button>
                  </div>
                </Modal>

             
              </div>
            </div>

            <div className="process-wrapper">
              <ul>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.addNewTab &&
                    (isPutRequest ||
                      allEventData.addNewTab.isUpdated ||
                      allEventData.addNewTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("addNewTab")}
                >
                  <input type="checkbox" id="cb1" hidden className="cb-btn" />
                  <span>01</span>
                  <br />
                  <label className="selact-btn" for="cb1">
                    Add New
                  </label>
                </li>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.forWhoTab &&
                    (isPutRequest ||
                      allEventData.forWhoTab.isUpdated ||
                      allEventData.forWhoTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("forWhoTab")}
                >
                  <input type="checkbox" id="cb2" hidden className="cb-btn" />
                  <span>02</span>
                  <br />
                  <label className="selact-btn" for="cb2">
                    For all or Couple
                  </label>
                </li>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.placeProviderTab &&
                    (isPutRequest ||
                      allEventData.placeProviderTab.isUpdated ||
                      allEventData.placeProviderTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("placeProviderTab")}
                >
                  <input type="checkbox" id="cb3" hidden className="cb-btn" />
                  <span>03</span>
                  <br />
                  <label className="selact-btn" for="cb3">
                    Place Provider
                  </label>
                </li>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.photosAndVideosTab &&
                    (isPutRequest ||
                      allEventData.photosAndVideosTab.isUpdated ||
                      allEventData.photosAndVideosTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("photosAndVideosTab")}
                >
                  <input type="checkbox" id="cb4" hidden className="cb-btn" />
                  <span>04</span>
                  <br />
                  <label className="selact-btn" for="cb4">
                    Photos & videos
                  </label>
                </li>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.priceOfLocationTab &&
                    (isPutRequest ||
                      allEventData.priceOfLocationTab.isUpdated ||
                      allEventData.priceOfLocationTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("priceOfLocationTab")}
                >
                  <input type="checkbox" id="cb5" hidden className="cb-btn" />
                  <span>05</span>
                  <br />
                  <label className="selact-btn" for="cb5">
                    Price of Location
                  </label>
                </li>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.personParkingTab &&
                    (isPutRequest ||
                      allEventData.personParkingTab.isUpdated ||
                      allEventData.personParkingTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("personParkingTab")}
                >
                  <input type="checkbox" id="cb6" hidden className="cb-btn" />
                  <span>06</span>
                  <br />
                  <label className="selact-btn" for="cb6">
                    Person / Parking
                  </label>
                </li>
                <li
                  className={`process-stap ${
                    allEventData &&
                    allEventData.otherTab &&
                    (isPutRequest ||
                      allEventData.otherTab.isUpdated ||
                      allEventData.otherTab.isOpen)
                      ? " active"
                      : ""
                  }`}
                  onClick={() => handleDirectTabClick("otherTab")}
                >
                  <input type="checkbox" id="cb7" hidden className="cb-btn" />
                  <span>07</span>
                  <br />
                  <label className="selact-btn" for="cb7">
                    Other
                  </label>
                </li>
              </ul>
            </div>

            {allEventData.addNewTab && allEventData.addNewTab.isOpen && (
              <div className="edit-holder">
                <div className="edit-wrapper">
                  <div className="col-12 col-md-12 edit-event">
                    <div className="edit-titel">
                      <h2>{eventObj.display_name}</h2>
                      <div className="edit-btn">
                        <button type="button" class="btn">
                          Delete<i className="icon-Delete"></i>
                        </button>
                        &nbsp;
                        <button
                          type="button"
                          class="btn"
                          onClick={() => editEvent(parseInt(eventID))}
                        >
                          Edit<i className="icon-Edit"></i>
                        </button>
                        <Modal
                          title="My Modal"
                          onClose={() => setShow(false)}
                          show={show}
                        >
                          <EditEvent
                            fetchEventDataAgain={fetchEventDataAgain}
                            setShow={setShow}
                            eventID={parseInt(eventID)}
                            categoryId={parseInt(eventObj.categoryId)}
                            display_name={eventObj.display_name}
                          />
                        </Modal>
                      </div>
                    </div>
                    <p>{eventObj.category}</p>
                  </div>
                </div>
              </div>
            )}

            {allEventData.forWhoTab && allEventData.forWhoTab.isOpen && (
              <div className="edit-holder">
                <div className="edit-wrapper">
                  <div className="r-btn-group">
                    <div className="loction-r-holder">
                      <div className="s-product">
                        <div className="material-switch center-btn">
                          <span>For All</span>
                          {/* <input onChange={() => toggleForWho()} id="someSwitchOptionDefault2" name="someSwitchOption001" type="checkbox" data-toggle-switch /> */}
                          <input
                            id="someSwitchOptionDefault2"
                            name="someSwitchOption001"
                            type="checkbox"
                            data-toggle-switch
                          />
                          <label
                            for="someSwitchOptionDefault2"
                            className="label-default1"
                          ></label>
                          <span>For Couple</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-t">
                      {allEventData.forWhoTab &&
                        allEventData.forWhoTab.forWhoList &&
                        allEventData.forWhoTab.forWhoList.length &&
                        allEventData.forWhoTab.forWhoList.map(
                          (eventForWhoObj) => (
                            <div className="radio-btn" key={eventForWhoObj.Id}>
                              <input
                                checked={
                                  allEventData.forWhoTab &&
                                  allEventData.forWhoTab.selectedForWhoID &&
                                  parseInt(
                                    allEventData.forWhoTab.selectedForWhoID
                                  ) === parseInt(eventForWhoObj.Id)
                                    ? true
                                    : false
                                }
                                onChange={(e) =>
                                  setForWhoValue(parseInt(e.target.value))
                                }
                                value={`${eventForWhoObj.Id}`}
                                id={`place${eventForWhoObj.Id}`}
                                type="radio"
                                name="placeProvider"
                              />
                              <label for={`place${eventForWhoObj.Id}`}>
                                {eventForWhoObj.plan_name}
                              </label>
                            </div>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {allEventData.placeProviderTab &&
              allEventData.placeProviderTab.isOpen && (
                <div className="r-btn-group place-povider">
                  <div className="d-t">
                    {placesAry.map((item) => (
                      <div className="radio-btn" key={item.Id}>
                        <label>
                          <span>
                            <input
                              type="radio"
                              checked={
                                allEventData.placeProviderTab &&
                                allEventData.placeProviderTab.selectedPlaceID &&
                                parseInt(
                                  allEventData.placeProviderTab.selectedPlaceID
                                ) === parseInt(item.Id)
                              }
                              value={item.Id}
                              name="placeProvider"
                              onChange={(e) =>
                                setPlaceProvider(parseInt(e.target.value))
                              }
                            />
                          </span>
                          {item.place_name}
                          <span>{item.place_price} INR</span>
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="provider-textaria">
                    <span>Discription of Location</span>
                    <textarea
                      name="place_description"
                      id="place_description"
                      cols="30"
                      rows="4"
                      onChange={(e) => set_place_description(e.target.value)}
                      value={
                        (allEventData.placeProviderTab &&
                          allEventData.placeProviderTab.place_description) ||
                        ""
                      }
                    ></textarea>
                  </div>
                </div>
              )}

            {allEventData.photosAndVideosTab &&
              allEventData.photosAndVideosTab.isOpen && (
                <div className="photo-video-holder">
                  <form method="post">
                    <div className="p-v-main">
                      <h1>
                        Photos <span>(Upload upto 100max)</span>
                      </h1>
                      <div className="poster-m">
                        <div
                          className="images-selctor "
                          onClick={() => set_isImageUploadModalOpen(true)}
                        >
                          
                        </div>
                      </div>
                    </div>
                    <div className="ph-main">
                      <span>Uploaded Photo</span>

                      <div className="img-holder">
                        {allEventData.photosAndVideosTab &&
                          allEventData.photosAndVideosTab &&
                          allEventData.photosAndVideosTab.imagesList &&
                          allEventData.photosAndVideosTab.imagesList.map(
                            (imageObj) => (
                              <div className="photo-box p" key={imageObj.id}>
                                <div className="images-selctor ">
                                  <img
                                    src={`${"http://eventopackage.com"}${imageObj.image}`}
                                    className="img-fluid"
                                    alt={imageObj.image_details}
                                  />
                                  <button
                                    onClick={(e) =>
                                      imageRemoveHandler(e, imageObj)
                                    }
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>
                    <div className="p-v-main video-uploder">
                      <h1>
                        Videos{" "}
                        <span>
                          (Upload upto 25 to 100max and Duration 30min to 40min
                          max.)
                        </span>
                      </h1>
                      <div className="poster-m">
                        <div className="images-selctor ">
                          <input
                            multiple
                            type="file"
                            className="file-input"
                            name="video[]"
                            accept="video/*"
                            onChange={(e) => videoUploaded(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ph-main">
                      <span>Uploaded Video</span>
                      <div className="img-holder">
                        {allEventData.photosAndVideosTab &&
                          allEventData.photosAndVideosTab &&
                          allEventData.photosAndVideosTab.videosList &&
                          allEventData.photosAndVideosTab.videosList.map(
                            (videoObj) => {
                              let videoType = videoObj.video
                                ? videoObj.video.split(".").pop()
                                : "mp4";
                              return (
                                <div className="video-main" key={videoObj.id}>
                                  <div className="vedio-item">
                                    <div className="o-video">
                                      <video
                                        controls
                                        height="100%"
                                        width="100%"
                                      >
                                        <source
                                          src={`${API_URL}${videoObj.video}`}
                                          type={`video/${videoType}`}
                                        />
                                        Sorry, your browser doesn't support
                                        embedded videos.
                                      </video>
                                    </div>
                                    <button onClick={(e) => e.preventDefault()}>
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </div>
                    </div>
                  </form>
                </div>
              )}

            {allEventData.priceOfLocationTab &&
              allEventData.priceOfLocationTab.isOpen && (
                <div className="location-main">
                  <div className="Including-radio">
                    <div className="r-btn-group place-povider">
                      <div className="radio-btn">
                        {/* <span><i className="icon-right"></i></span> */}
                        <input
                          defaultChecked={
                            allEventData.priceOfLocationTab &&
                            allEventData.priceOfLocationTab.IncludingFacilities
                              ? true
                              : false
                          }
                          type="checkbox"
                          id="includingFacility"
                          onChange={() => {
                            set_includingFacility(
                              allEventData.priceOfLocationTab &&
                                allEventData.priceOfLocationTab
                                  .IncludingFacilities
                                ? false
                                : true
                            );
                          }}
                        />
                        <label for="includingFacility">
                          Including Facilities in this price
                        </label>
                      </div>

                      <div className="item-price-holder">
                        <span>Excluding Item Price</span>
                        <div className="Excluding-items-holder">
                          {servicesAry.map((item) => (
                            <div className="excluding-item" key={item.Id}>
                              <div className="excluding-i-titel">
                                <h2>{item.service_name}</h2>
                                <span>
                                  {item.service_price}/
                                  {`${
                                    parseInt(item.service_price_type) === 1
                                      ? "PP"
                                      : "PE"
                                  }`}
                                </span>
                                <div className="s-product">
                                  <div className="material-switch center-btn">
                                    <input
                                      id={`service${item.Id}`}
                                      onChange={(e) => saveCheckedService(e)}
                                      name="someSwitchOption001"
                                      type="checkbox"
                                      value={item.Id}
                                      data-toggle-switch
                                      defaultChecked={
                                        allEventData.priceOfLocationTab &&
                                        allEventData.priceOfLocationTab
                                          .selectedServicesList &&
                                        allEventData.priceOfLocationTab.selectedServicesList.includes(
                                          item.Id
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    <label
                                      for={`service${item.Id}`}
                                      className="label-default1"
                                    ></label>
                                  </div>
                                </div>
                              </div>
                              <div className=" excluding-para">
                                <p>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typestting industry.
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {allEventData.personParkingTab &&
              allEventData.personParkingTab.isOpen && (
                <div className="event-wrapper">
                  <div className="person-capacity-holder">
                    <div className="shop-name">
                      <span for="">Person Capacity</span>
                      <input
                        type="number"
                        onChange={(e) =>
                          savePersonAndParkingData(
                            parseInt(e.target.value),
                            "person_capacity"
                          )
                        }
                        value={
                          allEventData.personParkingTab &&
                          allEventData.personParkingTab &&
                          allEventData.personParkingTab.person_capacity
                            ? allEventData.personParkingTab.person_capacity
                            : null
                        }
                      />
                    </div>
                    <div className="shop-name">
                      <span for="">Parking Capacity</span>
                      <input
                        type="number"
                        onChange={(e) =>
                          savePersonAndParkingData(
                            parseInt(e.target.value),
                            "parking_capacity"
                          )
                        }
                        value={
                          allEventData.personParkingTab &&
                          allEventData.personParkingTab &&
                          allEventData.personParkingTab.parking_capacity
                            ? allEventData.personParkingTab.parking_capacity
                            : null
                        }
                      />
                    </div>
                    <div className="event-add">
                      <span>What’s the Location?</span>
                      <textarea
                        placeholder="Type here Address..."
                        value={
                          allEventData.personParkingTab &&
                          allEventData.personParkingTab &&
                          allEventData.personParkingTab.address
                            ? allEventData.personParkingTab.address
                            : null
                        }
                        onChange={(e) =>
                          savePersonAndParkingData(e.target.value, "address")
                        }
                        cols="30"
                        rows="5"
                      ></textarea>
                      <button>Location from Google map</button>
                    </div>
                  </div>
                </div>
              )}

            {allEventData.otherTab && allEventData.otherTab.isOpen && (
              <div className="event-wrapper">
                <div className="person-capacity-holder">
                  <div className="textaditor">
                    <div className="toolbar">
                      <div className="fore-wrapper">
                        <FontAwesomeIcon icon={faFont} />
                        <div className="fore-palette"></div>
                      </div>
                      <a href="#" data-command="bold">
                        <FontAwesomeIcon icon={faBold} />
                      </a>
                      <a href="#" data-command="italic">
                        <FontAwesomeIcon icon={faItalic} />
                      </a>
                      <a href="#" data-command="underline">
                        <FontAwesomeIcon icon={faUnderline} />
                      </a>
                      <a href="#" data-command="justifyLeft">
                        <FontAwesomeIcon icon={faAlignLeft} />
                      </a>
                      <a href="#" data-command="justifyCenter">
                        <FontAwesomeIcon icon={faAlignCenter} />
                      </a>
                      <a href="#" data-command="justifyRight">
                        <FontAwesomeIcon icon={faAlignRight} />
                      </a>
                      <a href="#" data-command="justifyFull">
                        <FontAwesomeIcon icon={faAlignJustify} />
                      </a>
                      <a href="#" data-command="insertUnorderedList">
                        <FontAwesomeIcon icon={faListUl} />
                      </a>
                      <a href="#" data-command="insertOrderedList">
                        <FontAwesomeIcon icon={faListOl} />
                      </a>
                      <a href="#" data-command="h1">
                        H1
                      </a>
                      <a href="#" data-command="h2">
                        H2
                      </a>
                    </div>
                    <textarea
                      value={
                        allEventData.otherTab && allEventData.otherTab.t_and_c
                          ? allEventData.otherTab.t_and_c
                          : null
                      }
                      onChange={(e) => saveOtherData(e.target.value, "t_and_c")}
                      id="editor"
                      placeholder="text type"
                      contenteditable
                    ></textarea>
                  </div>

                  <div className="social-media-main">
                    <span>Social Media</span>
                    <div className="s-pletform">
                      <div className="row mx-0 mt-1">
                        <div className="col-md-6 col-12 pl-0 pr-2">
                          <label for="">
                            <div className="s-pleform-icon">
                              <img src={fb} alt="" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter URL"
                              onChange={(e) =>
                                saveOtherData(e.target.value, "facebook")
                              }
                              value={
                                allEventData.otherTab &&
                                allEventData.otherTab.facebook
                                  ? allEventData.otherTab.facebook
                                  : null
                              }
                            />
                          </label>
                        </div>
                        <div className="col-md-6 col-12 px-0">
                          <label for="">
                            <div className="s-pleform-icon">
                              <img src={youtub} alt="" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter URL"
                              onChange={(e) =>
                                saveOtherData(e.target.value, "youtube")
                              }
                              value={
                                allEventData.otherTab &&
                                allEventData.otherTab.youtube
                                  ? allEventData.otherTab.youtube
                                  : null
                              }
                            />
                          </label>
                        </div>
                        <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                          <label for="">
                            <div className="s-pleform-icon">
                              <img src={twitter} alt="" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter URL"
                              onChange={(e) =>
                                saveOtherData(e.target.value, "twitter")
                              }
                              value={
                                allEventData.otherTab &&
                                allEventData.otherTab.twitter
                                  ? allEventData.otherTab.twitter
                                  : null
                              }
                            />
                          </label>
                        </div>
                        <div className="col-md-6 col-12 px-0 mt-2">
                          <label for="">
                            <div className="s-pleform-icon">
                              <img src={printrest} alt="" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter URL"
                              onChange={(e) =>
                                saveOtherData(e.target.value, "pinterest")
                              }
                              value={
                                allEventData.otherTab &&
                                allEventData.otherTab.pinterest
                                  ? allEventData.otherTab.pinterest
                                  : null
                              }
                            />
                          </label>
                        </div>
                        <div className="col-md-6 col-12 pl-0 mt-2 pr-2">
                          <label for="">
                            <div className="s-pleform-icon">
                              <img src={instagram} alt="" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter URL"
                              onChange={(e) =>
                                saveOtherData(e.target.value, "instagram")
                              }
                              value={
                                allEventData.otherTab &&
                                allEventData.otherTab.instagram
                                  ? allEventData.otherTab.instagram
                                  : null
                              }
                            />
                          </label>
                        </div>
                        <div className="col-md-6 col-12 px-0 mt-2">
                          <label for="">
                            <div className="s-pleform-icon">
                              <img src={vimo} alt="" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter URL"
                              onChange={(e) =>
                                saveOtherData(e.target.value, "vimeo")
                              }
                              value={
                                allEventData.otherTab &&
                                allEventData.otherTab.vimeo
                                  ? allEventData.otherTab.vimeo
                                  : null
                              }
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-check check-input-s">
                      <input
                        type="checkbox"
                        ref={tncBox}
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Accept Your Terms and Conditions
                      </label>
                    </div>
                    <div className="event-other-btn">
                      <form onSubmit={(e) => handleFinalSubmit(e)}>
                        <button type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="next-prw-holder ">
          <button className="prew" onClick={handlePrevious}>
            <i className="icon-Back"></i>Back
          </button>
          <button className="next" onClick={handleNext}>
            Next<i className="icon-Next"></i>
          </button>
        </div>
      </div>
    </main>
  );
}

export default AddedEvent;
