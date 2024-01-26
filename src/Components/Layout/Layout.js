import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer/Footer";
import NavbarMenu from "../Navbar/NavbarMenu";
import useWindowDimensions from "../../utils/useWindowDimensions";
import "./Layout.css";

const Layout = ({ children }) => {
  const { width } = useWindowDimensions();
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0); // Using useRef to persist the lastScrollY value

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScreenSmall = width <= 769;

      if (isScreenSmall) {
        if (currentScrollY > lastScrollY.current) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(currentScrollY > 0);
      }

      lastScrollY.current = currentScrollY; // Update the current value of the ref
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [width]); // width is a dependency

  return (
    <main>
      <div
        className={`header ${
          isScrolled
            ? "hide-header transparent-nav-bg"
            : `show-header ${
                width > 769 ? "bg-transparent" : ""
              } transparent-nav-bg`
        }`}
      >
        <NavbarMenu />
      </div>
      <div className="nav-bg"></div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
