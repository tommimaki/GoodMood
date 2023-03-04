import React from "react";
import image2 from "../../assets/image2.jpeg";
import antesLips from "../../assets/antesLips.JPEG";
import "./Productstyle.css";

function Microlips() {
  return (
    <div className="product-container">
      <h2 className="product-title">Microlip Services</h2>
      <div className="product-grid">
        <div className="product-item">
          <h3>Standard Microlips</h3>
          <p>
            Our standard microlip service includes a consultation with our
            expert technicians, who will customize your treatment to enhance
            your natural beauty. Results last up to 18 months.
          </p>
          <h4>Price: $500</h4>
          <div className="product-images">
            <img src={antesLips} alt="Before" />
            <img src={image2} alt="After" />
          </div>
        </div>
        {/* <div className="product-item">
          <img src={image2} alt="Before" />
          <h3>Advanced Microlips</h3>
          <p>
            Our advanced microlip service is perfect for those who want to
            achieve a more dramatic look. Our technicians will work with you to
            create a unique design that fits your style and preferences.
          </p>
          <h4>Price: $700</h4>
          <img src={image2} alt="After" />
        </div> */}
      </div>
    </div>
  );
}

export default Microlips;
