import React from "react";
import "./AboutStyles.css";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";

function Me() {
  return (
    <div>
      <div className="about-container">
        <h1>Sobre Mí &#x1F647;&#x1F3FD;&#x200D;&#x2640;&#xFE0F;</h1>

        <p>
          Hola&#x1F44B; , soy Natalia Vásquez, tengo 25 años y me dedico a
          brindar servicios de cosmetología de alta calidad. Desde pequeña,
          siempre he tenido un gran interés por el mundo de la belleza y el
          maquillaje. Después de completar mi carrera en cosmetología, trabajé
          con algunos de los mejores profesionales de la industria para
          perfeccionar mis habilidades.
        </p>
        <p>
          Actualmente, tengo mi propio negocio donde ofrezco una amplia variedad
          de servicios personalizados para cada uno de mis clientes. Me esfuerzo
          por mantenerme al tanto de las últimas tendencias y técnicas en la
          industria, y solo utilizo productos de la más alta calidad en mi
          trabajo.
        </p>
        <p>
          Además de mi trabajo en la cosmetología, también me apasiona ayudar a
          mi comunidad. Dono mi tiempo y experiencia a organizaciones benéficas
          y sin fines de lucro locales para ayudar a otros a sentirse lo mejor
          posible.
        </p>
        <p>
          En resumen, soy una emprendedora apasionada y comprometida con la
          excelencia en mi trabajo. Si estás buscando servicios de cosmetología
          de alta calidad, no dudes en contactarme. Estaré encantada de ayudarte
          a lucir y sentirte lo mejor posible.
        </p>
        <div className="sliderSection">
          <Slider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Me;
