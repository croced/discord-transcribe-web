import React, { useEffect, useState } from "react";
import { BACKDROP_WORDS } from "./constants";
import TypewriterText from "../../components/common/TypewriterText";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="m-4 bg-primary-100 rounded-xl relative flex items-center justify-center text-center h-1/3 font-mono overflow-hidden">
        {/* Centered text */}
        <div className="z-20">
          <p className="font-extrabold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-sunset-start to-sunset-end inline-block">
            Discribe
          </p>

          {/* desktop view (typewriter effect) */}
          <div className="hidden md:block">
            <TypewriterText className="text-sm md:text-md">
              the super fast discord transcription service
            </TypewriterText>
          </div>

          {/* mobile view (no typewriter effect) */}
          <div className="block md:hidden">
            <p className="text-sm md:text-md">
              the super fast discord transcription service
            </p>
          </div>
        </div>

        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none backdrop-blur-xl opacity-10 text-white max-w-[100%] blurred-text z-10">
          {BACKDROP_WORDS}
        </div>
      </div>
    </div>
  );
};

export default Home;
