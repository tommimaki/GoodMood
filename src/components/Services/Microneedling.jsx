import React from "react";
import image2 from "../../assets/image2.jpeg";
import Footer from "../Footer/Footer";
import "./Productstyle.css";
import { Link } from "react-router-dom";

function Microneedling() {
  return (
    <div>
      <div className="product-container">
        <div className="description">
          <h3 className="product-title">
            Microneedling Facial - Tratamiento para la piel
          </h3>

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

        <div className="product-grid">
          <div className="product-item">
            <h3>Microneedling Facial - Tratamiento Básico</h3>
            <p>
              Nuestro servicio básico de Microneedling Facial incluye una
              consulta con nuestros especialistas, quienes determinarán el
              tratamiento adecuado para tu tipo de piel y necesidades. El
              tratamiento utiliza una herramienta de microneedling para crear
              pequeñas perforaciones en la piel, estimulando la producción de
              colágeno y mejorando la textura y apariencia general de la piel.
              Los resultados son inmediatos y duran varias semanas.
            </p>
            <h4>Precio: $150</h4>
            <div className="reserve-button">
              <Link to="/contact" className="button-link">
                Reservar Cita
              </Link>
            </div>
          </div>
          <div className="product-item">
            <h3>Microneedling Facial - Tratamiento Premium</h3>
            <p>
              Nuestro servicio premium de Microneedling Facial utiliza una
              herramienta de microneedling avanzada para un tratamiento más
              intenso y efectivo. Este tratamiento es perfecto para aquellos con
              piel problemática, incluyendo cicatrices, manchas y poros
              dilatados. Nuestros especialistas trabajarán contigo para crear un
              plan de tratamiento personalizado y lograr los resultados
              deseados.
            </p>
            <h4>Precio: $250</h4>
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

export default Microneedling;
