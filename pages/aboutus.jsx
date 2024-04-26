import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

import Footer from "@/components/Footer";
import Crousel from "@/components/CarouselComponent";
import CarouselComponent from "@/components/CarouselComponent";
const aboutus = () => {
  return (
    <>
      <Header />
      <div className="abot-container mb-4">
        <h2 className="main-abot-conatner text-center">
          About Our Online Store
        </h2>
        <div className="alukas-para text-center">
          Alukas providing rare & beautiful items sourced both locally &
          globally.
        </div>
        <div className="main-two-iamge">
          <div className="first-p-image">
            <img src="/alexa.png" alt="category" className="first-c" />
          </div>
          <div className="second-p">
            <img src="/palexa.jpg" alt="category" className="first-c" />
          </div>
        </div>
        <div className="container">
          <div className="main-two-iamge">
            <div className="our-st d-flex align-item-center">
              <h4 className="our-stor">Our Story</h4>
              <span className="line-abot">
                <hr className="hprizontal-adot " />
              </span>
            </div>
            <div className="content-story">
              <p className="our-story">
                Apparently we had reached a great height in the atmosphere, for
                the sky was a dead black has been the industry’s standard dummy
                text ever since the 1500s.
              </p>
              <p className="to-shewing">
                Wrote water woman of heart it total other. By in entirely
                securing suitable graceful at families improved. Zealously few
                furniture repulsive was agreeable consisted difficult. Collected
                breakfast estimable questions in to favourite it. Known he place
                worth words it as to. Spoke now noise off smart her ready.
              </p>
              <p className="to-shewing">
                To shewing another demands to. Marianne property cheerful
                informed at striking at. Clothes parlors however by cottage on.
                In views it or meant drift to. Be concern parlors settled or do
                shyness address. Remainder northward performed out for
                moonlight. Yet late add name was rent park from rich.
              </p>
            </div>
          </div>
        </div>

        <div className="main-two-iamge">
          <div className="our-st d-flex align-item-center ">
            <img src="/alexa.png" alt="category" className="first-c" />
          </div>
          <div className="our-st thired-product">
            <h2 class="heading-title">Our Mission</h2>
            <p className="be-in-entirely">
              By in entirely securing suitable graceful at families improved.
              Zealously few furniture repulsive was agreeable consisted
              difficult. Collected breakfast estimable questions in to favourite
              it. Known he place worth words it as to. Spoke now noise off smart
              her ready.
            </p>
            <h2 class="heading-title">Our Vision</h2>
            <p className="be-in-entirel">
              We were supposed to head to California this weekend but last
              minute had to cancel and I’m so bummed I was so ready for the
              beach!! These pictures were from last weekend when the weather.
            </p>
          </div>
        </div>
        <h2 className="quality-product-m">Qulaity Products - We Promise!</h2>
        <div className="quality-product">
          <div className="quality-card">
            <div className="quality-deside">1</div>
            <h4>
              It’s Always the <br />
              Right Size
            </h4>
            <p className="be-in-entirel">
              Value proposition incubator user experience advisor. Virality
              hackathon pitch ownership paradigm.
            </p>
          </div>
          <div className="quality-card">
            <div className="quality-deside">2</div>
            <h4>
              Nature Quality
              <br />
              Timeless Design
            </h4>
            <p className="be-in-entirel">
              Focus freemium ecosystem responsive web design scrum project.
              Equity market user experience level.
            </p>
          </div>
          <div className="quality-card">
            <div className="quality-deside">3</div>
            <h4>
              Made in Austin,
              <br />
              Risk-free
            </h4>
            <p className="be-in-entirel">
              Burn rate conversion ramen iteration validation startup.
              Crowdfunding iteration success research.
            </p>
          </div>
          <hr />
        </div>
        <h2 className="quality-product-m">The Leader Board Of Our Company</h2>
        <div className="quality-product">
          <div className="jlewery-card-container">
            <Image
              src="/jwelery.jpg"
              height={360}
              width={340}
              alt="product"
              className="jewelry-image"
            />

            <div className="Nimroad">
              <h2 className="nimrod-t">Nimroad</h2>
              <p className="founder-t">Founder/ CEO</p>
            </div>
          </div>

          <div className="jlewery-card-container">
            <Image
              src="/jwelery.jpg"
              height={360}
              width={340}
              alt="product"
              className="jewelry-image"
            />
            <div className="Nimroad">
              <h2 className="nimrod-t">Nimroad</h2>
              <p className="founder-t">Founder/ CEO</p>
            </div>
          </div>
          <div className="jlewery-card-container">
            <Image
              src="/jwelery.jpg"
              height={360}
              width={340}
              alt="product"
              className="jewelry-image"
            />
            <div className="Nimroad">
              <h2 className="nimrod-t">Nimroad</h2>
              <p className="founder-t">Founder/ CEO</p>
            </div>
          </div>
          <div className="jlewery-card-container">
            <Image
              src="/jwelery.jpg"
              height={360}
              width={340}
              alt="product"
              className="jewelry-image"
            />
            <div className="Nimroad">
              <h2 className="nimrod-t">Nimroad</h2>
              <p className="founder-t">Founder/ CEO</p>
            </div>
          </div>
          <div className="bersha-container">
            <div className="card-bersha">
              <Image
                src="/bersha.png"
                height={26}
                width={113}
                alt="product"
                className="jewelry-image"
              />
            </div>
            <div className="card-bersha">
              <Image
                src="/ray.png"
                height={40}
                width={98}
                alt="product"
                className="jewelry-image"
              />
            </div>
            <div className="card-bersha">
              <Image
                src="/mango.png"
                height={26}
                width={113}
                alt="product"
                className="jewelry-image"
              />
            </div>
            <div className="card-bersha">
              <Image
                src="/pull.png"
                height={26}
                width={113}
                alt="product"
                className="jewelry-image"
              />
            </div>
            <div className="card-bersha">
              <Image
                src="/hm.png"
                height={37}
                width={43}
                alt="product"
                className="jewelry-image"
              />
            </div>
          </div>
        </div>
        <CarouselComponent/>
        <div className="subscribe-news-letter">
          <div className="container">
            <h3 className="suscribe-headng">Subscribe Newsletter</h3>
            <p> Sing up to our Newsletter and get the discount code.</p>
<div className="susccribe-main-container">
            <div className="susbcribe-for">
              <input
                type="email"
                name="EMAIL"
                placeholder="Email Address"
                required=""
                className="email-subscribe"
              />
            </div>
            <button className="submit-container">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    
      <Footer/>

    </>
  );
};

export default aboutus;
