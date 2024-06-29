"use client";

import TypingAnimation from "@/components/magicui/typing-animation";

export default function Text() {
  return (
    <div className="flex justify-center h-[40vh] pt-5">
      <div className="select-none flex flex-col gap-4 w-4/5">
        <div className="font-roboto justify-start text-5xl max-sm:text-3xl text-[#D9D9D950]">
          {"*--------"}
        </div>
        <TypingAnimation text="It is that simple! You can code from anywhere at anytime with the help of an AI assistant, that can automate and help you in your tasks, all from the convenience of a single terminal." />
      </div>
    </div>
  );
}
