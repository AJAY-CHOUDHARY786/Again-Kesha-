import Header from "@/components/Header";
import { IoMdClose } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Footer from "@/components/Footer";
import React from "react";
const wishlist = () => {
  return (
    <>
      <Header />
      <div className="wish-list-container">
        <div>
          <div className="my-wish-list">
            <h2 className="my-wish-list">My Wishlist</h2>
            <div className="share-button">
              <CiShare2 className="share-button" />
              <BsThreeDotsVertical className="three-icon" />
            </div>
          </div>
          <div className="min-container-product">
            <div className="product-container">
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>

                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>

              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>{" "}
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
              <div className="product neck-product">
                <div className="product-img">
                  <span className="wishlist">
                    <IoMdClose />
                  </span>
                  <img src="/product.jpeg" alt="product" />
                </div>
                <div className="product-details">
                  <p>BANGLES</p>
                  <h2>
                    Cubic Zirconia Minimalist Ring, Ring for women, 925Sterling
                    S...
                  </h2>
                  <div className="div-price">
                    <span className="price">MRP: &#8377;2556</span>
                    <span className="offer">32% Off</span>
                  </div>
                </div>
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default wishlist;
