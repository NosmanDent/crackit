import React from "react";
import call from "../assets/peter-van-eijk-eiDw0oX8YQQ-unsplash-removebg-preview.png";
import ScrollMenu from "../components/ScrollMenu";

const Contact = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col md:flex-row gap-3 md:h-screen">
          <div className="flex flex-col items-start md:items-start justify-center md:justify-start gap-3 mt-10  mx-6 md:mx-0 md:text-start text-center md:ml-10">
            <h1 className="text-3xl md:text-5xl font-semibold  tracking-wide text-[#1F293C]">
              Tired of Missing Out on the Best Cases?
            </h1>
            <h1 className="text-xl md:text-3xl font-medium leading-tight text-[#1F293C]">
              If you’re done playing small, we’re ready to help. Shake up the
              competition. Drop us a line.
            </h1>
            <h1 className="text-lg md:text-xl text-[#1F293C] ">
              What’s next? We’ll connect to answer your questions, learn more
              about you, and talk through next steps.
            </h1>
          </div>
          <div>
            <img src={call} alt="" className="object-cover md:h-screen" />
          </div>
        </div>
      </div>

      <section className="another  flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="sm:text-2xl text-xl md:text-5xl text-center text-white inter ">
          Are we a fit?
        </h1>
        <h1 className="xs:text-xl text-sm md:text-3xl text-center text-white inter ">
          You’ll love working with Crisp if…
        </h1>
        <h1 className="xs:text-sm text-xs md:text-xl text-center text-blue-600 inter ">
          You have high expectations.
        </h1>
        <h1 className="xs:text-xl text-sm md:text-3xl text-center text-white inter ">
          You demand a lot of your firm and yourself.
        </h1>
        <h1 className="xs:text-sm text-xs md:text-xl text-center text-blue-600 inter ">
          You're prepared to take on more cases.
        </h1>
        <h1 className="xs:text-xl text-sm md:text-3xl text-center text-white inter ">
          You're not afraid of change.
        </h1>
        <h1 className="xs:text-sm text-xs md:text-xl text-center text-blue-600 inter ">
          You're open to being led but unwilling to compromise quality.
        </h1>
        <h1 className="xs:text-xl text-sm md:text-3xl text-center text-white inter ">
          You're serious about growth.
        </h1>
        <h1 className="xs:text-sm text-xs md:text-xl text-center text-blue-600 inter ">
          You'll make serious investments to get a serious ROI.
        </h1>
      </section>

      <section className="py-6 bg-gray-800 text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Your name"
                className="block w-full rounded-md shadow-sm focus:outline-none border-2 border-white py-3 px-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:outline-none border-2 border-white py-3 px-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md shadow-sm focus:outline-none border-2 border-white py-3 px-2"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded text-white bg-[#010F45]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <ScrollMenu />
    </section>
  );
};

export default Contact;
