import React from "react";

export default function Footer() {
  var author = 'Spanol';
  return (
    <footer className="flex page-container footer">
      <div className="socials">
      <a href="https://www.linkedin.com/in/vinicius-spanol/" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png" alt="linkedin"/>
      </a>
      </div>

      <div className="socials">
      <a href="https://www.github.com/spanol" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github"/>
      </a>
      </div>

      <div>
        <p>Desenvolvido com muito amor por {author} </p>
      </div>
    </footer>
  );
}
