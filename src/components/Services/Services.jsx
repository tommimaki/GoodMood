import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  return (
    <div className="servicesContainer">
      <h2 className="serviceTitle"> SERVICIOS &#x1F484;</h2>

      <ul className="serviceUl">
        <li>
          <Link to="/Microlips"> Eyelashes&#x1F441; </Link>
        </li>
        <li>
          {" "}
          <Link to="/Microlips"> Microlips&#x1F444; </Link>{" "}
        </li>
        <li>Hydralips&#x1FAE6; </li>
        <li>Microneedling Facial &#x1F486;</li>
        <li>Bb glow &#x1F478;</li>
      </ul>
    </div>
  );
};

export default Services;
