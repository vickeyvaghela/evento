import React, { useEffect, useState } from "react";
import $ from "jquery";
import OwlCarousel from "react-owl-carousel";

import foodbig1 from "../../assets/img/food-big-1.png";
import food1 from "../../assets/img/food-1.png";
import food2 from "../../assets/img/food-2.png";
import food3 from "../../assets/img/food-3.png";
import food4 from "../../assets/img/food-4.png";
import food5 from "../../assets/img/food-5.png";
import food6 from "../../assets/img/food-6.png";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { API_URL } from "../../constants";

function EventPreview() {
  const history = useHistory();
  const location = useLocation();

  // imageData which is passed by /event/EventView/:id page

  const [imageData, setImageData] = useState(location.state.imageData);
  console.log("imageData", imageData);

  useEffect(() => {
    //     let script = document.createElement("script");
    //     script.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //      script = document.createElement("script");
    //     script.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
    //     script.async = true;
    //     document.body.appendChild(script);
  }, []);

  function onCloseHandler() {
    history.goBack();
  }

  function imageErrorHandler(imageIndex) {
    let temp = imageData;
    console.log("error");
    temp[imageIndex].image = "https://demofree.sirv.com/nope-not-here.jpg";
    setImageData(temp);
  }

  return (
    <>
      {/* <div class="i-v-main">
        <div  class="owl-carousel owl-theme"> */}
      <span className="pop-close" onClick={onCloseHandler}>
        X
      </span>
      <OwlCarousel
        id="sync1"
        items={1}
        className="owl-theme iv-main-x"
        loop
        margin={10}
        nav
      >
        {/* main OwlCarousel Image and image details  */}
        {imageData.map((item, index) => (
          <div class="i-v-silder item ">
            <div class="slider-imges">
              <img src={API_URL + item.image} class="img-fluid" alt="" />
            </div>
            <div class="i-v-text">
              <p>{item.image_details}</p>
            </div>
          </div>
        ))}
      </OwlCarousel>
      {/* </div> */}
      <div class="i-v-manu-main ">
        <div class="i-v-manu-group">
          <div class="menu-i-v">
            <div id="sync2" class="owl-carousel owl-theme">
              {/* image thumbnails list  */}
              {imageData.map((item, index) => (
                <div key={index} class="i-v-image item">
                  <img
                    src={API_URL+ item.image}
                    class="img-fluid"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default EventPreview;
