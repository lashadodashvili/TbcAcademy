import React, { useState, useCallback, useEffect } from "react";
import "./Carousel.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(images.length / 3);
  const [touchStartPosition, setTouchStartPosition] = useState(null);
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchStartPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchStartPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchStartPosition - currentTouch;

    if (diff > 5) {
      goToNextSlide();
    } else if (diff < -5) {
      goToPrevSlide();
    }

    setTouchStartPosition(null);
  };

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((current) =>
      current === 0 ? totalSlides - 1 : current - 1
    );
  }, [totalSlides]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((current) =>
      current === totalSlides - 1 ? 0 : current + 1
    );
  }, [totalSlides]);
  const navigateToSlide = (index) => {
    setCurrentSlide(index);
  };
  const parseImageDimensions = (url) => {
    const widthMatch = url.match(/w_(\d+)/);
    const heightMatch = url.match(/h_(\d+)/);
    const width = widthMatch ? parseInt(widthMatch[1], 10) : null;
    const height = heightMatch ? parseInt(heightMatch[1], 10) : null;
    return { width, height };
  };
  const getSlides = () => {
    let slides = [];
    for (let i = 0; i < images.length; i += 3) {
      slides.push(images.slice(i, i + 3));
    }
    return slides;
  };
  const slides = getSlides();
  useEffect(() => {
    const timer = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [goToNextSlide]);
  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <GrPrevious className="prev " onClick={goToPrevSlide} />
      <GrNext className="next " onClick={goToNextSlide} />

      {slides.map((slideImages, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          {slideImages.map((image, imgIndex) => {
            const { width, height } = parseImageDimensions(image);
            return (
              <img
                key={imgIndex}
                src={image}
                alt="carousel_image"
                style={{
                  width: width ? `${width / 2}px` : "auto",
                  height: height ? `${height / 2}px` : "auto",
                }}
              />
            );
          })}
        </div>
      ))}
      <div className="navigation">
        {slides.map((_, index) => (
          <FaCircle
            key={index}
            className={`nav-button ${index === currentSlide ? "active" : ""}`}
            onClick={() => navigateToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
