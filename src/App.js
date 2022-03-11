import React,{useState} from "react";

import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header/Header";
import { Inspirations } from "./Components/Inspiration";
import { Tasks } from "./Components/Tasks/Tasks";

function App() {
  const [search, setSearch] = useState("")
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
