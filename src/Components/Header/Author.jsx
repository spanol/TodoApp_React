import React from "react";

export function Author(){
    return(
        <div className="flex author">
          <img
            src="https://avatars.githubusercontent.com/u/85651178?s=400&u=3664e7edc66f924c311bf3551e3cc4b3240340b2&v=4"
            className="author-image"
            alt="Author"
          />
          <div className="greetings">
            <p className="author-name">Vinicius Spanol</p>
            <p className="author-greetings">Welcome to my app!</p>
          </div>
        </div>
    )
}