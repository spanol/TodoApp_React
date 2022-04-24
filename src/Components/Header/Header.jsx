import React from "react";
import { User } from "./User";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
export default function Header() {
  return (
    <header>
      <nav className="flex page-container header">
        <Logo />
        <SearchBar />
        <User/>
      </nav>
    </header>
  );
}
