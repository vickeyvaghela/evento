import React, { useEffect } from "react";
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
// import "owl.carousel/dist/assets/owl.carousel.min.css";
// import "owl.carousel/dist/assets/owl.theme.default.min.css";

import foodbig1 from "../../assets/img/food-big-1.png";
import food1 from "../../assets/img/food-1.png";
import food2 from "../../assets/img/food-2.png";
import food3 from "../../assets/img/food-3.png";
import food4 from "../../assets/img/food-4.png";
import food5 from "../../assets/img/food-5.png";
import food6 from "../../assets/img/food-6.png";

function EventPreview() {

//   useEffect(() => {
    

//     let script = document.createElement("script");
//     script.src = "https://code.jquery.com/jquery-3.2.1.slim.min.js";
//     script.async = true;
//     document.body.appendChild(script);
 
//      script = document.createElement("script");
//     script.src = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     setTimeout(() => {
      
// $(document).ready(function() {

//   var sync1 = $("#sync1");
//   var sync2 = $("#sync2");
//   var slidesPerPage = 3; //globaly define number of elements per page
//   var syncedSecondary = true;

//   sync1.owlCarousel({
//       items: 1,
//       slideSpeed: 2000,
//       nav: true,
//       autoplay: false,
//       dots: true,
//       loop: true,
//       responsiveRefreshRate: 200,
//       navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
//   }).on('changed.owl.carousel', syncPosition);

//   sync2
//       .on('initialized.owl.carousel', function() {
//           sync2.find(".owl-item").eq(0).addClass("current");
//       })
//       .owlCarousel({
//           items: 6,
//           dots: true,
//           nav: true,
//           smartSpeed: 200,
//           slideSpeed: 500,
//           slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
//           responsiveRefreshRate: 100
//       }).on('changed.owl.carousel', syncPosition2);

//   function syncPosition(el) {
//       //if you set loop to false, you have to restore this next line
//       //var current = el.item.index;

//       //if you disable loop you have to comment this block
//       var count = el.item.count - 1;
//       var current = Math.round(el.item.index - (el.item.count / 2) - .5);

//       if (current < 0) {
//           current = count;
//       }
//       if (current > count) {
//           current = 0;
//       }

//       //end block

//       sync2
//           .find(".owl-item")
//           .removeClass("current")
//           .eq(current)
//           .addClass("current");
//       var onscreen = sync2.find('.owl-item.active').length - 1;
//       var start = sync2.find('.owl-item.active').first().index();
//       var end = sync2.find('.owl-item.active').last().index();

//       if (current > end) {
//           sync2.data('owl.carousel').to(current, 100, true);
//       }
//       if (current < start) {
//           sync2.data('owl.carousel').to(current - onscreen, 100, true);
//       }
//       }

//       function syncPosition2(el) {
//       if (syncedSecondary) {
//           var number = el.item.index;
//           sync1.data('owl.carousel').to(number, 100, true);
//       }
//       }

//       sync2.on("click", ".owl-item", function(e) {
//       e.preventDefault();
//       var number = $(this).index();
//       sync1.data('owl.carousel').to(number, 300, true);
//       });
//       });
//     }, 2000);

//   }, [])
  

const options2 = {
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};

  return (
    <div class="i-v-main">
    <div  class="owl-carousel owl-theme">
    <OwlCarousel
                className="owl-theme"
                loop
                autoPlay
                nav
                dots
                {...options2}
              >
        <div class="i-v-silder item">
            <div class="slider-imges">
                <img src={foodbig1} class="img-fluid" alt="" />
            </div>
            <div class="i-v-text">
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
            </div>
        </div>
        <div class="i-v-silder item">
            <div class="slider-imges">
                <img src={food2} class="img-fluid" alt="" />
            </div>
            <div class="i-v-text">
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
            </div>
        </div>
        <div class="i-v-silder item">
            <div class="slider-imges">
                <img src={food3} class="img-fluid" alt="" />
            </div>
            <div class="i-v-text">
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
            </div>
        </div>
        <div class="i-v-silder item">
            <div class="slider-imges">
                <img src={food4} class="img-fluid" alt=""/>
            </div>
            <div class="i-v-text">
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
            </div>
        </div>
        <div class="i-v-silder item">
            <div class="slider-imges">
                <img src={food5} class="img-fluid" alt="" />
            </div>
            <div class="i-v-text">
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
            </div>
        </div>
        <div class="i-v-silder item">
            <div class="slider-imges">
                <img src={food6} class="img-fluid" alt="" />
            </div>
            <div class="i-v-text">
                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>                    
            </div>
        </div>
        </OwlCarousel>
    </div> 
     <div class="i-v-manu-main ">
        <div class="i-v-manu-group">
            <div class="menu-i-v">
                <div id="sync2" class="owl-carousel owl-theme">
                    <div class="i-v-image item">
                        <img src={food1} class="img-fluid" alt="" />
                    </div>
                    <div class="i-v-image item">
                        <img src={food2} class="img-fluid" alt="" />
                    </div>
                    <div class="i-v-image item">
                    <img src={food3} class="img-fluid" alt="" />
                    </div>
                    <div class="i-v-image item">
                    <img src={food4} class="img-fluid" alt="" />
                    </div>
                    <div class="i-v-image item">
                        <img src={food5} class="img-fluid" alt="" />
                    </div>
                    <div class="i-v-image item">
                        <img src={food6} class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
     </div>
     
</div>
  );
}





export default EventPreview;
