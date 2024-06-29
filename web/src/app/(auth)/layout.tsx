import React from "react";

export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-[1fr_640px]">
      <div
        className=""
        style={{ backgroundImage: "url(/images/auth-bg.jpeg)" }}
      />
      <div className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
