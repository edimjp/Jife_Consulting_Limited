import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

import NavBar from "./Header/NavBar.jsx";
import Index from "./Index.jsx";
import About from "./About/About.jsx";
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services.jsx";
import ContactUs from "./ContactUs/ContactUs.jsx";
import Team from "./Team/Team.jsx";

import { useEffect } from "react";

import ScrollToTop from "./ScrollToTop.jsx";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 },
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
