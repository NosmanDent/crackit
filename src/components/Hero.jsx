import React from "react";
import { TfiWorld } from "react-icons/tfi";

const Hero = () => {
  return (
    <main className="app__bg  h-screen  relative">
      <div className="absolute bg-black/50 w-full h-screen"></div>
      <div className="relative flex flex-col items-center justify-center m-auto text-center gap-10  h-screen">
        <h1 className="text-white text-xl md:text-2xl tracking-wider mx-10 md:mx-4 font-semibold inter">
          Recognized as the #1 Law Firm Growth Company in America
        </h1>
        <h1 className="text-white text-3xl xs:text-4xl md:text-5xl lg:text-6xl mx-10 md:mx-5 tracking-wider md:flex flex-col hidden">
          <span className="font-bold">
            Unreasonable Growth <br />
          </span>{" "}
          for Uncompromising Law Firms
        </h1>

        <h1 className="text-white text-2xl font-bold mx-10  tracking-wider md:hidden flex">
          Unreasonable Growth for Uncompromising Law Firms
        </h1>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <button className="bg text-white md:text-3xl text-lg font-semibold md:py-3 py-2 w-full whitespace-nowrap md:px-10 px-8 rounded-full">
            LEARN MORE
          </button>
          <button className="bg text-white md:text-3xl text-lg font-semibold md:py-3 py-2 w-full whitespace-nowrap md:px-12 px-10 rounded-full">
            TALK TO US{" "}
          </button>
        </div>
        <div className="flex flex-row items-center gap-2 text-white">
          <TfiWorld />
          <h1 className="xs:text-xs text-[10px]">
            Serving All 50 States & Internationally
          </h1>
        </div>
      </div>
    </main>
  );
};

export default Hero;
