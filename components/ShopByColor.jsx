import React from "react";
const ShopBycolors = () => {
  return (
    <div>
      <div className="category-heading">
        <h2>Shop by Colors</h2>
        <p>Exquisite jewellery for every occasion</p>
      </div>
      <div className="shop-by-color-container">
        <div className="shop-by-color">
          <img src="/color-2.png" alt="shop-by-color" />
          <h2>Sterling Silver</h2>
        </div>
        <div className="shop-by-color">
          <img src="/color-1.png" alt="shop-by-color" />
          <h2>Oxidised Silver</h2>
        </div>
        <div className="shop-by-color">
          <img src="/color-2.png" alt="shop-by-color" />
          <h2>Rose Gold</h2>
        </div>
        <div className="shop-by-color">
          <img src="/color-3.png" alt="shop-by-color" />
          <h2>Gold plated</h2>
        </div>
        <div className="shop-by-color">
          <img src="/color-1.png" alt="shop-by-color" />
          <h2>Weddings</h2>
        </div>
      </div>
    </div>
  );
};

export default ShopBycolors;
