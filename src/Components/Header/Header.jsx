import React from "react";
import { Author } from "./Author";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
export default function Header({ setSearch }) {
  return (
    <header>
      <nav className="flex page-container header">
        <Logo />
        <SearchBar setSearch={setSearch} />
        <Author/>
      </nav>
    </header>
  );
}
