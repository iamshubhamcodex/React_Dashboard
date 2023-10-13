/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideNavbar from "../utils/Sidebar";
import Header from "../utils/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SideNavbar />

        <Routes></Routes>
      </Router>
    </>
  );
}

export default App;
