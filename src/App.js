
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "./Context/Context";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home"
function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>

    </ContextProvider>
  );
}

export default App;
