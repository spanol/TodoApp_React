import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/Context";
import { handleErrors } from "./Login";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setCredentialsState } = useAuth();

  const register = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(handleErrors)
      .then(() => {
        setCredentialsState({
          username,
          password,
        });
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1>Register</h1>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={register}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
