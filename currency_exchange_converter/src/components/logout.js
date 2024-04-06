import React from "react";
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  const history = useHistory();

  const handleLogout = () => { // Will use this for handling logic of logout
    localStorage.removeItem("username"); 
    history.push("/login"); 
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
