import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Link from "next/link";
const MostGifted = () => {
  return (
    <div>
      <div className="category-heading">
        <h2>Most Gifted</h2>
        <p>Exquisite jewellery for every occasion</p>
      </div>
      <div className="product-container">
        <div className="product">
          <div className="product-img">
          <span className="wishlist mx-4">
            <CiShare2 />
            </span>
            <span className="wishlist">
              <FaRegHeart />
            </span>
           <Link href="product/rr"> <img src="/product.jpeg" alt="product" />
            <p>Best Seller</p>
            </Link>
          </div>
          <div className="product-details">
            <p>EARRINGS</p>
            <h2>
              Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling S...
            </h2>
            <div className="div-price">
              <span className="price">MRP: &#8377;2556</span>{" "}
              <span className="offer">32% Off</span>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
        <div className="product">
          <div className="product-img">
          <span className="wishlist mx-4">
            <CiShare2 />
            </span>
            <span className="wishlist">
              <FaRegHeart />
            </span>
            <img src="/product.jpeg" alt="product" />
            <p>Best Seller</p>
          </div>
          <div className="product-details">
            <p>EARRINGS</p>
            <h2>
              Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling S...
            </h2>
            <div className="div-price">
              <span className="price">MRP: &#8377;2556</span>
              <span className="offer">32% Off</span>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
        <div className="product">
          <div className="product-img">
          <span className="wishlist mx-4">
            <CiShare2 />
            </span>
            <span className="wishlist">
              <FaRegHeart />
            </span>
            <img src="/product.jpeg" alt="product" />
            <p>Best Seller</p>
          </div>
          <div className="product-details">
            <p>EARRINGS</p>
            <h2>
              Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling S...
            </h2>
            <div className="div-price">
              <span className="price">MRP: &#8377;2556</span>{" "}
              <span className="offer">32% Off</span>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
        <div className="product">
          <div className="product-img">
          <span className="wishlist mx-4">
            <CiShare2 />
            </span>
            <span className="wishlist">
              <FaRegHeart />
            </span>
            <img src="/product.jpeg" alt="product" />
            <p>Best Seller</p>
          </div>
          <div className="product-details">
            <p>EARRINGS</p>
            <h2>
              Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling S...
            </h2>
            <div className="div-price">
              <span className="price">MRP: &#8377;2556</span>{" "}
              <span className="offer">32% Off</span>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
        <div className="product">
          <div className="product-img">
          <span className="wishlist mx-4">
            <CiShare2 />
            </span>
            <span className="wishlist">
              <FaRegHeart />
            </span>
            <img src="/product.jpeg" alt="product" />
            <p>Best Seller</p>
          </div>
          <div className="product-details">
            <p>EARRINGS</p>
            <h2>
              Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling S...
            </h2>
            <div className="div-price">
              <span className="price">MRP: &#8377;2556</span>{" "}
              <span className="offer">32% Off</span>
            </div>
          </div>
          <button>Add To Cart</button>
        </div>
      </div>
      <div className="view-more-btn">
        <button className="view-more">View more &rarr;</button>
      </div>
    </div>
  );
};

export default MostGifted;
