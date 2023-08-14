"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { FAQ_CONTENT } from "../../constants";
import Image from "next/image";

const FAQMobile: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div className="block md:hidden">
      <div className="m-4 pb-4 font-mono">
        <h1 className="mb-4 text-xl font-mono">Frequently asked questions</h1>
        <div className="flex flex-col gap-y-2">
          {FAQ_CONTENT.map((item, index) => (
            <div key={`question-m${index}`}>
              <div
                className={clsx(
                  "p-4 bg-primary-100 rounded-xl flex flex-grow items-center cursor-pointer",
                  { underline: index === selectedQuestion }
                )}
                onClick={() => handleFAQClick(index)}
              >
                <p>{item.question}</p>
                <Image
                  src={`/assets/icons/${
                    index === selectedQuestion
                      ? "up_arrow.svg"
                      : "down_arrow.svg"
                  }`}
                  alt={index === selectedQuestion ? "Collapse" : "Expand"}
                  width={30}
                  height={30}
                  className="mx-4"
                  aria-hidden
                />
              </div>
              <div
                className={clsx(
                  "px-4 transition-max-h duration-300 overflow-hidden",
                  { "max-h-0": index !== selectedQuestion }
                )}
              >
                <p>{FAQ_CONTENT[selectedQuestion || 0].answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQMobile;
