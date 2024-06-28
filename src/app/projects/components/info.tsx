"use client";

import React from "react";

interface InfoProps {
  name: string;
  activity: string;
}

const Info: React.FC<InfoProps> = ({ name, activity }) => {
  return (
    <div className="w-full flex items-center max-md:justify-between py-4 border-b-2 border-[#d9d9d920]">
      <div className="flex md:basis-5/12 max-md:flex-col justify-between max-md:items-start items-center max-md:gap-1">
        <div className="text-lg max-md:text-sm text-[#d9d9d9]">{name}</div>
        <div className="text-sm max-md:text-xs text-[#d9d9d950]">
          Active {activity} ago
        </div>
      </div>
      <div className="md:basis-7/12 flex justify-end gap-4 text-[#d9d9d950] text-sm max-md:text-xs">
        <div className="">Open</div>
        <div className="">Delete</div>
      </div>
    </div>
  );
};

export default Info;
