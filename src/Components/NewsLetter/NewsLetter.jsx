import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <>
      <div className="NewsLetterContainer">
        <div className="container">
          <div className="NewsLetterWrapper">
            <div className="NewsLetterWrapperContainer">
              <div className="NewsLetterWrapperContainerLeft">
                <div className="NewsLetterLeft">
                  <p className="highlight">Let's work</p>
                  <h1 className="NewsLetterLeftH1">
                    Explore the <span className="hiddenHighlight">hidden</span>{" "}
                    idea and subscribe!
                  </h1>
                </div>
              </div>
              <div className="NewsLetterWrapperContainerRight">
                <div className="NewsLetterRight">
                  <input
                    type="email"
                    placeholder="Email"
                    className="inputClass"
                  />
                  <button className="secondary_btn">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
