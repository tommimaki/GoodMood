import React from "react";
import image2 from "../../assets/image2.jpeg";
import Footer from "../Footer/Footer";
import "./Productstyle.css";

function Microneedling() {
  return (
    <div>
      <div className="product-container">
        <h2 className="product-title">
          Microneedling Facial - Tratamiento para la piel
        </h2>
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
            <div className="product-images">
              <img src={image2} alt="Antes" />
              <img src={image2} alt="Después" />
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

export default Microneedling;
