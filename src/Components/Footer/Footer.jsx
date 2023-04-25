import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="FooterContainer">
          <div className="FooterWrapper">
            <div className="FooterContent">
              <div className="FooterTopContainer">
                <div className="FooterTopFirst border">
                  <div className="FooterTopFirstTop">
                    <h2 className="FooterHighlight FooterHighlightH2">
                      Digency
                    </h2>
                    <p className="FooterTopPara">Grow with us</p>
                  </div>
                  <div className="FooterTopFirstBottom">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati aperiam perferendis fugit.
                    </p>
                  </div>
                </div>
                <div className="FooterTopSecond border">
                  <div className="TopSecondContainer">
                    <ul className="FooterUl">
                      <li className="FooterHighlight">
                        <a href="#Solutions">Solutions</a>
                      </li>

                      <li>
                        <a href="#Marketing">Marketing</a>
                      </li>
                      <li>
                        <a href="#Analytics">Analytics</a>
                      </li>
                      <li>
                        <a href="#Commence">Commence</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="FooterTopThird border">
                  <div className="TopThirdContainer">
                    <ul className="FooterUl">
                      <li className="FooterHighlight">
                        <a href="#Support">Support</a>
                      </li>

                      <li>
                        <a href="#Pricing">Pricing</a>
                      </li>
                      <li>
                        <a href="#Documentation">Documentation</a>
                      </li>
                      <li>
                        <a href="#Guides">Guides</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="FooterTopFourth border">
                  <div className="TopFourthContainer">
                    <ul className="FooterUl">
                      <li className="FooterHighlight">
                        <a href="#Company">Company</a>
                      </li>
                      <li>
                        <a href="#About">About</a>
                      </li>
                      <li>
                        <a href="#Jobs">Jobs</a>
                      </li>
                      <li>
                        <a href="#JobsBlogs">JobsBlogs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="FooterBottomContainer">
                <p>
                  © Copyright Billal.Developed by Moniruzzaman Billal.All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
