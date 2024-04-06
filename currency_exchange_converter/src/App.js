import React from "react";
import Login from "./components/login";
import ConversionPage from "./components/conversion";
import LogoutButton from "./components/logout";
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Route path="/login" component={Login} />
        <Route path="/convert" component={ConversionPage} />
        <Route path="/logout" component={LogoutButton} />
    </Router>
  );
}

export default App;

