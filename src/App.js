import React from "react";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Usaid from "./Components/Pages/usaid/usaid";
import Home from "./Components/Pages/Home/Home";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usaid" element={<Usaid />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
