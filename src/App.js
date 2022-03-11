import React, { useState } from "react";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />
        <Tasks search={search} setSearch={setSearch} />
      <Footer />
    </>
  );
}

export default App;
