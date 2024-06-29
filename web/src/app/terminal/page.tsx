"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Terminal: React.FC = () => {
  return (
    <div className="h-screen flex flex-col px-4 lg:px-16 md:px-10">
      <div className="grid grid-cols-3 py-4 md:py-6">
        <div className="flex items-center justify-start text-[#d9d9d950] text-md">
          Back
        </div>
        <div className="flex items-center justify-center text-[#d9d9d9]">
          sample-app
        </div>
        <div className="flex items-center justify-end">
          <Link href="#">
            <Button>Save</Button>
          </Link>
        </div>
      </div>
      <div className="w-full h-full mb-5 rounded-lg border-2 border-[#d9d9d920] bg-[#1c1c1c]"></div>
    </div>
  );
};

export default Terminal;
