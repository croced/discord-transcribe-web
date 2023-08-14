import React from "react";
import { HERO_SPLASH, SIGN_IN_HINT } from "../constants";
import TypewriterText from "../../components/common/TypewriterText";
import Image from 'next/image';
import ScrollButton from "./ScrollButton";
import FAQDesktop from "./index/FAQDesktop";
import FAQMobile from "./index/FAQMobile";

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
              { HERO_SPLASH }
            </TypewriterText>
          </div>

          {/* mobile view (no typewriter effect) */}
          <div className="block md:hidden">
            <p className="text-sm md:text-md">
              { HERO_SPLASH }
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" >
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
              <Image src="/assets/icons/documentation.svg" alt="Documentation" width={20} height={20} className="mr-2" aria-hidden />
              Documentation
            </a>
          </div>
          {/* handles case for desktop view of sign in hint (in line with flex boxes) */}
          <p className="text-middle hidden md:block">{ SIGN_IN_HINT }</p>
          <div className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50">
            <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8 text-xs md:text-sm">
              <Image src="/assets/icons/sign-in.svg" alt="Sign in" width={20} height={20} className="mr-2" />
              Sign in
            </a>
          </div>
      </div>

      {/* handles case for mobile view of sign in hint (beneath flex boxes) */}
      <div className="text-center mx-4 mt-8 md:hidden text-sm font-mono">
        <p>{ SIGN_IN_HINT }</p>
      </div>

      {/* CHATBOX */}
      <div className="m-4 h-[calc(100vh-54%)] md:mx-64 md:h-[calc(100vh-45%)] relative">

        {/* desktop chatbox */}
        <div className="hidden md:block relative w-full h-full">
          <Image src="/assets/chatbox-desktop.svg" alt="Discribe example within chatbox" placeholder="empty" fill priority />
        </div>

        {/* mobile chatbox */}
        <div className="block md:hidden relative w-full h-full">
          <Image src="/assets/chatbox-mobile.svg" alt="Discribe example within chatbox" placeholder="empty" fill priority />
        </div>
      </div>

      {/* ABOUT */}
      <div className="m-4 md:mx-32 font-mono">
        <h1 className="text-2xl text-sunset-start">About</h1>
        <p><b>Discribe</b>, your chatty sidekick in the world of Discord! 🤖</p>
        <p>Tired of straining your ears to catch every hilarious punchline or epic gaming strategy shared in chat? Well, fret not, because Discribe is here to save the day!</p>
        <br />
        <p>🚀 Discribe isn&apos;t just any old transcription service – it&apos;s a speedy genius! Say goodbye to long waiting times and hello to instant results. With Discribe, those voice messages will be transcribed quicker than you can say &quot;supercalifragilisticexpialidocious&quot; (and yes, it&apos;ll transcribe that too!).</p>
        <br />
        <p>🌈 Discribe is designed with love and accessibility in mind. For our friends who might not be able to hear voice messages, or simply prefer reading, Discribe is the ultimate bridge between the spoken and the written word.</p>
        <br />
        <p>Using Discribe is as easy as pie. Just invite our bot to your server, and it&apos;ll be at your service, ready to transform voice messages into text treasures.</p>
      </div>

      {/* FEATURES */}
      <div className="mx-4 my-16 md:mx-64 flex flex-col gap-y-4 md:gap-y-0 justify-between font-mono">
        <div className="flex md:flex-row flex-col gap-y-4 gap-x-8 w-full">
          <div className="box-content flex flex-row  items-start md:w-1/2 rounded-xl p-4">
            <Image src="/assets/icons/community.svg" alt="Community icon" width={80} height={80} className="mr-4" aria-hidden />
            <div className="flex flex-col flex-grow md:flex-grow-0">
              <h1 className="text-xl text-sunset-start">
                Free for communities
              </h1>
              <p>Transcribe the chatter for free! Discribe is your community&apos;s chat companion, offering lightning-fast voice-to-text transcription without costing a coin. Whether you're part of a gaming guild, study group, or fan forum, enjoy the power of transcription at no cost for servers under 100 users.</p>
            </div>
          </div>
          <div className="box-content flex flex-row items-start md:w-1/2 rounded-xl p-4">
            <Image src="/assets/icons/lightning.svg" alt="Lightning icon" width={80} height={80} className="mr-4" aria-hidden />
            <div className="flex flex-col flex-grow md:flex-grow-0">
              <h1 className="text-xl text-sunset-start">
                Lightning fast
              </h1>
              <p>In the blink of an eye, Discribe transforms voice messages into text treasures. Experience a swift and seamless transcription process that keeps up with your conversations. No more waiting – it&apos;s transcription at the speed of thought!</p>
            </div>
          </div>
        </div>
        <div className="md:mt-4 flex md:flex-row flex-col gap-y-4 gap-x-8 w-full">
        <div className="box-content flex flex-row items-start md:w-1/2 rounded-xl p-4">
            <Image src="/assets/icons/config.svg" alt="Config icon" width={80} height={80} className="mr-4" aria-hidden />
            <div className="flex flex-col flex-grow md:flex-grow-0">
              <h1 className="text-xl text-sunset-start">
                Highly configurable
              </h1>
              <p>Make Discribe yours! Customize settings for both server and user preferences, and enjoy a transcription service that speaks your language. It's transcription, your way.</p>
            </div>
          </div>
          <div className="box-content flex flex-row items-start md:w-1/2 rounded-xl p-4">
            <Image src="/assets/icons/microphone.svg" alt="Microphone icon" width={80} height={80} className="mr-4" aria-hidden />
            <div className="flex flex-col flex-grow md:flex-grow-0">
              <h1 className="text-xl text-sunset-start">
                Real-time transcription
              </h1>
              <p>(coming soon)</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="hidden md:block">
        <FAQDesktop />
      </div>
      <div className="block md:hidden">
        <FAQMobile />
      </div>

    </div>
  );
};

export default Home;
