import React, { useState } from "react";
// import "./NavBar/NavBar.css";
import "./NavBar.css";

const NavLinks = [
  {
    path: "#Home",
    display: "Home",
  },

  {
    path: "#Services",
    display: "Services",
  },
  {
    path: "#About",
    display: "About",
  },
  {
    path: "#Projects",
    display: "Projects",
  },
  {
    path: "#Blog",
    display: "Blog",
  },
];

export default function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="container">
      <div className="navContainer">
        <div className="NavWrapper">
          {/* navLeft side  */}
          <div className="logo navLeft">
            {/* <h1>Logo</h1> */}
            <h1>
              <a href="#Home">Logo</a>
            </h1>
          </div>
          {/* navLeft side ends  */}
          {/* middle side  */}
          <div className="NavLinks middle">
            <ul className={menuActive ? "Menu MobileMenuLink" : "Menu"}>
              {NavLinks.map((ele, index) => (
                <li className="Menu_items" key={index}>
                  <a
                    href={ele.path}
                    className="Menu_links"
                    onClick={() =>
                      menuActive
                        ? setMenuActive(!menuActive)
                        : setMenuActive(menuActive)
                    }
                  >
                    {ele.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* middle side ends  */}
          {/* navRight side  */}
          <div className=" navRight">
            <div className="light-theme">
              <i className="ri-sun-line"></i>
              <span>Light Mode</span>
            </div>

            <div className="HamBurgerMenu ">
              <i
                className={menuActive ? " ri-close-line " : "ri-menu-line"}
                onClick={() => setMenuActive(!menuActive)}
              ></i>
            </div>
          </div>
          {/* navRight side ends  */}
        </div>
      </div>
    </div>
  );
}
