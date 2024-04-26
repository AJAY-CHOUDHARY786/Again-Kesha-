import Link from "next/link";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid mt-5">
        <div className="row p-4">
          <div className="col-md-2">
            <ul className="item-list">
              <li>
                <h2 className="online">ONLINE SHOPPING</h2>
              </li>
              <li>
                <a href="#">Mobile app</a>
              </li>
              <li>
                <a href="#">Plan</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <ul className="item-list">
              <li>
                <h2 className="online">CUSTOMER POLICIES</h2>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">Press Releases</a>
              </li>
              <li>
                <a href="#">Media Kit</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>

          <div className="col-md-2">
            <ul className="item-list">
              <li>
                <h2 className="online">USEFUL LINKS</h2>
              </li>
              <li>
                <a href="#">Referals</a>
              </li>
              <li>
                <a href="#">Forum</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="item-list">
              <li>
                <div className="footer-img">
                  <img src="/original.png" alt="" />
                  <div className="text-div">
                    <h3 className="online">100% ORIGINAL guarantee</h3>
                    <h4 className="online">For All Products</h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="footer-img">
                  <img src="/30-days.png" alt="30 days" />
                  <div className="text-div">
                    <h3 className="online">Return within 30days </h3>
                    <h4 className="online">Return within 30days</h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="item-list">
              <li>
                
              <Image
                    src="/Kesha-logo.png"
                    height={300}
                    width={800}
                    alt="logo"
                    className="image-for-mariarose footer-image-color"
                  />
              </li>
              <li>
                <h6 className="online">Subscribe to our newsletters</h6>
              </li>
              <li>
                <input type="text" placeholder="Enter Your Email" />
              </li>
              <li>
                <button>Subscribe!</button>
              </li>
            </ul>
            <div className="all-icon">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <FaFacebookF className="instagram me-3" />
                    </a>
                    <a
                      href="https://twitter.com/MariaRossParis?t=JpOz4D1fkQ1sd8gC31U4pA&s=09"
                      target="_blank"
                    >
                      
                      <CiTwitter className="instagram me-3" />
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <FaLinkedinIn className="instagram me-3" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      <IoLogoInstagram className="instagram me-3" />
                    </a>
                   
                  </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <ul>
          <li>
            <span>© 2024 keshajewels.com. All rights reserved || Design & Developed by Digital Whopper</span>
          </li>
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"#"}>Cookies Policy</Link>
          </li>
          <li>
            <Link href={"#"}>Terms and Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
