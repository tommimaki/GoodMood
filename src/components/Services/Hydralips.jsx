import React from "react";
import hydrabefore from "../../assets/hydrabefore.jpg";
import hydraafter from "../../assets/hydraafter.jpg";

import Footer from "../Footer/Footer";
import "./Productstyle.css";

function HydraLips() {
  return (
    <div>
      <div className="product-container">
        <div className="description">
          <h2 className="product-title">
            {" "}
            Hydra Lips - Hidratación y rejuvenecimiento labial
          </h2>

          <h2 className="product-subtitle">Todo lo que necesitas saber</h2>
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
              <img src={hydrabefore} alt="Antes" />
            </div>

            <div>
              <h3>Despues</h3>
              <img src={hydraafter} alt="Despues" />
            </div>
          </div>
        </div>

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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HydraLips;
