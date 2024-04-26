import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const BanglesBuyNow = () => {
 
  return (
    <div className="buynow">
      <div className="view-box">
        <img src="/bangle-buy.png" alt="buy" className="view-box-img" />
        <div className="Product-box">
          <Carousel responsive={responsive}>
            <div className="buy-now-product">
              <img src="/buy-now-p.png" alt="buy-now" />
              <h4>BANGLES</h4>
              <p>WHITE COLLECTION</p>
              <h2>Starts from ₹399</h2>
              <Link href={`#`}>BUY NOW</Link>
            </div>
            <div className="buy-now-product">
              <img src="/buy-now-p.png" alt="buy-now" />
              <h4>BANGLES</h4>
              <p>WHITE COLLECTION</p>
              <h2>Starts from ₹399</h2>
              <Link href={`#`}>BUY NOW</Link>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BanglesBuyNow;
