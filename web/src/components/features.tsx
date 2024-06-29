import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import svgPaths from "../../public/svg";
import SVGIcon from "@/components/ui/SVGIcon";

export default function Features() {
  return (
    <div className="flex justify-center text-[#d9d9d980] py-6 max-sm:py-2 max-lg:py-4">
      <div className="w-4/5 flex gap-4 max-lg:flex-col">
        <div className="basis-1/3 grid grid-rows-[1fr,auto,auto] gap-4">
          <div className="select-none text-4xl md:text-5xl font-roboto text-white">
            <span className="text-[#3ECF99]">AI</span> is the new convenience.
          </div>
          <WobbleCard containerClassName="shadow-lg bg-[#1c1c1c] px-8 md:px-16 py-20 border border-gray-600 rounded-lg flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="">
                <SVGIcon
                  svg={svgPaths.first}
                  className="w-20 h-24 sm:w-24 sm:h-28 md:w-20 md:h-28"
                />
              </div>
              <div className="text-center text-xl">
                Use your favorite code editor, the one and only Neo Vim, to
                write your codes!
              </div>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="shadow-lg bg-[#1c1c1c] px-8 md:px-16 py-20 md:basis-5/12 border border-gray-600 rounded-lg flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="">
                <SVGIcon
                  svg={svgPaths.second}
                  className="w-20 h-24 sm:w-24 sm:h-28 md:w-20 md:h-24"
                />
              </div>
              <div className="text-center text-xl">
                Automate all of your boring task by describing it to our AI.
                Also, get response from Stack Exchange!
              </div>
            </div>
          </WobbleCard>
        </div>
        <div className="basis-2/3 grid grid-rows-[auto,auto,1fr] gap-4">
          <div className="flex gap-4 max-sm:flex-col">
            <WobbleCard containerClassName="flex-grow shadow-lg bg-[#1c1c1c] px-8 md:px-16 py-20 md:basis-5/12 border border-gray-600 rounded-lg flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center justify-center">
                <div className="">
                  <SVGIcon
                    svg={svgPaths.third}
                    className="w-20 h-24 sm:w-24 sm:h-28 md:w-20 md:h-24"
                  />
                </div>
                <div className="text-center text-xl">
                  Save your code by syncing it directly to your GitHub, and drop
                  in and out while coding.
                </div>
              </div>
            </WobbleCard>
            <WobbleCard containerClassName="flex-grow shadow-lg bg-[#1c1c1c] px-8 md:px-16 py-20 md:basis-5/12 border border-gray-600 rounded-lg flex flex-col items-center justify-center">
              <div className="flex flex-col gap-8 items-center justify-center">
                <div className="">
                  <SVGIcon
                    svg={svgPaths.Fourth}
                    className="w-20 h-24 sm:w-24 sm:h-28 md:w-20 md:h-28"
                  />
                </div>
                <div className="text-center text-xl">
                  Save your code by syncing it directly to your GitHub, and drop
                  in and out while coding.
                </div>
              </div>
            </WobbleCard>
          </div>
          <div className="">
            <WobbleCard containerClassName="shadow-lg bg-[#1c1c1c] px-8 md:px-16 py-20 md:basis-5/12 border border-gray-600 rounded-lg flex flex-col items-center justify-center">
              <div className="flex md:flex-row flex-col gap-8 items-center justify-center">
                <div className="">
                  <SVGIcon
                    svg={svgPaths.Fifth}
                    className="w-20 h-24 sm:w-24 sm:h-28 md:w-20 md:h-28"
                  />
                </div>
                <div className="text-xl max-md:text-center">
                  Ask any questions and get real-time answers from our AI
                  directly at the terminal. You can give file & directory as the
                  context to ask your question. Also, an interactive
                  context-based chat mode in to ask follow-up questions!
                </div>
              </div>
            </WobbleCard>
          </div>
          
          <div className="lg:pl-4 pt-4 select-none text-4xl md:text-5xl font-roboto text-white">
            And, a lot <span className="text-[#3ECF99]">more features </span>
            ready for you to explore...
          </div>
          
        </div>
      </div>
    </div>
  );
}
