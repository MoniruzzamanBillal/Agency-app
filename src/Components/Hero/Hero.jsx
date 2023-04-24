import React from "react";
import "./Hero.css";
import heroImg from "../../images/hero-img.png";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="heroWrapper" id="Home">
          <div className="heroLeft">
            <div className="heroHeadings">
              <h1>We're creating perfect</h1>
              <h1>Digital product to</h1>
              <h1 className="heroBranding">Promote your brand</h1>
            </div>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              ipsum dicta veniam corporis blanditiis eaque aut quos possimus
              assumenda eveniet.
            </p>

            <div className="heroButton">
              <div className="btn1">
                <button className="btn btn1">Get started now</button>
              </div>

              <div className="btn2">
                <button className="btn btn2">Discover now</button>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroImg">
              <img src={heroImg} alt="Hero image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
