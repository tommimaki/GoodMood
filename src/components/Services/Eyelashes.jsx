import React from "react";
import image2 from "../../assets/image2.jpeg";
import Footer from "../Footer/Footer";
import "./Productstyle.css";

function Eyelashes() {
  return (
    <div>
      <div className="product-container">
        <div className="description">
          <h3 className="product-title">Extensiones de Pestañas</h3>

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
              <img src={image2} alt="Antes" />
            </div>

            <div>
              <h3>Despues</h3>
              <img src={image2} alt="Despues" />
            </div>
          </div>
        </div>
        <div className="product-grid">
          <div className="product-item">
            <h3>Extensiones de Pestañas Básicas</h3>
            <p>
              Nuestro servicio básico de extensiones de pestañas incluye una
              consulta con nuestros técnicos expertos, quienes personalizarán su
              tratamiento para realzar su belleza natural. Los resultados duran
              hasta 4 semanas.
            </p>
            <h4>Precio: $100</h4>
          </div>
          <div className="product-item">
            <h3>Extensiones de Pestañas Premium</h3>
            <p>
              Nuestro servicio premium de extensiones de pestañas es perfecto
              para aquellos que desean lograr una apariencia más dramática.
              Nuestros técnicos trabajarán con usted para crear un diseño único
              que se adapte a su estilo y preferencias.
            </p>
            <h4>Precio: $150</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Eyelashes;
