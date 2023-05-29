import React from "react";
import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import ScrollMenu from "../components/ScrollMenu";
import WalkourTalk from "../components/WalkourTalk";
import Trustee from "../components/Trustee";
import BookSec from "../components/BookSec";
import ContactLink from "../components/ContactLink";

const Home = () => {
  return (
    <div>
      <Hero />
      <MapSection />
      <ScrollMenu />
      <WalkourTalk />
      <Trustee />
      <BookSec />
      <ContactLink />
    </div>
  );
};

export default Home;
