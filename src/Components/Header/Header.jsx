import React from "react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
export default function Header({ setSearch }) {
  return (
    <header>
      <nav className="flex page-container header">
        <Logo />
        <SearchBar setSearch={setSearch} />
        <div className="flex author">
          <img
            src="https://avatars.githubusercontent.com/u/85651178?s=400&u=3664e7edc66f924c311bf3551e3cc4b3240340b2&v=4"
            className="author-image"
            alt="Author"
          />
          <div>
            <p className="author-name">Vinicius Spanol</p>
            <p className="author-greetings">Boas vindas ao meu app!</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
