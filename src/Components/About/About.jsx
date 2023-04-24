import React from "react";
import "./About.css";

import AboutUsPic from "../../images/about-us.jpg";

const AboutBodyContent = [
  {
    //    <i class="ri-wifi-line"></i>
    icon: "ri-wifi-line",
    heading: "First working process",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis sit dicta voluptatum aut sequi est, laboriosam
                  commodi, error eos nostrum consectetur assumenda doloremque`,
  },
  {
    //    <i class="ri-team-line"></i>
    icon: "ri-team-line",
    heading: "Dedicated team",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis sit dicta voluptatum aut sequi est, laboriosam
                  commodi, error eos nostrum consectetur assumenda doloremque`,
  },
  {
    //    <i class="ri-customer-service-2-line"></i>
    icon: "ri-customer-service-2-line",
    heading: "24/7 Hours support",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis sit dicta voluptatum aut sequi est, laboriosam
                  commodi, error eos nostrum consectetur assumenda doloremque`,
  },
];

export default function About() {
  return (
    <>
      <div className="container">
        <div className="AboutContainer" id="About">
          <div className="AboutWrapper">
            <div className="AboutLeft">
              <div className="AboutHeading">
                <h2 className="AboutTopHeading">Why choose us</h2>

                <h1>Specialist in aviding clients on</h1>
                <h1 className="AboutHeadingHighlight">Financial Challenges</h1>
                <p className="AboutHeadingDescription">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis sit dicta voluptatum aut sequi est, laboriosam
                  commodi, error eos nostrum consectetur assumenda doloremque,
                  ducimus ex vitae blanditiis praesentium fugit voluptas.
                </p>
              </div>

              <div className="AboutBody">
                {AboutBodyContent.map((ele, index) => (
                  <div className="AboutBodyContainer" key={index}>
                    <div className="AboutBodyLeft">
                      <i className={ele.icon}></i>
                    </div>

                    <div className="AboutBodyRight">
                      <h3 className="AboutBodyRightHeading">{ele.heading}</h3>
                      <p className="AboutBodyRightDescription">
                        {ele.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="AboutRight">
              <div className="AboutRightPic">
                <img src={AboutUsPic} alt="AboutUsPic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
