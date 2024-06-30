"use client";

export default function Demo() {
  return (
    <div className="flex justify-center"> 
      <div className="w-[50vw] max-sm:w-[80vw]">
        <div className="rounded-lg shadow-lg border-2 border-[#d9d9d920]">
          <div className="flex items-center py-5 px-8 bg-[#252525] rounded-t-lg">
            <div className="flex space-x-2 scroll-m-16" id="demo-video">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-grow flex justify-center">
              <div className="bg-[#363636] rounded-sm w-2/5 py-2"></div>
            </div>
          </div>

          <div className="rounded-b-lg">
            <video src="/demo.mp4" autoPlay controls className="w-[50vw] max-sm:w-[80vw]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
