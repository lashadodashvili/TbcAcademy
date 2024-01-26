import React, { useState, useEffect } from "react";
import "./Burger-Menu.css";
import "./Overlay.css";
import { DynamicMenu } from "../../utils/menu";
import NavbarItems from "./NavbarItems";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menu = DynamicMenu();
  const showBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);
  return (
    <div>
      {isOpen && <div className="overlay"></div>}
      <div
        className={`burger-menu ${isOpen ? "open" : ""}`}
        onClick={showBurgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isOpen && (
        <div className={`menu-content menu-content-open`}>
          {menu.map((item, index) => (
            <NavbarItems
              menuText={item.menuText}
              href={item.href}
              key={index}
              onClick={closeMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
