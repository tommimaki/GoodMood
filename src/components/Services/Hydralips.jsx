import React from "react";
import hydrabefore from "../../assets/hydraBefore.jpeg";
import hydraafter from "../../assets/hydraAfter.jpeg";
import hydraneedle from "../../assets/hydraneedle.jpeg";
import { Link } from "react-router-dom";
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

          <div>
            <img src={hydraneedle} className="product-img" alt="Despues" />
          </div>
          <p>
            Hydra Lips es un servicio de hidratación y rejuvenecimiento labial.
            Nuestro objetivo es brindar a nuestros clientes labios hidratados y
            suaves, así como mejorar la apariencia y textura de los labios.
          </p>
          <p>
            Utilizamos técnicas y productos especializados para hidratar
            profundamente los labios y reducir la apariencia de líneas finas y
            arrugas. También ofrecemos opciones personalizadas para satisfacer
            las necesidades y preferencias de nuestros clientes.
          </p>
          <p>
            En Hydra Lips, creemos en la importancia de cuidar la salud y
            belleza de los labios. Nuestros servicios están diseñados para
            proporcionar resultados efectivos y duraderos, y nuestro equipo está
            comprometido en brindar un servicio excepcional a nuestros clientes.
            ¡Ven a visitarnos y disfruta de labios hidratados y rejuvenecidos!
          </p>
          <div className="product-images">
            <div>
              <h3>Antes</h3>
              <img src={hydrabefore} className="product-img" alt="Antes" />
            </div>

            <div>
              <h3>Despues</h3>
              <img src={hydraafter} className="product-img" alt="Despues" />
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
            <div className="reserve-button">
              <Link to="/contact" className="button-link">
                Reservar Cita
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HydraLips;
