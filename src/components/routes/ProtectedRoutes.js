import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../assets/sidebar/Sidebar";
import Bid from "../Bid/Bid";
import Dashboard from "../dashboard/Dashboard";
import Winner from "../Winner/Winner";
const ProtectedRoutes = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/bid" element={<Bid />} />
        <Route exact path="/winner" element={<Winner />} />
      </Routes>
    </div>
  );
};
export default ProtectedRoutes;
