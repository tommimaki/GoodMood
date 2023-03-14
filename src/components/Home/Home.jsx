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
        <div className="bottomSection">
          <div className="serviceList">
            <ServiceList />
          </div>
          <div className="map">
            <h3>location </h3>
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
