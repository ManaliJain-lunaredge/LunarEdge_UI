import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ toggletheme, theme }) => {
  return (
    <div className="App">
      <Header toggletheme={toggletheme} theme={theme} />
      <main>
        <Outlet /> {/* This will render the current page's content */}
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default Layout;
