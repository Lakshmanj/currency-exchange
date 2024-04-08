// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/login";
import ConversionPage from "./components/conversion";
import LogoutButton from "./components/logout";
import Information from "./components/information";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/login" element={<Login />} />
        <Route path="/convert" element={<ConversionPage />} />
        <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </Router>
  );
}

export default App;
