import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const InstaGraamVideo = () => {
  return (
    <section>
      <div className="container">
        <div className="category-heading">
          <h2>Our Gallery</h2>
          <p>Exquisite jewellery for every occasion</p>
        </div>
        <Carousel responsive={responsive}>
          <div className="insta-img">
            <img src="/instagram.png" alt="category" />
          </div>
          <div className="insta-img">
            <img src="/instagram.png" alt="category" />
          </div>
          <div className="insta-img">
            <img src="/instagram.png" alt="category" />
          </div>
          <div className="insta-img">
            <img src="/instagram.png" alt="category" />
          </div>
          <div className="insta-img">
            <img src="/instagram.png" alt="category" />
          </div>
        </Carousel>
        <div className="view-more-btn">
          <button className="view-more">View more &rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default InstaGraamVideo;
