import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DashboardRoutes } from "./routers/DashboardRoutes";
import "./styles/styles.css";

export const TpfinalApp = () => {
  return (
    <Router>
      <DashboardRoutes/>
    </Router>
  )
}