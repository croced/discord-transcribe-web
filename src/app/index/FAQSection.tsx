import React from "react";
import FAQDesktop from "./FAQSection/FAQDesktop";
import FAQMobile from "./FAQSection/FAQMobile";

const FAQSection: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <FAQDesktop />
      </div>
      <div className="block md:hidden">
        <FAQMobile />
      </div>
    </>
  );
};

export default FAQSection;
