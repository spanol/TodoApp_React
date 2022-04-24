
import { Routes, Route } from "react-router-dom";

import ContextProvider from "./Context/Context";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home"
import "./App.css";

function App() {

  return (
    <ContextProvider>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
