import React from "react";
export function Header(){
return (
    <header className='flex header' >
        <div>
        <h1>Logo</h1>
        </div>

        <div className='flex'>
          {/* flex p ajustar img */}
          <span>Vinicius Spanol</span>
          <p>Boas vindas ao meu app!</p>
        </div>
      </header>
);
}

