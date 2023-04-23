import React from "react";
import "./Service.css";

const CardInfo = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae, nam ut! Esse hic voluptatum, deserunt impedit
                    neque quis! Odit ipsum voluptatum sunt, perferendis
                    doloribus.`,
  },
  {
    // <i class="ri-html5-line"></i>
    icon: "ri-html5-line",
    title: "Web Development",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae, nam ut! Esse hic voluptatum, deserunt impedit
                    neque quis! Odit ipsum voluptatum sunt, perferendis
                    doloribus.`,
  },
  {
    // <i class="ri-landscape-line"></i>
    icon: "ri-landscape-line",
    title: "Graphic Design",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae, nam ut! Esse hic voluptatum, deserunt impedit
                    neque quis! Odit ipsum voluptatum sunt, perferendis
                    doloribus.`,
  },
  {
    // <i class="ri-rocket-line"></i>
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestiae, nam ut! Esse hic voluptatum, deserunt impedit
                    neque quis! Odit ipsum voluptatum sunt, perferendis
                    doloribus.`,
  },
];

export default function Service() {
  return (
    <>
      <div className="container">
        <div className="service">
          <div className="serviceWrapper">
            <div className="serviceTopContainer">
              <h3 className="serviceHighlight">Our services</h3>
              <h1>Save time managing business with</h1>
              <h2 className="serviceHighlighter">Our best services</h2>
            </div>

            <div className="serviceCardContainer">
              {CardInfo.map((ele, index) => (
                <div className="cardContrainer">
                  <div className="cardTop">
                    <i className={`${ele.icon}`}></i>
                  </div>

                  <div className="cardMid">
                    <h2 className="midHeader">{ele.title}</h2>
                  </div>

                  <div className="cardBottom">
                    <p className="bottomDescription">{ele.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
