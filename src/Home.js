import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dasboard";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
