import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isExpanded, setExpanded] = useState(false);

  const menuItems = [
    { text: "Home", icon: "icons/home.svg", link: "/" },
    { text: "Add character", icon: "icons/addChar.svg", link: "/addcharacter" },
    {
      text: "What is D&D",
      icon: "icons/questionMark.svg",
      link: "https://dnd.wizards.com/start-playing-dnd",
    },
  ];
  return (
    <div
      className={
        isExpanded ? "nav-container" : "nav-container nav-container-notExpanded"
      }
    >
      <div className="nav-upper">
        <div className="nav-header">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/logo.svg" alt="nav brand" />
              <h3>D&D Database</h3>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpanded(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="nav-menu">
            {menuItems.map(({ text, icon, link }) => (
              <a
                key={text}
                href={link}
                className={
                  isExpanded
                    ? "nav-menu__item"
                    : "nav-menu__item nav-menu__item-notExpanded"
                }
              >
                <img src={icon} alt="" />
                {isExpanded && <p>{text}</p>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
