import React, { useState } from "react";
import "./NavBar/NavBar.css";

const NavLinks = [
  {
    path: "#Home",
    display: "Home",
  },
  {
    path: "#About",
    display: "About",
  },
  {
    path: "#Services",
    display: "Services",
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
      <div className="NavWrapper">
        {/* left side  */}
        <div className="logo left">
          <h1>Logo</h1>
        </div>
        {/* left side ends  */}
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
        {/* right side  */}
        <div className=" right">
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
        {/* right side ends  */}
      </div>
    </div>
  );
}
