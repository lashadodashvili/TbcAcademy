import React from "react";
import NavbarItems from "./NavbarItems";
import { DynamicMenu } from "../../utils/menu";
import "./Navbar.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
import BurgerMenu from "./BurgerMenu";

const NavbarMenu = () => {
  const menu = DynamicMenu();
  const { width } = useWindowDimensions();

  return (
    <nav className="custom-padding-right custom-padding-left">
      <img
        src="assets/Logo.svg"
        alt="logo"
        className={`${width < 769 ? "" : ""}`}
      />
      {width < 769 ? (
        <BurgerMenu />
      ) : (
        <div className="navbar-items-container">
          {menu.map((item, index) => (
            <NavbarItems
              menuText={item.menuText}
              href={item.href}
              key={index}
            />
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavbarMenu;
