import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarItems = ({ href, menuText, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`${isActive ? "active-page " : ""}`}
      onClick={onClick}
    >
      {menuText}
    </Link>
  );
};

export default NavbarItems;
