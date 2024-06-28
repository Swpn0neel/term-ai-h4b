/* eslint-disable react/no-unescaped-entities */
"use client";

import Button from "../../components/ui/button";

export default function Hero() {
  return (
    <div className="text-center p-8 md:p-20">
      <h1 className="text-4xl md:text-6xl font-medium pb-6 lg:px-72 md:px-36 text-white font-roboto">
        Code from <span className="text-[#3ECF99]">anywhere</span> &
        <span className="text-[#3ECF99]"> anytime</span> with AI
      </h1>

      <p className="text-[#d9d9d9] text-md md:text-xl px-4 lg:px-96 md:px-32 pb-4">
        With the power of our AI-based Web Terminal, you can code from anywhere
        at anytime whether it's your mobile, browser or any other device
      </p>
      <div className="flex justify-center space-x-4">
        <Button href="#">Start a project</Button>
        <a href="#" className="bg-[#282828] text-white px-4 py-2 rounded">
          Check Demo
        </a>
      </div>
    </div>
  );
}
