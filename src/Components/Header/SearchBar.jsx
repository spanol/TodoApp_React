import React from "react";

export function SearchBar({ setSearch }) {
  return (
    <>
      <input
        className="search-input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Find task"
      />
      <img
        className="search-svg"
        src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
      />
    </>
  );
}
