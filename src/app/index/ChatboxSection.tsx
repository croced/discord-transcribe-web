import React from "react";
import Image from "next/image";

const ChatboxSection: React.FC = () => {
  return (
    <>
      <div className="m-4 h-[calc(100vh-54%)] md:mx-64 md:h-[calc(100vh-45%)] relative">
        {/* desktop chatbox */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src="/assets/chatbox-desktop.svg"
            alt="Discribe example within chatbox"
            placeholder="empty"
            fill
            priority
          />
        </div>

        {/* mobile chatbox */}
        <div className="block md:hidden relative w-full h-full">
          <Image
            src="/assets/chatbox-mobile.svg"
            alt="Discribe example within chatbox"
            placeholder="empty"
            fill
            priority
          />
        </div>
      </div>
    </>
  );
};

export default ChatboxSection;
