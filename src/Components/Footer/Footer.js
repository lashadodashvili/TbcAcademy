import React from "react";
import "./Footer.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
const Footer = () => {
  const { width } = useWindowDimensions();
  const socialMedia = [
    "https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ce6ec7c11b174c0581e20f42bb865ce3.png",
    "https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/71ac09a5a92848cc943bf2ca2a09a6d0.png",
  ];
  const img =
    "https://static.wixstatic.com/media/dd97f4_86c58c47370442a889e9a4e9db4eb00c~mv2.png/v1/crop/x_1,y_0,w_426,h_123/fill/w_212,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%201%402x.png";
  const parseImageDimensions = (url) => {
    const widthMatch = url.match(/w_(\d+)/);
    const heightMatch = url.match(/h_(\d+)/);
    const width = widthMatch ? parseInt(widthMatch[1], 10) : null;
    const height = heightMatch ? parseInt(heightMatch[1], 10) : null;
    return { width, height };
  };
  return (
    <footer className="custom-padding-right custom-padding-left footer">
      {width <= 769 ? (
        <div style={{ width: "100%" }}>
          <img src={img} alt="footer_logo" className="tbc-logo" />
          <div className="button-socialMedia-container-mobile">
            <button>მოგვწერეთ</button>
            <div className="social-media-container-mobile">
              {socialMedia.map((img, index) => {
                const { width, height } = parseImageDimensions(img);
                return (
                  <img
                    src={img}
                    key={index}
                    alt="footer_socialmedia_icons"
                    style={{
                      width: width ? `${width / 2}px` : "auto",
                      height: height ? `${height / 2}px` : "auto",
                    }}
                  />
                );
              })}
            </div>
          </div>
          <p className="terms-and-conditions">წესები და პირობები</p>
          <h2>© 2023 ყველა უფლება დაცულია</h2>
        </div>
      ) : (
        <>
          <div>
            <img src={img} alt="footer_logo" className="tbc-logo" />
            <h2>© 2023 ყველა უფლება დაცულია</h2>
            <p className="terms-and-conditions">წესები და პირობები</p>
          </div>
          <div>
            <div className="social-media">
              {socialMedia.map((img, index) => {
                const { width, height } = parseImageDimensions(img);
                return (
                  <img
                    src={img}
                    key={index}
                    alt="footer_socialmedia_icons"
                    style={{
                      width: width ? `${width / 2}px` : "auto",
                      height: height ? `${height / 2}px` : "auto",
                    }}
                  />
                );
              })}
            </div>
            <button>მოგვწერეთ</button>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
