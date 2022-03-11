import React from "react";

export function Inspirations() {
  const Inspiration = {
    author: "ShakeSpeare",
    text: '"aa"',
  };
  return (
    <div className="container">
      <h1>To inspire you</h1>
      <div className="flex inspirations">
        <div className="article">
          <p>{Inspiration.text}</p>
          <p>{Inspiration.author}</p>
        </div>

        <div className="article">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            accusantium repellendus est earum nemo rem numquam fugiat iure sunt
            quia maiores itaque, laboriosam ipsum iusto ipsa odit, aspernatur,
            placeat eveniet.
          </p>
          <p>Author</p>
        </div>
      </div>
    </div>
  );
}
