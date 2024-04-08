import React from "react";
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login"); 
  };

  return (
    <div className="login-form">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
