import React from "react";
import Login from "./components/login";
import ConversionPage from "./components/conversion";
import LogoutButton from "./components/logout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/convert" component={ConversionPage} />
        <Route path="/logout" component={LogoutButton} />
      </Routes>
    </Router>
  );
}

export default App;

