/* react-app> npm i express cors react-router-dom bootstrap react-bootstrap */

/** dev team collaboration powered by Git */
/** branch deployment promote chain: prod=main <- uat <- dev/flights <- dev/flights-firstname-lastname */

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Destinations from "./pages/Destinations";
import FlightInfo from "./pages/FlightInfo";
import Tickets from "./pages/Tickets";
import NavbarMenu from "./components/NavbarMenu";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = data => {
    setLoggedIn(true)
    setUserName(data)
  }

  return (
    <Router>
      {loggedIn && <NavbarMenu userName={userName} onLogout={() => setLoggedIn(false)} />}
      <Routes>
        <Route path="/" element={loggedIn ? <Navigate to="/destinations" /> : <Login onLogin={handleLogin} />} />
        <Route path="/register" element={loggedIn ? <Navigate to="/destinations" /> : <Registration onRegister={handleLogin} />} /> {/* Login after registration */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/flight-info" element={<FlightInfo />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}
