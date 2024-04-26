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
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ProductUnder = () => {
  return (
    <section>
      <div className="category-heading">
        <h2>Products Under</h2>
        <p>Exquisite jewellery for every occasion</p>
      </div>
      <Carousel responsive={responsive}>
        <div className="categiry-item under-product grad-odd">
          <img src="/54f23171c3c434e1b49022a9cdbddc5a.jpeg" alt="category" />
          <h3 className="categiry-item-first-head">Under &#8377;399</h3>
        </div>
        <div className="categiry-item under-product grad-even">
          <img src="/2.jpeg" alt="category" />
          <h3>Under &#8377;499</h3>
        </div>
        <div className="categiry-item under-product grad-odd">
          <img src="/54f23171c3c434e1b49022a9cdbddc5a.jpeg" alt="category" />
          <h3 className="categiry-item-first-head">Under &#8377;599</h3>
        </div>
        <div className="categiry-item under-product grad-even">
          <img src="/3.jpeg" alt="category" />
          <h3>Under &#8377;699</h3>
        </div>
        <div className="categiry-item under-product grad-odd">
          <img src="/4.jpeg" alt="category" />
          <h3 className="categiry-item-first-head">Under &#8377;799</h3>
        </div>
      </Carousel>
    </section>
  );
};

export default ProductUnder;
