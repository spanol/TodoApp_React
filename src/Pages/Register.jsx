import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


import { useAuth } from "../Context/Context";
import { handleErrors } from "./Login";
import { RegisterUser } from "../Services/AuthServices";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { authenticated, setAuthenticated } = useAuth();


  const register = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };

    const response = await RegisterUser(payload);

    if (response.status === 201) {
      setAuthenticated(response.data);
      navigate("/home");
    }
  };

  const navigate = useNavigate();

  if(authenticated !== null){
    navigate("/home")
  }

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
        <Link to="/">Login</Link>
      </form>
    </div>
  );
}
