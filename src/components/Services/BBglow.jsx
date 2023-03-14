import React from "react";
import image2 from "../../assets/image2.jpeg";
import Footer from "../Footer/Footer";
import "./Productstyle.css";

function BBglow() {
  return (
    <div>
      <div className="product-container">
        <div className="description">
          <h2 className="product-title">
            BB Glow - Tratamiento facial semi-permanente
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
            <h3>BB Glow - Tratamiento Básico</h3>
            <p>
              Nuestro servicio básico de BB Glow es un tratamiento facial
              semi-permanente que mejora el tono de la piel, reduce las
              imperfecciones y proporciona una apariencia luminosa y uniforme.
              El tratamiento utiliza una técnica de microagujas para aplicar un
              suero especializado en la piel, que proporciona nutrientes
              esenciales y mejora la calidad general de la piel. Los resultados
              duran hasta 6 meses.
            </p>
            <h4>Precio: $200</h4>
          </div>
          <div className="product-item">
            <h3>BB Glow - Tratamiento Premium</h3>
            <p>
              Nuestro servicio premium de BB Glow utiliza un suero especializado
              de alta calidad y una técnica avanzada de microagujas para lograr
              resultados aún más impresionantes. Este tratamiento es ideal para
              aquellos que buscan un cambio más dramático en su apariencia y
              desean una piel más suave, luminosa y uniforme. Los resultados
              duran hasta 9 meses.
            </p>
            <h4>Precio: $300</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BBglow;
