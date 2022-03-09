import React, {useState,useEffect} from 'react';


import './App.css';
import { Header } from './Components/Header';
import { Inspirations } from './Components/Inspiration';
import { Tasks } from './Components/Tasks';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Inspirations/>
      <Tasks/>
      </main>
    </div>
  );
}

export default App;
