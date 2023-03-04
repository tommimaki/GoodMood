import React from "react";
import "./home.css";
import Slider from "../Slider/Slider";
import ServiceList from "../Services/ServiceList";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg">
      <div className="homeContainer">
        <div className="heroSection">
          <h1 className="heroTitle">Bienvenidos A Good Mood</h1>
          <p className="heroText">
            lEspacio dedicado a la belleza y al empoderamiento que nos hace
            sentir el vernos y sentirnos mejor, siempre trabajamos para mejorar
            nuestra version ya sea fisica o emocionalmente, ser la mejor version
            implica asumir que por muy comoda que sea nuestra zona de confort si
            siempre permanecemos en ella no tenemos la oportunidad de
            desarrollar nuevos recursos o nuevas experiencias, sacar lo mejor de
            nosotros y potenciar nuestros puntos fuertes para mejorar las areas
            que tenemos que pulir, no tengas miedo, ATREVETE a nuevos cambios,
            nuevos aires, nuevas experiencias, quizás el resultado final supere
            tus expectativas{" "}
          </p>
          <h2 className="heroSignature">-By Nats</h2>
        </div>
        <div className="sliderSection">
          <Slider />
        </div>
        <ServiceList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
