'use client';
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <div
        className="flex flex-grow md:flex-grow-0 justify-between rounded-3xl hover:cursor-pointer bg-primary-100 hover:bg-primary-50 transition-colors duration-300 ease-in-out"
        onClick={onClick}
      >
        <a className="flex flex-grow md:flex-grow-0 items-center justify-center py-2 px-8 text-xs md:text-sm">
          {children}
        </a>
      </div>
    </>
  );
}
