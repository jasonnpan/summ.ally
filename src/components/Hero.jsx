import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='text-ai-logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize any text with <br/> 
        <span className="blue_gradient">Summ.ally!</span>
      </h1>
      <h2 className='desc'>
        Have articles you need to read for class? Want a TLDR of a reddit post? 
        Condense all lengthy word vomit into concise summaries!
      </h2>
    </header>
  );
};

export default Hero;
