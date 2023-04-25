import React from "react";
import "./Counter.css";

const CounterData = [
  {
    number: "5k",
    text: "Clients",
  },
  {
    number: "350",
    text: "Running projects",
  },
  {
    number: "900",
    text: "Projects completed",
  },
];

export default function Counter() {
  return (
    <>
      <div className="CounterContainer">
        <div className="container">
          <div className="counter">
            <div className="counterWrapper">
              {CounterData.map((ele, index) => (
                <div className="counterItem" key={index}>
                  <h3 className="counterNumber">{ele.number}+</h3>
                  <h4 className="counterTitle">{ele.text}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
