// AuthPage.js
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Handle login logic, e.g., store username in state or local storage
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
