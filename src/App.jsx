import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./Header/NavBar.jsx";
import Index from "./Index.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
