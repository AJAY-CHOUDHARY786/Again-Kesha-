
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Accordion from "react-bootstrap/Accordion";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import React, { useState } from 'react';

const Product = ({ slug }) => {
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
  return (
    <>
      <Header />
      <>
        <div className=" main-giva-container">
          <div className="left-giva-container">
            <div className="product-cr">
              <Carousel
                infiniteLoop={true}
                autoPlay={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
              >
                <div className="img-product">
                  <img src="/geeva-image.webp" alt="thum" />
                </div>
                <div className="img-product">
                  <img src="/nackless.jpg" alt="thum" />
                </div>
                <div className="img-product">
                  <img src="/geeva-image.webp" alt="thum" />
                </div>
                <div className="img-product">
                  <img src="/second-woman.jpg" alt="thum" />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="right-giva-container">
            <div className="rupee-div">
              <span className="repee">&#8377; 1,999</span>
              <span className="mrp">MRP ₹3,999</span>

              <span className="tex-all">Incl. of all taxes</span>
            </div>
            <div className="product-heading">
              <h2 className="main-heading-t">
                Anushka Sharma Rose Gold Heart Necklace
              </h2>
            </div>
            <div className="product-heading">
              <h2 className="made-heading">Made with 925 Silver</h2>
            </div>
            <div className="main-star">
              <div className="rating-container">
                <span className="star-style">★</span> <span>(4.8 | 399)</span>
              </div>
            </div>
            <div className="easy-container">
              <div className="product-card">
                <Image src="/image.png " width={40} height={40} />
                <div className="easy-heading">Easy 30 Day Return</div>
              </div>

              <div className="product-card">
                <Image src="/diamond-ring.png" width={40} height={40} />
                <div className="easy-heading">Lifetime Plating</div>
                <br />
              </div>
              <div className="product-card">
                <Image src="/warranty.png" width={40} height={40} />
                <div className="easy-heading">6-Month Warranty</div>
              </div>
              <div className="product-card">
                <Image src="/medal.png" width={40} height={40} />
                <div className="easy-heading">6-Month Warranty</div>
              </div>
            </div>
            <h4 className="delivery-time-heading">Estimated Delivery Time</h4>
            <form action="/action">
              <div className="form-container">
                <input
                  type="numbaer"
                  name="pincode"
                  placeholder="Enter 6 digit pincode"
                  className="input-number"
                />
                <button className="submit">Check</button>
              </div>
            </form>
            <h4 className="choose-title">Choose your finish</h4>
            <div className="main-row-container">
              <div className="card-crow1">
                <Image src="/blure.jpg" width={45} height={45} alt="logo" />
                <span className="rose-gold">GOLDEN</span>
              </div>
              <div className="card-crow1 set-gap">
                <Image src="/gold.jpg" width={45} height={45} alt="logo" />
                <span className="rose-gold">ROSE GOLD</span>
              </div>
              <div className="card-crow1">
                <Image src="/blure.jpg" width={45} height={45} alt="logo" />
                <span className="rose-gold">ROSE GOLD</span>
              </div>
            </div>
            <div className="gift-container">
              <input type="checkbox" Id="gift-wrap" />
              <lable for="gift-wrap" className="gift-style">
                Add <span className="gift-color"> gift wrap</span> to your order
                (₹50)
              </lable>
            </div>
            <div className="add-tocart-button">
              <button className="style-add-to-cart">ADD TO CART</button>
              <button className="style-add-to-cart">Buy Now</button>
            </div>
            <h4 className="special.heading">SPECIAL OFFERS</h4>
            <div className="card-row-container">
              <div className="offer-container">
                <h4>VDAY200</h4>
                <p>Valid on orders above Rs. 1799</p>
              </div>
              <div className="offer-container">
                <h4>FLAT300</h4>
                <p>Valid on orders above Rs. 2700</p>
              </div>
              <div className="offer-container">
                <h4>COMBO25</h4>
                <p>Buy 1 get 2nd at 25% OFF</p>
              </div>
              <div className="offer-container">
                <h4>COMBO50</h4>
                <p>Buy 2 get 3rd at 50% OFF</p>
              </div>
              <div className="offer-container">
                <h4>LOVE</h4>
                <p>15% OFF above Rs. 3500</p>
              </div>
            </div>
            <p className="cupon-applied">*Coupon can be applied at checkout</p>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="rose">
                  DESCRIPTION
                </Accordion.Header>
                <Accordion.Body>
                  <h4 className="inspiration">The Inspiration:</h4>
                  <p>
                    The Rose Gold Heart Necklace is inspired by the immaculate
                    idea of self-love, reminiscent of the tranquil waters
                    allowing you to heal and feel bliss.
                  </p>
                  <h4 className="inspiration design-container">The Design:</h4>
                  <p>
                    The Rose Gold Heart Necklace has a diagonal heart charm
                    encircling a smaller heart swaying and swirling.
                  </p>
                  <ul className="list-style-container">
                    <li>925 Silver with Rose Gold Plating</li>
                    <li>
                      Length of necklace is 43 cm and adjustable chain is 4 cm
                    </li>
                    <li>Charm dimensions are 1.9 cm x 1.8 cm</li>
                    <li>
                      Comes with the GIVA jewellery kit and authenticity
                      certificate
                    </li>
                  </ul>
                  <h4 className="inspiration">Styling Tip:</h4>
                  <p>Style it with a white button-down shirt and grey denim.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="rose">SHIPPING</Accordion.Header>
                <Accordion.Body>
                  <ul className="list-style-container">
                    <li>Free express shipping</li>
                    <li>30 days return policy</li>
                    <li>6 month warranty</li>
                    <li>
                      Brand owned and marketed by: Indiejewel Fashions Private
                      Limited
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            {/* <h2 className="make-special">Similar Products</h2> */}
        
  
            <h2 className="make-special">Make It Special With</h2>
            <div className="earning-and-padend">
              <Image src="/ring.jpg" width={100} height={100} alt="logo" />

              <div className="earning-container">
                <p>Earrings and Pendant Proposal Box</p>

                <div className="pendent-box">
                  <p>&#8377; 299</p>
                  <span className="mrp">MRP ₹599</span>
                  <></>
                </div>
              </div>
              <div className="check-box-container">
                <input type="checkbox" className="cheackbox-image" />
              </div>
            </div>

            <h2 className="make-special">Frequently Bought Together</h2>
            <div className="two-image-container">
              <Image src="/ring.jpg" width={100} height={100} alt="logo" />
              <div className="pluses">+</div>
              <div>
                <Image src="/ring.jpg" width={100} height={100} alt="logo" />
              </div>
            </div>

            <div className="total-price-container">
              <span className="price-total">
                Total price:
                <span className="current-pr">&#8377; 3,698.00</span>
              </span>

              <span className="price-total">&#8377; 7,398.00</span>
            </div>
            <div className="total-price-container">
              <button className="total-selected">Add Selected To Cart</button>
            </div>
            <div className="read-lable">
              <input
                type="checkbox"
                checked="checked"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1" className="lable-total-cut">
                Rose Gold Heart Melting Chain Ring ₹1,699.00
                <span className="mrp">MRP ₹3,999</span>
                <span>
                  <FaStar className="modifie-star" />
                </span>
                <span>
                  <FaStar className="modifie-star" />
                </span>
                <span>
                  <FaStar className="modifie-star" />
                </span>
                <span>
                  <FaStar className="modifie-star" />
                </span>
                <span>
                  <FaStar className="modifie-star" />
                </span>
                (84)
              </label>
            </div>
            <div className="cecond-container">
              <input
                type="checkbox"
                checked="checked"
                name="vehicle1"
                value="Bike"
              />
              <label for="vehicle1" className="lable-total-cut">
                Anushka Sharma Rose Gold Heart Nec…
                <span className="mrp">MRP ₹3,999</span>
              </label>
            </div>
            <div className="cecond-container">
              <span>
                <FaStar className="modifie-star" />
              </span>
              <span>
                <FaStar className="modifie-star" />
              </span>
              <span>
                <FaStar className="modifie-star" />
              </span>
              <span>
                <FaStar className="modifie-star" />
              </span>
              <span>
                <FaStar className="modifie-star" />
              </span>
            </div>
            <div className="cecond-container">
              <h2 className="customer-heading">Customer Reviews</h2>
            </div>
            <span>
              <FaStar className="modifie-star1" />
            </span>
            <span>
              <FaStar className="modifie-star1" />
            </span>
            <span>
              <FaStar className="modifie-star1" />
            </span>
            <span>
              <FaStar className="modifie-star1" />
            </span>
            <span>
              <FaStar className="modifie-star1" />
            </span>

            <span className="review-modifie">84 Review</span>
            <div className="write-a-review">
              <button className="write-review">Write a review</button>
            </div>
            <div className="reviev-card-container">
              <div className="second-review-card ">
                <div className="main-card-review">
                  <Image
                    src="/geeva-image.webp"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                </div>
                <div className="heading-review-padding">
                  <h4>
                    Abhishek
                    <span>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="vehicle1"
                        value="Bike"
                      />
                    </span>
                  </h4>
                  <h5 className="date">24/02/2024</h5>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <p>It’s Amazing</p>
                </div>
              </div>
              <div className="second-review-card ">
                <div className="main-card-review">
                  <Image
                    src="/hand.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                </div>
                <div className="heading-review-padding">
                  <h4>
                    sri
                    <span>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="vehicle1"
                        value="Bike"
                      />
                    </span>
                  </h4>
                  <h5 className="date">24/02/2024</h5>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <p>It’s Amazing</p>
                </div>
              </div>
              <div className="second-review-card ">
                <div className="main-card-review">
                  <Image
                    src="/ring.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                </div>
                <div className="heading-review-padding">
                  <h4>
                    sri
                    <span>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="vehicle1"
                        value="Bike"
                      />
                    </span>
                  </h4>
                  <h5 className="date">24/02/2024</h5>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <p>It’s Amazing</p>
                </div>
              </div>
              <div className="second-review-card ">
                <div className="main-card-review">
                  <Image
                    src="/nackless.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                </div>
                <div className="heading-review-padding">
                  <h4>
                    sri
                    <span>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="vehicle1"
                        value="Bike"
                      />
                    </span>
                  </h4>
                  <h5 className="date">24/02/2024</h5>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <p>It’s Amazing</p>
                </div>
              </div>
              <div className="second-review-card ">
                <div className="main-card-review">
                  <Image
                    src="/nackless.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                </div>
                <div className="heading-review-padding">
                  <h4>
                    sri
                    <span>
                      <input
                        type="checkbox"
                        checked="checked"
                        name="vehicle1"
                        value="Bike"
                      />
                    </span>
                  </h4>
                  <h5 className="date">24/02/2024</h5>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <span>
                    <FaStar className="modifie-star" />
                  </span>
                  <p>It’s Amazing</p>
                </div>
              </div>
            </div>
            <div className="show-review">
              <button className="show-moore-review">Show More Review</button>
            </div>
            <div className="customer-photo">
              <h3 className="customer-photo">Customer Photos (16)</h3>
              <div className="customer-main">
              <div className="customer-card">
              <Image
                    src="/nackless.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                  
              </div>
              <div className="customer-card">
              <Image
                    src="/nackless.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                  
              </div>
              <div className="customer-card">
              <Image
                    src="/nackless.jpg"
                    width={150}
                    height={150}
                    alt="logo"
                    className="review-imag"
                  />
                  
              </div>
              </div>
              <div className="">
              <h3 className="customer-photo">Customer Photos (47)</h3>
              <spna> <FaStar className="modifie-star" /></spna><span>The fitting is perfect. But the cloth is quite thin. But overall quality is good and colour is also good</span>
              </div>
              <div className="fitting">   
              <p className="shadab pt-4">Shadab Mansuri | 8 Dec 2023</p>
              <div className="thumnakle">
             <FaRegThumbsUp className="upthumbs"/> <span  className="px-2">1</span> <FaRegThumbsDown className="downthumbs"/> <span className="px-2">0</span>
              </div>
          
              </div>
              <hr/>
            </div>
          </div>
         
        </div>
        
        <seaction>
          <h2 className="frequency-headin ">Frequently Asked Question!</h2>
          <div className="main-container-frequenc">
            <div className="left-card-frequency">
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <div className="accordian-tem1">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="header-hover">
                      <h4 className="accordian-heading">
                        How do I determine my ring size when shopping online?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      We provide a comprehensive ring size guide on our website
                      to help you accurately measure your ring size at home.
                      Additionally, we offer a complimentary ring sizer upon
                      request to ensure a perfect fit for your purchase.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordian-tem1">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="header-hover">
                      <h4 className="accordian-heading">
                        What materials are used in your jewelry pieces?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      Our jewelry pieces are crafted with the finest materials,
                      including high-quality precious metals such as gold,
                      silver, and platinum. We also use authentic gemstones
                      sourced from trusted suppliers to ensure the highest
                      standards of quality and authenticity.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
              <Accordion defaultActiveKey={["1"]} alwaysOpen>
                <div className="accordian-tem1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="header-hover">
                      <h4 className="accordian-heading">
                        Do you offer custom jewelry designs?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we offer personalized and custom jewelry design
                      services to bring your unique vision to life. Our
                      experienced craftsmen work closely with you to create
                      one-of-a-kind pieces that reflect your individual style
                      and preferences.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
            <div className="right-card-frequency">
              <Accordion defaultActiveKey={["1"]} alwaysOpen>
                <div className="accordian-tem1">
                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="header-hover">
                      <h4 className="accordian-heading">
                        How can I care for and maintain my jewelry to ensure its
                        longevity?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      We provide comprehensive care instructions for each type
                      of jewelry on our website. Additionally, we offer tips on
                      cleaning and storing your jewelry properly to maintain its
                      brilliance and luster over time.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordian-tem1">
                  <Accordion.Item eventKey="6">
                    <Accordion.Header className="header-hover">
                      <h4 className="accordian-heading">
                        What is your return and exchange policy?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      We offer a hassle-free return and exchange policy within a
                      specified timeframe, allowing you to return or exchange
                      your purchase if it does not meet your expectations.
                      Please refer to our detailed return policy on our website
                      for more information on the process and eligibility
                      criteria.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
              <Accordion defaultActiveKey={["7"]} alwaysOpen>
                <div className="accordian-tem1">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="header-hover">
                      <h4 className="accordian-heading">
                        What are your shipping destinations?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      Once we receive your order, we typically ship the products
                      within 2 working days. The expected delivery time for your
                      shipment is approximately 5-7 working days from the date
                      of placing the order. However, please note that India is a
                      geographically vast country, so additional time may be
                      required for remote areas and unforeseen weather
                      conditions.
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
          </div>
        </seaction>
      </>
      <Footer />
    </>
  );
};

export default Product;
