"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { FAQ_CONTENT } from "../../constants";
import Image from "next/image";

const FAQSection: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(index);
    }
  };

  return (
    <div className="w-full flex items-start justify-start md:items-start md:justify-center">
      <div className="m-4 md:mx-32 w-full md:w-2/3">
        <h1 className="mb-4 text-xl text-sunset-start font-mono font-semibold">
          FAQs
        </h1>
        <div className="flex flex-col">
          {FAQ_CONTENT.map((item, index) => (
            <div key={`question-m${index}`}>
              <div
                className="flex flex-grow items-center cursor-pointer justify-between border-t-[2px] border-white/20 py-6 md:py-8"
                onClick={() => handleFAQClick(index)}
              >
                <p className="font-mono">{item.question}</p>
                <Image
                  src={`/assets/icons/${
                    index === selectedQuestion
                      ? "up_arrow.svg"
                      : "down_arrow.svg"
                  }`}
                  alt={index === selectedQuestion ? "Collapse" : "Expand"}
                  width={12}
                  height={12}
                  style={{ width: 12, height: 12 }} // necessary to shut nextjs warnings up
                  className="mx-4"
                  aria-hidden
                />
              </div>
              <div
                className={clsx(
                  "overflow-hidden",
                  {
                    "max-h-0": index !== selectedQuestion,
                  }
                )}
              >
                <p
                  className="mb-6 md:mb-8 text-semiOpaque"
                  aria-expanded={index === selectedQuestion}
                >
                  {FAQ_CONTENT[selectedQuestion || 0].answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
