import React from "react";
import bgmap from "../assets/gael-gaborel-orbisterrae-f7I8uEiYkag-unsplash-removebg-preview.png";
import bgmaptow from "../assets/Capture-removebg-preview.png";

const MapSection = () => {
  return (
    <main>
      <section className="flex flex-col md:flex-row items-center md:gap-8 gap-3 md:px-10 px-6 pt-16 bg-stone-100">
        <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-start">
          <h1 className="text-xl md:text-4xl font-semibold">
            With over 1.3 million lawyers
            <br /> in the U.S. alone,{" "}
            <span className="text-blue-600">
              it takes more than being a great lawyer to grow a great law firm.
            </span>
          </h1>
          <h1 className="text-sm md:text-lg font-light text-center md:text-start">
            Your survival depends on cutting through the noise, convincing a
            skeptical audience with more options than ever, and positioning your
            firm to compete.
          </h1>
        </div>
        <div className="md:w-1/2 flex items-center md:justify-center">
          <img src={bgmap} alt="" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:gap-8 gap-3 md:px-10 px-6 py-16 bg-stone-100">
        <div className="md:w-1/2 hidden md:flex items-center md:justify-center">
          <img src={bgmaptow} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col gap-4 text-center md:text-start">
          <h1 className="text-xl md:text-4xl font-semibold">
            It takes more than a video to
            <br /> do that.{" "}
            <span className="text-blue-600">
              That’s why Crisp isn’t a video company.
            </span>
          </h1>
          <h1 className="text-sm md:text-lg font-light text-center md:text-start">
            We bring attorneys high-value cases in competitive markets with
            world-class video production, no-nonsense legal marketing, and the
            top coaching program in the industry.
          </h1>
        </div>
        <div className="md:w-1/2 flex md:hidden items-center md:justify-center">
          <img src={bgmaptow} alt="" />
        </div>
      </section>
    </main>
  );
};

export default MapSection;
