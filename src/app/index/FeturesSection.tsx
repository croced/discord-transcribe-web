import React from "react";
import Image from "next/image";
import { FEATURES_CONTENT } from "../../constants";

const Features: React.FC = () => {
  return (
    <div className="mx-4 my-8 md:mx-32 md:my-16 flex flex-col gap-y-4 md:gap-y-4 justify-between">
      <div className="flex md:flex-row flex-col gap-y-4 gap-x-8 w-full">
        <div className="group relative box-content flex flex-row items-start md:w-1/2 rounded-xl border-2 border-sunset-start/10 p-8 bg-gradient-to-r from-sunset-start/5 to-sunset-end/5 hover:from-sunset-start/10 hover:to-sunset-start/10 overflow-hidden">
          <div className="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" />

          <div className="flex flex-col flex-grow md:flex-grow-0">
            <h1 className="text-xl font-mono flex flex-row">
              <Image
                src={`/assets/${FEATURES_CONTENT[0].image}`}
                alt="Community icon"
                width={24}
                height={24}
                className="mr-2"
                aria-hidden
              />
              {FEATURES_CONTENT[0].title}
            </h1>
            <p className="text-white/60 mt-4">{FEATURES_CONTENT[0].description}</p>
          </div>
        </div>
        <div className="group relative box-content flex flex-row  items-start md:w-1/2 rounded-xl border-2 border-sunset-start/10 p-8 bg-gradient-to-r from-sunset-start/5 to-sunset-end/5 hover:from-sunset-start/10 hover:to-sunset-start/10 overflow-hidden">
          <div className="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" />
          <div className="flex flex-col flex-grow md:flex-grow-0">
            <h1 className="text-xl font-mono flex flex-row">
              <Image
                src={`/assets/${FEATURES_CONTENT[1].image}`}
                alt="Lightning icon"
                width={24}
                height={24}
                className="mr-2"
                aria-hidden
              />
              {FEATURES_CONTENT[1].title}
            </h1>
            <p className="text-white/60 mt-4">{FEATURES_CONTENT[1].description}</p>
          </div>
        </div>
      </div>
      <div className="md:mt-4 flex md:flex-row flex-col gap-y-4 gap-x-8 w-full">
        <div className="group relative box-content flex flex-row  items-start md:w-1/2 rounded-xl border-2 border-sunset-start/10 p-8 bg-gradient-to-r from-sunset-start/5 to-sunset-end/5 hover:from-sunset-start/10 hover:to-sunset-start/10 overflow-hidden">
          <div className="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" />

          <div className="flex flex-col flex-grow md:flex-grow-0">
            <h1 className="text-xl font-mono flex flex-row">
              <Image
                src={`/assets/${FEATURES_CONTENT[2].image}`}
                alt="Config icon"
                width={24}
                height={24}
                className="mr-2"
                aria-hidden
              />
              {FEATURES_CONTENT[2].title}
            </h1>
            <p className="text-white/60 mt-4">{FEATURES_CONTENT[2].description}</p>
          </div>
        </div>
        <div className="group relative box-content flex flex-row  items-start md:w-1/2 rounded-xl border-2 border-sunset-start/10 p-8 bg-gradient-to-r from-sunset-start/5 to-sunset-end/5 hover:from-sunset-start/10 hover:to-sunset-start/10 overflow-hidden">
          <div className="absolute top-0 -inset-full h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" />
          <div className="flex flex-col flex-grow md:flex-grow-0">
            <h1 className="text-xl font-mono flex flex-row">
              <Image
                src={`/assets/${FEATURES_CONTENT[3].image}`}
                alt="Microphone icon"
                width={24}
                height={24}
                className="mr-2"
                aria-hidden
              />
              {FEATURES_CONTENT[3].title}
            </h1>
            <p className="text-white/60 mt-4">{FEATURES_CONTENT[3].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
