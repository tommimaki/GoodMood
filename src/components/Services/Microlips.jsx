import React from "react";
import image2 from "../../assets/image2.jpeg";
import "./Productstyle.css";
import Footer from "../Footer/Footer";

function Microlips() {
  return (
    <div>
      <div className="product-container">
        <div className="description">
          <h3 className="product-title"> Microlips </h3>

          <h4 className="product-subtitle">Todo lo que necesitas saber</h4>
          <p>
            Las extensiones de pestañas son un tratamiento de belleza popular
            que implica la adición de pestañas artificiales a tus pestañas
            naturales. Las extensiones se aplican cuidadosamente con pegamento
            para que parezcan naturales y puedas disfrutar de una mirada más
            completa y definida. Las extensiones de pestañas pueden durar varias
            semanas con el cuidado adecuado, lo que significa que puedes
            disfrutar de una mirada glamurosa y lista para cualquier ocasión sin
            tener que usar rímel o pestañas postizas todos los días.
          </p>
          <div className="product-images">
            <div>
              <h3>Antes</h3>
              <img src={image2} className="product-img" alt="Antes" />
            </div>

            <div>
              <h3>Despues</h3>
              <img src={image2} className="product-img" alt="Despues" />
            </div>
          </div>
        </div>
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
          </div>
          <div className="product-item">
            <h3>Advanced Microlips</h3>
            <p>
              Our advanced microlip service is perfect for those who want to
              achieve a more dramatic look. Our technicians will work with you
              to create a unique design that fits your style and preferences.
            </p>
            <h4>Price: $700</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Microlips;
