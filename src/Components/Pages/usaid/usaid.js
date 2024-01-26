import React from "react";
import MainBanner from "../../MainBanner/MainBanner";
import CourseCard from "../../CourseCard/CourseCard";
import { data } from "../../../utils/data";
import Carousel from "../../CarouselComponent/Carousel";
import Faq from "../../Faq/Faq";
import useWindowDimensions from "../../../utils/useWindowDimensions";
const Usaid = () => {
  const { width } = useWindowDimensions();
  const bannerImage =
    width <= 769
      ? data.coruseDescription.bannerImageMobile
      : data.coruseDescription.bannerImage;
  return (
    <div>
      <section className="banner-section">
        <MainBanner
          title={data.coruseDescription.title}
          course={data.coruseDescription.course}
          mainImage={bannerImage}
        />
      </section>
      <section className="course-description-section custom-padding-right custom-padding-left">
        <div className="  course-description-container">
          <p>{data.coruseDescription.description}</p>
        </div>
        <button className="description-blue-button">გაიგე მეტი</button>
      </section>
      <section className="course-cards-section custom-padding-right custom-padding-left  ">
        <h6>{data.learningCourses.title}</h6>
        <div className="course-cards-container">
          {data.learningCourses.courses.map((card, index) => (
            <CourseCard key={index} data={card} />
          ))}
        </div>
      </section>
      <section className=" carousel-section ">
        <h6>{data.projectPartniors.title}</h6>
        <div>
          <Carousel images={data.projectPartniors.images} />
        </div>
      </section>
      <section className="custom-padding-right custom-padding-left faq-section">
        <Faq data={data} showTitle={true} />
      </section>
    </div>
  );
};

export default Usaid;
