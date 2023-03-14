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

// <ul className="serviceUl">
//   <li>
//     <Link className="link-text" to="/Microlips">
//       {" "}
//       Eyelashes&#x1F441;{" "}
//     </Link>
//   </li>
//   <li>
//     {" "}
//     <Link className="link-text" to="/Microlips">
//       {" "}
//       Microlips&#x1F444;{" "}
//     </Link>{" "}
//   </li>
//   <li>Hydralips&#x1FAE6; </li>
//   <li>Microneedling Facial &#x1F486;</li>
//   <li>Bb glow &#x1F478;</li>
// </ul>
