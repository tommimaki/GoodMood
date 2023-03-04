import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Microlips from "./components/Services/Microlips";
import Eyelashes from "./components/Services/Eyelashes";
import Me from "./components/About/Me";
import Studio from "./components/About/Studio";
import Services from "./components/Services/Services";
import ContactForm from "./components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Microlips" element={<Microlips />} />
        <Route path="/Eyelashes" element={<Eyelashes />} />
        <Route path="/Me" element={<Me />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
