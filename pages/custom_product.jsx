import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CustomProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }else{
      isValid = '';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
     
    } else {
      console.log('Form validation failed.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <Header />
      <h1 className="sign-up-heading font-semibold mb-4 ">
        Create your own unique style of jewellery
      </h1>
      <p className="tell-abut-you">
        Tell us about how you'd like to create your jewellery
      </p>
      <div className="custom-product-container ">
        <div className="right-custome shadow p-4">
          <img src="/alexa.png" alt="category" className="custome-image" />
        </div>
        <div className="letf-custom">
          <section>
            <form action="/action_page.php" onSubmit={handleSubmit}>
              <div className="shadow p-4">
                <div className="un">
                  <label>Name:</label>
                  <div className="sign-up-align1 mt-2 mb-3">
                    <input
                      required=""
                      type="text"
                      placeholder="Name"
                      className="sign-up-width"
                      value={formData.name}
                      onChange={handleChange}
                    />
                     
                  </div>
                  <label>Email:</label>
                  <div className="sign-up-align1 mt-2 mb-3">
                    <input
                      required=""
                      type="text"
                      placeholder="Email"
                      className="sign-up-width"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label>Phone:</label>
                <div className="sign-up-align1 mt-2 mb-3">
                  <input
                    required=""
                    type="phone"
                    placeholder="Phone"
                    className="sign-up-width"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                {/* =============================Choose option Jewelry================================================ */}
                <label>Choose jewellery type:</label>
                <div className="sign-up-align1 mt-2 mb-3 ">
                  <div className="select-custom">
                    <select id="jewellery-type" className="custom-option">
                      <option>Choose jewellery type:</option>
                      <option value="Necklace">Necklace</option>
                      <option value="Pendant">Pendant</option>
                      <option value="Earrings">Earrings</option>
                      <option value="Bangles">Bangles</option>
                      <option value="Rings">Rings</option>
                    </select>
                  </div>
                </div>
                <label>Choose Gemstone type:</label>
                <div className="sign-up-align1 mt-2 mb-3">
                  <div className="select-custom">
                    <select id="gemstone-type" className="custom-option">
                      <option>Choose Gemstone type:</option>
                      <option value="Precious colour stone">
                        Precious colour stone
                      </option>
                      <option value="Semi-precious stone">
                        Semi-precious stone
                      </option>
                      <option value="Diamonds">Diamonds</option>
                      <option value="Rose-cut diamonds">
                        Rose-cut diamonds
                      </option>
                    </select>
                  </div>
                </div>
                <label>Choose Occasion type:</label>
                <div className="sign-up-align1 mt-2 mb-3">
                  <div className="select-custom">
                    <select id="occasion-type" className="custom-option">
                      <option>Choose Occasion type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Daily wear">Daily wear</option>
                      <option value="Party wear">Party wear</option>
                      <option value="Festive">Festive</option>
                    </select>
                  </div>
                </div>
                <label>Message:</label>
                <div className="mt-2">
                  <textarea
                    id="w3review"
                    className="w-100"
                    name="w3review"
                    rows="4"
                    cols="50"
                    placeholder="Enter Your Description>>>"
                  ></textarea>
                </div>
                {/* Add a new row for the date input field */}

                <div className="submit-button-category">
                  <button type="submit" className="custom-buton-category">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CustomProduct;
