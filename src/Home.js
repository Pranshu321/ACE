import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/dasboard";
import RecentDocs from "./components/dasboard/pages/RecentDocs";
import PlagrismChecker from "./components/dasboard/pages/PlagrismChecker";
import AceEvaluator from "./components/dasboard/pages/AceEvaluator";

const Home = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/recent" element={<RecentDocs />} />
        <Route path="/dashboard/plagrism" element={<PlagrismChecker />} />
        <Route path="/dashboard/evaluator" element={<AceEvaluator />} />
        <Route path="/dashboard/grammer" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
