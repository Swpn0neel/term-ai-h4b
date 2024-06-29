"use client";

// import Globe from "./magicui/globe"

export default function Demo() {
  return (
    <div className="flex justify-center">
      {/* <Globe/> */}
      <div className="w-4/5">
        <div className="rounded-lg shadow-lg border-2 border-[#d9d9d920]">
          <div className="flex items-center py-5 px-8 bg-[#252525] rounded-t-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-grow flex justify-center">
              <div className="bg-[#363636] rounded-sm w-2/5 py-2"></div>
            </div>
          </div>

          <div className="h-[75vh] p-4 rounded-b-lg"></div>
        </div>
      </div>
    </div>
  );
}
