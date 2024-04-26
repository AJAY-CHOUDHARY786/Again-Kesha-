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
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const HappyCustomers = () => {
  return (
    <div>
      <div className="category-heading">
        <h2>Our Happy Customers</h2>
        <p>Earrings In the Good Vibes</p>
      </div>
      <div className="happy-customers">
        <Carousel responsive={responsive}>
          <div className="happy-cus">
            <img src="/happy-1.jpeg" alt="category" />
            <p>
              Lorem ipsum dolor sit amet sectetur. Morbi enim faucibus mi dui.
              Sedipsum ullamcorper sed.
            </p>
            <h3>— John Doe</h3>
          </div>
          <div className="happy-cus">
            <img src="/happy-1.jpeg" alt="category" />
            <p>
              Lorem ipsum dolor sit amet sectetur. Morbi enim faucibus mi dui.
              Sedipsum ullamcorper sed.
            </p>
            <h3>— John Doe</h3>
          </div>
          <div className="happy-cus">
            <img src="/happy-1.jpeg" alt="category" />
            <p>
              Lorem ipsum dolor sit amet sectetur. Morbi enim faucibus mi dui.
              Sedipsum ullamcorper sed.
            </p>
            <h3>— John Doe</h3>
          </div>
          <div className="happy-cus">
            <img src="/happy-1.jpeg" alt="category" />
            <p>
              Lorem ipsum dolor sit amet sectetur. Morbi enim faucibus mi dui.
              Sedipsum ullamcorper sed.
            </p>
            <h3>— John Doe</h3>
          </div>
          <div className="happy-cus">
            <img src="/happy-1.jpeg" alt="category" />
            <p>
              Lorem ipsum dolor sit amet sectetur. Morbi enim faucibus mi dui.
              Sedipsum ullamcorper sed.
            </p>
            <h3>— John Doe</h3>
          </div>
          <div className="happy-cus">
            <img src="/happy-1.jpeg" alt="category" />
            <p>
              Lorem ipsum dolor sit amet sectetur. Morbi enim faucibus mi dui.
              Sedipsum ullamcorper sed.
            </p>
            <h3>— John Doe</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HappyCustomers;
