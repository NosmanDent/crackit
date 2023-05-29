import React from "react";

const ScrollMenu = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[white] ">
      <div className="w-4/4 md:w-1/4 h-screen hero__slide_1 relative md:flex hidden">
        <div className="absolute bg-black/50 w-full h-screen"></div>
        <div className="relative flex flex-col items-start px-4 justify-center  gap-10 py-48 ">
          <h1 className="text-white text-2xl md:text-3xl font-semibold ">
            DOMINATE
          </h1>
          <h1 className="text-white text-2xl md:text-3xl font-semibold ">
            AMPLIFY
          </h1>
          <h1 className="text-white text-2xl md:text-3xl font-semibold ">
            DIFFERENTIATE
          </h1>
        </div>
      </div>
      <div className="w-full md:w-3/4 snap-x snap-mandatory h-screen overflow-y-scroll">
        <div className="h-screen hero__slide_1 flex  relative">
          <div className="absolute bg-black/50 w-full h-screen"></div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 mx-6 md:mx-10  relative">
            <p className="text-blue-500 font-semibold text-xl md:text-3xl inter mt-20">
              Crisp Coach
            </p>
            <p className="text-4xl md:text-7xl inter text-white font-bold tracking-wider hidden md:flex flex-col">
              Dominate <br /> <span className="font-normal">your market.</span>
            </p>
            <p className="text-4xl  inter text-white font-bold tracking-wider md:hidden flex flex-col text-center">
              Dominate <br /> <span className="font-normal">your market.</span>
            </p>
            <p className="text-white text-xs md:text-sm text-center md:text-start">
              Exclusive, one-of-a-kind experiences for the nation’s most
              ambitious law firm owners. The top coaching and workshop programs
              in the industry with an approach unlike any others. No tired
              templates, copy/paste tactics, or fortune-cookie wisdom. Go beyond
              paint-by-numbers approaches with training that attacks the root of
              the challenges standing in your way.
            </p>
            <button className="border-2 rounded-full border-blue-500 py-3 md:px-16 px-10 text-white font-semibold text-xl md:text-2xl whitespace-nowrap">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="h-screen hero__slide_1 flex  relative">
          <div className="absolute bg-black/50 w-full h-screen"></div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 mx-6 md:mx-10  relative">
            <p className="text-blue-500 font-semibold text-xl md:text-3xl inter mt-20">
              Crisp Social Stack
            </p>
            <p className="text-4xl md:text-7xl inter text-white font-bold tracking-wider hidden md:flex flex-col">
              Amplify <br /> <span className="font-normal">your brand.</span>
            </p>
            <p className="text-4xl  inter text-white font-bold tracking-wider md:hidden flex flex-col text-center">
              Amplify <br /> <span className="font-normal">your brand.</span>
            </p>
            <p className="text-white text-xs md:text-sm text-center md:text-start">
              Drive high-value cases from every major social channel. Reach,
              connect, and engage with ideal clients on YouTube, Instagram,
              Facebook, and LinkedIn with context-built videos and done-for-you
              campaigns.
            </p>
            <button className="border-2 rounded-full border-blue-500 py-3 md:px-16 px-10 text-white font-semibold text-xl md:text-2xl whitespace-nowrap">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="h-screen hero__slide_1 flex  relative">
          <div className="absolute bg-black/50 w-full h-screen"></div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-4 mx-6 md:mx-10  relative">
            <p className="text-blue-500 font-semibold text-xl md:text-3xl inter mt-20">
              Crisp Video
            </p>
            <p className="text-4xl md:text-7xl inter text-white font-bold tracking-wider hidden md:flex flex-col">
              Differentiate <br />{" "}
              <span className="font-normal">your firm.</span>
            </p>
            <p className="text-4xl  inter text-white font-bold tracking-wider md:hidden flex flex-col text-center">
              Differentiate <br />{" "}
              <span className="font-normal">your firm.</span>
            </p>
            <p className="text-white text-xs md:text-sm text-center md:text-start">
              Become the obvious choice in your market. Our flagship service:
              your best-performing sales asset. We’ll help you find your story
              and tell it in a way your audience can’t ignore (and competitors
              can’t match).
            </p>
            <button className="border-2 rounded-full border-blue-500 py-3 md:px-16 px-10 text-white font-semibold text-xl md:text-2xl whitespace-nowrap">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollMenu;
