import React from "react";
import {Logo} from "../Components/Logo"
export function Header(){
return (
    <header>
      <nav  className='flex header' >
          <Logo/>
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

