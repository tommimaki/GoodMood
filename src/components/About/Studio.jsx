import React from "react";
import Footer from "../Footer/Footer";
import "./AboutStyles.css";

function Studio() {
  return (
    <div>
      <div className="about-container">
        <h1>Nuestro Estudio</h1>
        <p>
          ¡Bienvenidos a nuestro hermoso estudio de belleza en Barranco, Lima!
          Nuestro espacio está diseñado para que te sientas cómodo y relajado
          mientras disfrutas de nuestros servicios de belleza.
        </p>
        <p>
          Nuestras instalaciones son modernas y elegantes, con una decoración
          cuidadosamente seleccionada para crear un ambiente agradable y
          acogedor. Además, contamos con las últimas tecnologías y herramientas
          para garantizar que obtengas los mejores resultados posibles.
        </p>
        <div style={{ height: "500px", width: "100%" }}>
          <iframe
            title="map"
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62457.30662101689!2d-77.04216320826709!3d-12.149425875047846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7f03d114d83%3A0x1c5f5f740f5e8a53!2sBarranco%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sus!4v1646780892455!5m2!1ses-419!2sus"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Studio;
