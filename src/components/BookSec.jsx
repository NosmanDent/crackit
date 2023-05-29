import React from "react";

const BookSec = () => {
  return (
    <main className="flex flex-col md:flex-row w-full">
      <section className="book_1  h-screen  relative md:w-1/3 w-full">
        <div className="absolute bg-black/50 hover:bg-transparent w-full h-screen z-10"></div>
        <div className="relative flex flex-col px-10 py-10 h-screen items-start justify-between">
          <h1 className="text-white font-bold md:text-2xl text-xl">
            #1 Amazon Best Seller in Legal Industry
          </h1>
          <p className="text-white font-semibold md:text-2xl text-xl transform rotate-90 tracking-widest">
            BOOK
          </p>
        </div>
      </section>
      <section className="book_2  h-screen  relative md:w-1/3 w-full">
        <div className="absolute bg-black/50 hover:bg-transparent w-full h-screen z-10"></div>
        <div className="relative flex flex-col px-10 pt-10 pb-16 h-screen items-start justify-between">
          <h1 className="text-white font-bold md:text-2xl text-xl">
            #1 Podcast for Legal Market Leader
          </h1>
          <p className="text-white font-semibold md:text-2xl text-xl transform rotate-90 tracking-widest">
            PODCAST
          </p>
        </div>
      </section>
      <section className="book_3 h-screen relative md:w-1/3 w-full">
        <div className="absolute bg-black/50 hover:bg-transparent w-full h-screen z-10"></div>
        <div className="relative flex flex-col px-10 pt-10 pb-16 h-screen items-start justify-between">
          <h1 className="text-white font-bold md:text-2xl text-xl">
            #1 Growth Conference Network on Earth
          </h1>
          <p className="text-white font-semibold md:text-2xl text-xl transform rotate-90 tracking-widest">
            SUMMIT
          </p>
        </div>
      </section>
    </main>
  );
};

export default BookSec;
