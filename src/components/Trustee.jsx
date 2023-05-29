import React from "react";
import one from "../assets/1-removebg-preview.png";
import two from "../assets/2-removebg-preview.png";
import three from "../assets/3-removebg-preview.png";
import four from "../assets/4-removebg-preview.png";

const Trustee = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 bg-[#ECECEC] py-20">
      <h1 className="text-xl font-light tracking-wider">TRUSTED BY</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 cursor-pointer">
        <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" />
        <img src={four} alt="" />
      </div>
    </section>
  );
};

export default Trustee;
