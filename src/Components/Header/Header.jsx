import React from "react";
import {Logo} from "./Logo"
export function Header(){
return (
    <header>
      <nav  className='flex header' >
          <Logo/>


        <input type="text" placeholder="Find task"/>

        <div className='flex author'>
          {/* img */}
          
          <div >
          <p className="author-name">Vinicius Spanol</p>
          <p className="greetings">Boas vindas ao meu app!</p>
          </div>

        </div>
        </nav>
      </header>
);
}

