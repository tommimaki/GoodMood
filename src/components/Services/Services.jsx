import { Link } from "react-router-dom";
import "./Services.css";
import Microlips from "./Microlips";
import Eyelashes from "./Eyelashes";
const Services = () => {
  return (
    <div>
      <div className="servicesContainer">
        <h2 className="serviceTitle"> SERVICIOS &#x1F484;</h2>

        <ul className="serviceUl">
          <li>
            <Link className="link-text" to="/Microlips">
              {" "}
              Eyelashes&#x1F441;{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link className="link-text" to="/Microlips">
              {" "}
              Microlips&#x1F444;{" "}
            </Link>{" "}
          </li>
          <li>Hydralips&#x1FAE6; </li>
          <li>Microneedling Facial &#x1F486;</li>
          <li>Bb glow &#x1F478;</li>
        </ul>
      </div>
      <Microlips />
      <Eyelashes />
    </div>
  );
};

export default Services;
