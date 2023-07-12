import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Carousal from "../components/Carousal";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
