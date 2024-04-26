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
    items: 1,
  },
};
const ShopByCollection = () => {
  return (
    <section>
      <div className="category-heading">
        <h2>Shop by collections</h2>
        <p>Exquisite jewellery for every occasion</p>
      </div>
      <Carousel responsive={responsive}>
        <div className="categiry-item collection-product grad-odd">
          <img src="/collection-1.png" alt="category" />
          <h3 className="categiry-item-first-head">Weddings</h3>
        </div>
        <div className="categiry-item collection-product grad-even">
          <img src="/collection-2.png" alt="category" />
          <h3>Anniversary</h3>
        </div>
        <div className="categiry-item collection-product grad-odd">
          <img src="/collection-1.png" alt="category" />
          <h3 className="categiry-item-first-head">Weddings</h3>
        </div>
        <div className="categiry-item collection-product grad-even">
          <img src="/collection-2.png" alt="category" />
          <h3>Anniversary</h3>
        </div>
        <div className="categiry-item collection-product grad-odd">
          <img src="/collection-1.png" alt="category" />
          <h3 className="categiry-item-first-head">Weddings</h3>
        </div>
      </Carousel>
      <div className="view-more-btn">
        <button className="view-more">View Collections &rarr;</button>
      </div>
    </section>
  );
};

export default ShopByCollection;
