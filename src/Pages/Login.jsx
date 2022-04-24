import { useState } from "react";
import { useAuth } from "../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../Services/AuthServices";

export const handleErrors = async (response) => {
  if (!response.ok) {
    const { message } = await response.json();
    throw Error(message);
  }
  return response.json();
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { authenticated, setAuthenticated } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };

    const response = await LoginUser(payload);
    console.log(response)
    if (response.status === 200) {
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
      <h1>Login</h1>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
        {/* botao para registro */}
      </form>
    </div>
  );
}
