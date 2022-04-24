import React from "react";
import { useAuth } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../Services/AuthServices";
export function User() {
  const { authenticated } = useAuth();
  
  const Logout = () =>{
    LogoutUser();
    navigate("/");
  }

  const navigate = useNavigate();
  return (
    <div className="flex user">
      <div className="greetings">
        <p className="user-name">
          Hi {authenticated && authenticated.username}!
        </p>
        <p className="user-greetings">Welcome to my app!</p>
        <button onClick={Logout}>logout</button>
      </div>
    </div>
  );
}
