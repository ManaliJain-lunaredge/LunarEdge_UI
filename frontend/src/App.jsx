import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Aboutus from "./Components/Aboutus";
import WebDevelopment from "./Components/WebDevelopment";
import AppDevelopment from "./Components/AppDevelopment";
import SeoServices from "./Components/SeoServices";
import Education from "./Components/Education";
import HealthCare from "./Components/HealthCare";
import RealState from "./Components/RealState";
import Ecommerce from "./Components/Ecommerce";
import Insights from "./Components/Insights";
import TermsandConditions from "./Components/TermsandConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Cookies from "./Components/Cookies";
import Testimonals from "./Components/Testimonals";
import Projects from "./Components/Projects";
import Awards from "./Components/Awards";
import Contact from "./Components/Contact";
import Careers from "./Components/Careers";
import Layout from "./Pages/Layout";
import AOS from "aos";
import "aos/dist/aos.css"; 

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200, once: false });
    return () => AOS.refresh();
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggletheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Router>
      <Layout toggletheme={toggletheme} theme={theme}>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggletheme={toggletheme} />} />
          <Route path="/aboutus" element={<Aboutus theme={theme} />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/seoservices" element={<SeoServices />} />
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route path="/realstate" element={<RealState />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/termsandconditions" element={<TermsandConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/testimonals" element={<Testimonals />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact theme={theme} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
