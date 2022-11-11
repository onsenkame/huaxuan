import React from "react";

import Navbar from "./components/Navbar";
import Routes from "./Routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
