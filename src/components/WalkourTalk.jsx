import React from "react";
import { MdOutlineMoving, MdPeople } from "react-icons/md";

const WalkourTalk = () => {
  return (
    <main className="bg-[#575CF4]" id="market">
      <section className=" px-6 my-20 md:px-10 py-16 flex flex-col md:flex-row items-center gap-5 ">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center md:justify-start gap-4 inter mb-10 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-wider text-center md:text-start">
            We walk our talk.
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold tracking-wide md:text-start text-center">
            Because you shouldn’t trust a company to grow your business if they
            can’t do it for themselves.
          </h1>
          <h1 className="text-sm md:text-md text-white font-light md:text-start text-center">
            From $500 to $40M+ in under nine years: We practice what we preach.
            We’ve used the same strategies we advise for clients to become the
            fastest-growing company of our kind in the nation. And with over
            $1,000,000,000 in revenue driven for clients (and counting), we’ve
            proven repeatedly it’s not a fluke.
          </h1>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 ">
          <div className="border-2 border-white flex flex-row items-center justify-between h-[100px]  w-full sm:px-10 xs:px-7 px-4">
            <div className="text-xl md:text-4xl text-stone-200 font-medium whitespace-nowrap flex flex-row  ">
              2-10X
            </div>
            <p className="text-stone-200 font-semibold text-sm whitespace-nowrap ">
              INCREASE IN <br />
              AVERAGE <br />
              CASE VALUE
            </p>
          </div>
          <div className="border-2 border-stone-200 items-center  h-[100px] flex flex-row justify-between w-full sm:px-10 xs:px-7 px-4">
            <div className="text-xl md:text-4xl text-stone-200 font-medium">
              $3.2M+
            </div>
            <p className="text-stone-200 font-semibold text-sm ">
              AVERAGE CRISP
              <br />
              COACH MEMBER <br />2 YEARS GROWTH RATE
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row ">
          <div className="relative flex  md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-full relative object-cover"
            />
            <div className="absolute inset-0  flex-col items-end justify-end mb-10 ml-5 flex ">
              <h1 className="text-white lg:text-xl text-lg font-bold bg-blue-500 px-6 py-3 flex flex-col">
                MARK O'MARA, O'MARA LAW GROUP{" "}
                <span className="font-normal text-md">Crisp Coach Member</span>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 md:px-20 px-10 pt-16 pb-10 gap-5 flex flex-col">
            <div className="flex flex-row items-center gap-10 ">
              <div className="flex flex-col items-center justify-center">
                <MdOutlineMoving className="text-blue-600 text-3xl md:text-5xl lg:text-7xl" />
                <h1 className="font-bold text-center inter md:flex hidden">
                  30%
                  <br /> INCREASE
                  <br /> IN <br />
                  REVENUE
                </h1>
                <h1 className="font-bold text-center text-xs inter md:hidden flex">
                  30% INCREASE IN REVENUE
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdPeople className="text-blue-600 text-3xl md:text-5xl lg:text-7xl" />
                <h1 className="font-bold text-center inter md:flex hidden">
                  30% <br />
                  CASELOAD <br />
                  INCREASE
                </h1>
                <h1 className="font-bold text-center text-xs inter md:hidden flex">
                  30% CASELOAD INCREASE
                </h1>
              </div>
            </div>

            <h1 className="md:text-start text-justify">
              REVENUE 30% CASELOAD INCREASE "Crisp is wonderful at keeping our
              focus on the big picture{" "}
              <span className="font-semibold">
                {" "}
                and maintaining the core values
              </span>{" "}
              of the firm as we make decisions on firm growth, staffing changes,
              and particularly addressing the unique times we find ourselves in.{" "}
              <span className="font-semibold">
                Our footprint has grown online,
              </span>{" "}
              and that brings in the cases and the clients, which brings in the
              increased revenue.{" "}
              <span className="font-semibold">
                We’ve had a significant revenue increase,
              </span>{" "}
              even while many colleague firms have been suffering or shuttering.
              We are up 30% in revenue and caseload."
            </h1>

            <button className="bg text-white md:text-2xl sm:text-xl text-sm font-semibold py-3 md:px-8  rounded-full whitespace-nowrap">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row ">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1620754430927-9cb95a5a585f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt=""
              className="w-full md:w-1/2 md:hidden flex relative"
            />
            <div className="absolute inset-0 flex flex-col items-end justify-end mb-10 ml-5 md:hidden ">
              <h1 className="text-white md:text-xl text-xs font-bold bg-blue-500 px-6 py-3 flex flex-col">
                ALEXANDER SHUNNARAH, ALEXANDER SHUNNARAH TRIAL ATTORNEYS Crisp
                Coach Member{" "}
                <span className="font-normal text-md">Crisp Coach Member</span>
              </h1>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-gray-100 md:px-20 px-10 pt-16 pb-10 gap-5 flex flex-col">
            <div className="flex flex-row items-center gap-10 ">
              <div className="flex flex-col items-center justify-center">
                <MdOutlineMoving className="text-blue-600 text-3xl md:text-5xl lg:text-7xl" />
                <h1 className="font-bold text-center inter md:flex hidden">
                  $25M
                  <br /> ANNUAL
                  <br /> REVENUE <br />
                  INCREASE
                </h1>
                <h1 className="font-bold text-center text-xs inter md:hidden flex">
                  $25M ANNUAL REVENUE INCREASE
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdPeople className="text-blue-600 text-3xl md:text-5xl lg:text-7xl" />
                <h1 className="font-bold text-center inter md:flex hidden">
                  30% <br />
                  CASELOAD <br />
                  INCREASE
                </h1>
                <h1 className="font-bold text-center text-xs inter md:hidden flex">
                  30% CASELOAD INCREASE
                </h1>
              </div>
            </div>

            <h1 className="md:text-start text-justify">
              INCREASE 100+ TEAM MEMBER INCREASE "Crisp Coach has introduced me
              to hundreds of lawyers.{" "}
              <span className="font-semibold">
                It's helped me learn about how to run my practice more
                efficiently
              </span>{" "}
              and how to lead my team more efficiently. I've been introduced to
              the{" "}
              <span className="font-semibold">
                digital space, the social media
              </span>{" "}
              space, leadership, and finance.{" "}
              <span className="font-semibold">
                They really teach you the business side of it, the energy side
                of it, being consistent
              </span>
              , and all the tools necessary to be successful."
            </h1>

            <button className="bg text-white md:text-2xl sm:text-xl text-sm font-semibold py-3 md:px-8  rounded-full whitespace-nowrap">
              LEARN MORE
            </button>
          </div>

          <div className="relative md:flex hidden w-1/2">
            <img
              src="https://images.unsplash.com/photo-1620754430927-9cb95a5a585f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
              alt=""
              className="w-full relative object-cover"
            />
            <div className="absolute inset-0 hidden flex-col items-end justify-end mb-10 ml-5 md:flex ">
              <h1 className="text-white lg:text-xl text-lg font-bold bg-blue-500 px-6 py-3 flex flex-col">
                MARK O'MARA, O'MARA LAW GROUP{" "}
                <span className="font-normal text-md">Crisp Coach Member</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row ">
          <div className="relative flex  md:w-1/2 w-full">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt=""
              className="w-full relative object-cover"
            />
            <div className="absolute inset-0  flex-col items-end justify-end mb-10 ml-5 flex ">
              <h1 className="text-white lg:text-xl text-lg font-bold bg-blue-500 px-6 py-3 flex flex-col">
                ERIC CHAFFIN, CHAFFIN LUHANA{" "}
                <span className="font-normal text-md">Crisp Coach Member</span>
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100 md:px-20 px-10 pt-16 pb-10 gap-5 flex flex-col">
            <div className="flex flex-row items-center gap-10 ">
              <div className="flex flex-col items-center justify-center">
                <MdOutlineMoving className="text-blue-600 text-3xl md:text-5xl lg:text-7xl" />
                <h1 className="font-bold text-center inter md:flex hidden">
                  17%
                  <br /> REVENUE
                  <br /> INCREASE
                </h1>
                <h1 className="font-bold text-center text-xs inter md:hidden flex">
                  17% REVENUE INCREASE
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MdPeople className="text-blue-600 text-3xl md:text-5xl lg:text-7xl" />
                <h1 className="font-bold text-center inter md:flex hidden">
                  27.5X <br />
                  INCREASE <br />
                  IN ATTORNEY <br />
                  REFERRALS
                </h1>
                <h1 className="font-bold text-center text-xs inter md:hidden flex">
                  27.5X INCREASE IN ATTORNEY REFERRALS
                </h1>
              </div>
            </div>

            <h1 className="md:text-start text-justify">
              INCREASE 27.5X INCREASE IN ATTORNEY REFERRALS{" "}
              <span className="font-semibold">
                “The beauty of Crisp is that the Crisp team leads by example and
                inspires.
              </span>{" "}
              There is a certain caliber of attorney who is attracted to that —
              and some are just plain too scared —{" "}
              <span className="font-semibold">and you have to be honest </span>
              with yourself about what you really want.{" "}
              <span>
                {" "}
                className="font-semibold" If you are truly committed and execute
                on what you learn,
              </span>{" "}
              you’ll get a lot out of it.”
            </h1>

            <button className="bg text-white md:text-2xl sm:text-xl text-sm font-semibold py-3 md:px-8  rounded-full whitespace-nowrap">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WalkourTalk;
