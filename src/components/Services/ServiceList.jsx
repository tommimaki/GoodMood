import { Link } from "react-router-dom";
import "./Services.css";

const ServiceList = () => {
  return (
    <div className="servicesContainer">
      <h2 className="serviceTitle"> SERVICIOS &#x1F484;</h2>
      <ul className="serviceUl">
        <li>
          <Link className="link-text" to="/Eyelashes">
            {" "}
            Eyelashes{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link-text" to="/Microlips">
            {" "}
            Microlips{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="link-text" to="/Hydralips">
            Hydralips
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="link-text" to="/Microneedling">
            {" "}
            Microneedling Facial{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="link-text" to="/BBglow">
            {" "}
            Bb Glow{" "}
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default ServiceList;
