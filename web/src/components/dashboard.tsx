"use client";

import Info from "./info";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function DashUI() {
  return (
    <div className="h-[90vh] py-8 md:py-12 px-12 lg:px-40 text-white">
      <div className="h-full flex flex-col gap-12 max-md:gap-4">
        <div className="h-full flex basis-2/5 gap-16 text-xl max-md:flex-col max-md:gap-4">
          <WobbleCard containerClassName="h-full basis-1/2 flex justify-center items-center rounded-lg shadow-lg border-2 border-[#d9d9d920] bg-[#1c1c1c]">
            Start a new Project
          </WobbleCard>
          <WobbleCard containerClassName="h-full basis-1/2 flex justify-center items-center rounded-lg shadow-lg border-2 border-[#d9d9d920] bg-[#1c1c1c]">
            Open from Repository
          </WobbleCard>
        </div>
        <div className="basis-3/5 max-md:pt-4">
          <div className="text-4xl md:text-5xl font-roboto pb-6">
            <span className="text-[#3ECF99]">R</span>ecent Terminals
          </div>
          <div className="max-h-64 overflow-y-auto pr-2 scrollbar-custom">
            <Info name="Swpn0neel/sample-app" activity="4d" />
            <Info name="my-terminal-80085" activity="1w" />
            <Info name="sample-app" activity="3w" />
            <Info name="my-testing-terminal" activity="3y" />
            <Info name="my-react-app" activity="5y" />
          </div>
        </div>
      </div>
    </div>
  );
}
