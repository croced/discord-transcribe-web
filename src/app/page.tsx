import React from "react";
import { HERO_SPLASH, SIGN_IN_HINT } from "../constants";
import TypewriterText from "../../components/common/TypewriterText";
import Image from "next/image";
import ScrollButton from "./ScrollButton";
import Features from "./index/FeturesSection";
import FAQSection from "./index/FAQSection";
import AboutSection from "./index/AboutSection";
import ChatboxSection from "./index/ChatboxSection";
import PhoneboxSection from "./index/PhoneboxSection";

const Home: React.FC = () => {
  return (
    <div className="h-screen">
      {/* HERO BANNER AREA */}
      <div className="m-4 bg-primary-100 rounded-xl relative flex items-center justify-center text-center h-1/3 font-mono overflow-hidden">
        {/* Centered text */}
        <div className="z-20">
          <p className="font-extrabold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sunset-start to-sunset-end inline-block">
            Discribe
          </p>
          {/* desktop view (typewriter effect) */}
          <div className="hidden md:block">
            <TypewriterText className="text-sm md:text-md">
              {HERO_SPLASH}
            </TypewriterText>
          </div>
          {/* mobile view (no typewriter effect) */}
          <div className="block md:hidden">
            <p className="text-sm md:text-md">{HERO_SPLASH}</p>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <ScrollButton />
          </div>
        </div>

        {/* Background text */}
        {/* uses aria-hidden and pseudo elements to hide text from screen readers and indexing */}
        <div aria-hidden="true" id="backdrop-text" className="blurred-text" />
      </div>

      {/* SUB-HEADER AREA */}
      <div className="mx-4 h-[5%] flex gap-x-2 justify-between items-center font-mono">
        <div className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50">
          <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8  text-xs md:text-sm">
            <Image
              src="/assets/icons/documentation.svg"
              alt="Documentation"
              width={20}
              height={20}
              className="mr-2"
              aria-hidden
            />
            Documentation
          </a>
        </div>
        {/* handles case for desktop view of sign in hint (in line with flex boxes) */}
        <p className="text-middle hidden md:block md:flex-grow-1">
          {SIGN_IN_HINT}
        </p>
        <div className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50">
          <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8 text-xs md:text-sm">
            <Image
              src="/assets/icons/sign-in.svg"
              alt="Sign in"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in
          </a>
        </div>
      </div>

      {/* handles case for mobile view of sign in hint (beneath flex boxes) */}
      <div className="text-center mx-4 mt-8 md:hidden text-sm font-mono">
        <p>{SIGN_IN_HINT}</p>
      </div>

      {/* CHATBOX */}
      <ChatboxSection />

      {/* ABOUT */}
      <AboutSection />

      {/* FEATURES */}
      <Features />

      {/* FAQ */}
      <FAQSection />
    </div>
  );
};

export default Home;
