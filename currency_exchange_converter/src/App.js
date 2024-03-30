import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import ConversionPage from "./components/conversion";
import LogoutButton from "./components/logout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/convert" component={ConversionPage} />
          <Route path="/logout" component={LogoutButton} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
