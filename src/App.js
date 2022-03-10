import React from "react";

import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Inspirations } from "./Components/Inspiration";
import { Tasks } from "./Components/Tasks/Tasks";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Inspirations />
        <Tasks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
