import React from "react";
import Login from "./components/login";
import ConversionPage from "./components/conversion";
import LogoutButton from "./components/logout";
import Information from "./components/information"; // Import the Information component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Information />} /> {/* Set Information as the main page */}
        <Route path="/login" element={<Login />} />
        <Route path="/convert" element={<ConversionPage />} />
        <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </Router>
  );
}

export default App;
