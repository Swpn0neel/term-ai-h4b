"use client";

export default function DashNavbar() {
  return (
    <div className="h-[10vh] flex justify-between border-b-2 border-[#d9d9d920] py-4 md:py-6 px-12 md:px-40">
      <div className="flex items-center justify-start font-medium text-xl">
        <div className="flex items-center">
          <span className="text-white">Term</span>
          <span className="text-[#3ECF99]">AI</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="h-3 w-3 rounded-lg bg-white"></div>
      </div>
    </div>
  );
}
