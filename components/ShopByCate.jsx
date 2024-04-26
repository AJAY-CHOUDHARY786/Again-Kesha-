import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
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
const ShopByCate = () => {
  return (
    <section>
      <div className="category-heading">
        <h2>Our Category</h2>
        <p>Exquisite jewellery for every occasion</p>
      </div>
      <Carousel responsive={responsive}>
        <div className="categiry-item grad-odd">
          <img src="/54f23171c3c434e1b49022a9cdbddc5a.jpeg" alt="category" />
          <h3 className="categiry-item-first-head">Bangles</h3>
        </div>
        <div className="categiry-item grad-even">
          <img src="/2.jpeg" alt="category" />
          <h3>Chains</h3>
        </div>
        <div className="categiry-item grad-odd">
          <img src="/3.jpeg" alt="category" />
          <h3 className="categiry-item-first-head">Earrings</h3>
        </div>
        <div className="categiry-item grad-even">
          <img src="/54f23171c3c434e1b49022a9cdbddc5a.jpeg" alt="category" />
          <h3>Neckwears</h3>
        </div>
        <div className="categiry-item grad-odd">
          <img src="/4.jpeg" alt="category" />
          <h3 className="categiry-item-first-head">Pendants</h3>
        </div>
        <div className="categiry-item grad-even">
          <img src="/4.jpeg" alt="category" />
          <h3>Rings</h3>
        </div>
      </Carousel>

      <div className="shop-by-custome">
        <h2>Shop By Your Own Style</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Morbi eu at et id nulla at
          quisque diam vestibulum. Odio at mauris varius lacus eu maecenas diam
          sit ac.{" "}
        </p>
        <Link href="/custom_product">Custom Jewellery</Link>
      </div>
    </section>
  );
};

export default ShopByCate;
