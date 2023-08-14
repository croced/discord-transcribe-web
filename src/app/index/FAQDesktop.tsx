"use client";

import clsx from "clsx";
import React, { useState } from "react";
import { FAQ_CONTENT } from "../../constants";

const FAQDesktop: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  return (
    <div className="hidden md:block">
      <div className="m-4 pb-4 mx-32 font-mono">
        <h1 className="text-2xl font-mono">Frequently asked questions</h1>
        <div className="my-4 flex flex-row">
          <div className="w-max max-w-1/2 mr-8 flex flex-col gap-y-4">
            {FAQ_CONTENT.map((item, index) => {
              return (
                <div
                  key={`question-d${index}`}
                  className={clsx({ underline: index === selectedQuestion })}
                  onClick={() => setSelectedQuestion(index)}
                >
                  {item.question}
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-primary-100 rounded-xl w-full h-fit">
            <h1 className="text-xl">
              {FAQ_CONTENT[selectedQuestion].question}
            </h1>
            <p className="mt-2 text-sm">
              {FAQ_CONTENT[selectedQuestion].answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQDesktop;
