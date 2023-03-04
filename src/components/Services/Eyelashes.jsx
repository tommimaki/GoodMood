import React from "react";
import image2 from "../../assets/image2.jpeg";
import Footer from "../Footer/Footer";
// import antesLashes from "../../assets/antesLashes.JPEG";
import "./Productstyle.css";

function Eyelashes() {
  return (
    <div>
      <div className="product-container">
        <h2 className="product-title">Servicios de Extensiones de Pestañas</h2>
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
            <div className="product-images">
              <img src={image2} alt="Antes" />
              <img src={image2} alt="Después" />
            </div>
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

export default Eyelashes;
