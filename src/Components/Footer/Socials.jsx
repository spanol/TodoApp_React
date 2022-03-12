import React from "react";

export function Socials() {
  const emoji = '❤️'
  return (
      <>
      <p className="author-message">Developed with {emoji} by spanol</p>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/vinicius-spanol/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"
            alt="linkedin"
          />
        </a>
      </div>

      <div className="socials">
        <a
          href="https://www.github.com/spanol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/00Z0000/github.png"
            alt="github"
          />
        </a>
      </div>

    </>
  );
}
