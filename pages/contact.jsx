import { useState } from "react";
import Header from "../components/Header";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Footer from "../components/Footer";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

import { FaFacebookF } from "react-icons/fa";
import { Accordion } from "react-bootstrap";
import axios from "axios";

const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    try {
      const { data } = await axios.post("/api/addcontact", { formData });
      if (data?.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />

      <h4 className="contac-c1">Contacts</h4>
      <hr className="mb-4" />

      <div className="container  main-container-card   mt-5 p-5">
        <div className="secon-card-container">
          <div className="card-contact">
            <h4 className="email-contact">Phone</h4>
            <div className="container-width d-flex">
              <FaPhone className="icon-for-mail  px-2" />
              <p>(+91) 6200379161</p>
            </div>
            <h4 className="email-contact">Email</h4>
            <div className="mail comtianer d-flex">
              <CiMail className="icon-for-mail  px-2" />
              <p>keshajewels@gmail.com</p>
            </div>
          </div>

          <h4 className="email-contact">Address</h4>

          <div className="card-contact">
            <div className="container-width d-flex">
              <CiLocationOn className="icon-for-mail  px-2" />
              <p className="crop-pargraph">
                Our Location D5, Bharu Marg, Ashok Vihar, <br />
                Nandpuri Colony, Malviya Nagar,
                <br /> Jaipur, Rajasthan 302017
              </p>
            </div>
          </div>
          <h4 className="email-contact">Working Hours</h4>
          <div className="card-contact">
            <div className="container-width d-flex">
              <CiLocationOn className="icon-for-mail  px-2" />
              <p className="crop-pargraph">Mon-Fri: 10:00 - 18:00</p>
            </div>
          </div>
          <h4 className="email-contact">Follow Us</h4>
          <div className="card-contact">
            <div className="container-width d-flex">
              <div className="all-icon">
                <a href="https://www.instagram.com/" target="_blank">
                  <FaFacebookF className="instagram1 me-3" />
                </a>
                <a
                  href="https://twitter.com/MariaRossParis?t=JpOz4D1fkQ1sd8gC31U4pA&s=09"
                  target="_blank"
                >
                  <CiTwitter className="instagram1 me-3" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaLinkedinIn className="instagram1 me-3" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <IoLogoInstagram className="instagram1 me-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className=" contact-form  ">
          <h2 className="send-question">Send Your Question</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 contct-data">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name && "is-invalid"}`}
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="mb-3  contct-data">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>
            <div className="mb-3  contct-data">
              <label htmlFor="email" className="form-label">
                Phone
              </label>
              <input
                type="phone"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>{" "}
            <div className="mb-3  contct-data">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className={`form-control ${errors.message && "is-invalid"}`}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <div className="invalid-feedback">{errors.message}</div>
              )}
            </div>
            <button className="submit-contact">Submit</button>
          </form>
        </div>
      </div>

      <seaction>
        <h2 className="frequency-heading">Frequently Asked Question!</h2>
        <div className="main-container-frequency">
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
                    We provide a comprehensive ring size guide on our website to
                    help you accurately measure your ring size at home.
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
                    including high-quality precious metals such as gold, silver,
                    and platinum. We also use authentic gemstones sourced from
                    trusted suppliers to ensure the highest standards of quality
                    and authenticity.
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
                    one-of-a-kind pieces that reflect your individual style and
                    preferences.
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
                    We provide comprehensive care instructions for each type of
                    jewelry on our website. Additionally, we offer tips on
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
                    specified timeframe, allowing you to return or exchange your
                    purchase if it does not meet your expectations. Please refer
                    to our detailed return policy on our website for more
                    information on the process and eligibility criteria.
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
                    shipment is approximately 5-7 working days from the date of
                    placing the order. However, please note that India is a
                    geographically vast country, so additional time may be
                    required for remote areas and unforeseen weather conditions.
                  </Accordion.Body>
                </Accordion.Item>
              </div>
            </Accordion>
          </div>
        </div>
      </seaction>
      <div className="support-container">
        <div className="card-support">
          <div className="quality-produc">
            <div className="quality-car">
              <span>Free Delivery</span>
            </div>
            <div className="quality-car">
              <span>Money Back Guarantee</span>
            </div>
            <div className="quality-car">
              <span>24/7 Support</span>
            </div>
            <div className="quality-car">
              <span>High Quality</span>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact_us;
