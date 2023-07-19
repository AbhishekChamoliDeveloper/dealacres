"use client"
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { services } from "./data";

const Services = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newDeviceType = "";

      if (width >= 1024) {
        newDeviceType = "desktop";
      } else if (width >= 600) {
        newDeviceType = "tablet";
      } else {
        newDeviceType = "mobile";
      }

      setDeviceType(newDeviceType);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
      slidesToSlide: 3, 
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, 
    },
  };

  return (
    <div>
      <div className="w-full text-2xl sm:text-2xl lg:text-4xl font-semibold font-[Poppins] flex justify-center">
        <h2 className="mt-6 text-gray-700  ">
          <span className="text-blue-600">Explore!</span> Our Services
        </h2>
      </div>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        // ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        focusOnSelect={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-30-px"
      >
        {services.map((src) => (
          <div key={src.name}>
            <Card imgsrc={src.link} service={src.name} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Services;