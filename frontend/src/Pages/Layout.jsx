import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, toggletheme, theme }) => {
  return (
    <div className={`App ${theme} overflow-x-hidden`}>
      <Header toggletheme={toggletheme} theme={theme} />
      <main>{children}</main>
      <Footer  toggletheme={toggletheme} theme={theme} />
    </div>
  );
};

export default Layout;
