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
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const UserData = [
    {
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis veniam consequuntur eaque, aut rem quia ipsam. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                      dolor.`,
      img: TestimonialPic1,
      name: "John Doe",
      designation: "CEO,workstation",
    },
    {
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis veniam consequuntur eaque, aut rem quia ipsam. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                      dolor.`,
      img: TestimonialPic2,
      name: "Noob Billal",
      designation: "CEO,workstation",
    },
    {
      description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Omnis veniam consequuntur eaque, aut rem quia ipsam. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                      dolor.`,
      img: TestimonialPic3,
      name: "Bot Billal",
      designation: "CEO,workstation",
    },
  ];

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
                {UserData.map((ele, index) => (
                  <div className="SliderItem" key={index}>
                    <div className="SliderTop">
                      <p className="sliderDescription">{ele.description}</p>
                    </div>
                    <div className="sliderBottom">
                      <div className="sliderImg">
                        <img src={ele.img} alt="TestimonialPic1" />
                      </div>
                      <div className="sliderName">
                        <p className="sliderNamespan">{ele.name}</p>

                        <p className="sliderNamespan2">{ele.designation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
