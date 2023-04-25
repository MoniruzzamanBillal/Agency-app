import React from "react";
import "./Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TestimonialPic1 from "../../images/ava-1.jpg";
import TestimonialPic2 from "../../images/ava-2.jpg";
import TestimonialPic3 from "../../images/ava-3.jpg";

export default function Testimonial() {
  const settings = {
    dots: true,
    //   dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="container">
        <div className="TestimoniualContainer">
          <div className="TestimonialWrapper">
            <div className="TestimonialTop">
              <div className="TestimonialTopHeading">
                <h2 className="TestimonialTopHeadingDescription">
                  Testimonial
                </h2>
              </div>
              <div className="TestimonialTopDescription">
                <h1>
                  Trusted by more than{" "}
                  <span className="Highlight"> 5,000 customers</span>
                </h1>
              </div>
            </div>
            <div className="TestimonialSlider">
              <Slider {...settings}>
                <div className="SliderItem">
                  <div className="SliderTop">
                    <p className="sliderDescription">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis veniam consequuntur eaque, aut rem quia ipsam. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                      dolor.
                    </p>
                  </div>
                  <div className="sliderBottom">
                    <div className="sliderImg">
                      <img src={TestimonialPic1} alt="TestimonialPic1" />
                    </div>
                    <div className="sliderName">
                      <p className="sliderNamespan">john doe</p>
                      <p className="sliderNamespan2">CEO,workstation</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
