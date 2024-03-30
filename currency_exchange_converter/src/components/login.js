// login.js
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // Will use this for the login logic
    localStorage.setItem("username", username);
    history.push("/convert"); // We will use this to go back to the convert page (currently not working due to an error with useHistory)
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
