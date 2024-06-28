import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="flex justify-center items-center bg-[#2D7555] border-2 border-[#3ECF99] text-white text-md px-6 py-1 rounded hover:bg-[#3ECF99]"
    >
      {children}
    </a>
  );
};

export default Button;
