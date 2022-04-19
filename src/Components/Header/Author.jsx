import React from "react";
import { useAuth } from "../../Context/Context";

export function Author() {
  const { credentialsState, setCredentialsState } = useAuth();
  const logout = () => {
    setCredentialsState(null);
  };

  return (
    <div className="flex author">
      <div className="greetings">
        <p className="author-name">{ credentialsState && credentialsState.username}</p>
        <p className="author-greetings">Welcome to my app!</p>
      </div>
    </div>
  );
}
