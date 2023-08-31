"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

type FeatureCardData = {
  title: string;
  description: string;
  image?: string;
};

type FeatureCardProps = {
  data: FeatureCardData;
  glowFrom?: { x: number; y: number } | null;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ data, glowFrom }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative box-content flex flex-row items-start md:w-1/2 rounded-xl border-2 border-sunset-start/10 p-8 bg-gradient-to-r from-sunset-start/5 to-sunset-end/5 overflow-hidden shadow-xl"
    >
      <div
        className={clsx(
          "pointer-events-none absolute -inset-px transition duration-300 w-full h-full",
          { "opacity-0": !glowFrom }
        )}
        style={{
          opacity: !glowFrom ? opacity : 1,
          background: `radial-gradient(600px circle at ${
            glowFrom ? glowFrom.x : position.x
          }px ${
            glowFrom ? glowFrom.y : position.y
          }px, rgba(240,228,118,0.1) 0%, rgba(255,113,205,0.05) 25%, transparent 40%)`,
        }}
      />

      <div className="flex flex-col flex-grow md:flex-grow-0 p-4">
        <h1 className="text-xl font-mono flex flex-row">
          {data.image && (
            <Image
              src={"assets/" + data.image}
              alt="Community icon"
              width={24}
              height={24}
              style={{width: 24, height: 24}} // necessary to shut nextjs warnings up
              className="mr-2"
              aria-hidden
            />
          )}
          {data.title}
        </h1>
        <p className="text-semiOpaque mt-4">{data.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
