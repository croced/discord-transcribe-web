import React from "react";
import Image from "next/image";
import { FEATURES_CONTENT } from "../../constants";
import FeatureCard from "../../../components/common/FeatureCard";

const Features: React.FC = () => {
  return (
    <div className="mx-4 my-8 md:mx-32 md:my-16 flex flex-col gap-y-4 md:gap-y-4 justify-between">
      <div className="flex md:flex-row flex-col gap-y-4 gap-x-8 w-full">
        <FeatureCard data={FEATURES_CONTENT[0]} />
        <FeatureCard data={FEATURES_CONTENT[1]} />
      </div>
      <div className="md:mt-4 flex md:flex-row flex-col gap-y-4 gap-x-8 w-full">
        <FeatureCard data={FEATURES_CONTENT[2]} />
        <FeatureCard data={FEATURES_CONTENT[3]} />
      </div>
    </div>
  );
};

export default Features;
