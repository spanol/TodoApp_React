import React from "react";
import { Logo } from "./Logo";
export function Header(search, setSearch) {
  return (
    <header>
      <nav className="flex header">
        <Logo />


        <input className="search-input" onChange={(e)=> {setSearch(e.target.value)}} type="text" placeholder="Find task" />
        <button className=" search-button"><img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/></button>
        
        <div className="flex author">
          <img src="foto.jpg" className="author-image"  alt="Author"/>
          <div>
            <p className="author-name">Vinicius Spanol</p>
            <p className="author-greetings">Boas vindas ao meu app!</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
