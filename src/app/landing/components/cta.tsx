"use client";

import Button from "../../components/ui/button";

export default function CTA() {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-white py-20">
        <h1 className="text-4xl md:text-6xl font-medium pb-8 font-roboto text-center">
          Start a new project <br />
          with <span className="text-[#3ECF99]">TermAI</span> now!
        </h1>
        <div className="flex justify-center space-x-4">
          <Button href="#">Start a project</Button>
          <a href="#" className="bg-[#282828] text-white px-4 py-2 rounded">
            Check Demo
          </a>
        </div>
      </div>
    </div>
  );
}
