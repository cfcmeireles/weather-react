import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Forecast from "./Forecast";

import "./Header.css";
import "./Footer.css";
import "./Forecast.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
