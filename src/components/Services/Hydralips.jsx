import React from "react";
import image2 from "../../assets/image2.jpeg";
import Footer from "../Footer/Footer";
import "./Productstyle.css";

function HydraLips() {
  return (
    <div>
      <div className="product-container">
        <h2 className="product-title">
          Hydra Lips - Hidratación y rejuvenecimiento labial
        </h2>
        <div className="product-grid">
          <div className="product-item">
            <h3>Hydra Lips - Tratamiento Hidratante</h3>
            <p>
              Nuestro servicio de Hydra Lips ofrece una hidratación profunda y
              efectiva para los labios, reduciendo las líneas finas y arrugas, y
              aumentando el volumen de los labios. Nuestros especialistas
              examinarán tus labios para determinar el mejor tratamiento para
              ti, y utilizarán productos de alta calidad para mejorar su
              apariencia. Los resultados son inmediatos y duran varias semanas.
            </p>
            <h4>Precio: $120</h4>
            <div className="product-images">
              <img src={image2} alt="Antes" />
              <img src={image2} alt="Después" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HydraLips;
