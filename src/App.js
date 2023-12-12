import React from "react";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import OurExperts from "./components/OurExperts";
// import Blogs from "./components/Blogs";
// import PriceTable from "./components/PriceTable";
// import BottomCTA from "./components/BottomCTA";
import Testimonials from "./components/Testimonials";
import Table from "./components/Table";

import("preline");

function App() {
  return (
    <div>
      <Header />

      <Hero />

      <Features />

      <Benefits/>

      <Table />

      <Testimonials/>

      <Footer/>
    </div>
  );
}

export default App;
