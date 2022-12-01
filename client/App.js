import React from "react";

import NavbarComp from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white">
      <div>
        <NavbarComp />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
