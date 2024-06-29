"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b-2 border-[#d9d9d920] py-4 md:py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 text-[#D9D9D9] px-6 md:px-20">
        <div className="flex items-center justify-start font-medium text-xl">
          <div className="flex items-center">
            <span>Term</span>
            <span className="text-[#3ECF99]">AI</span>
          </div>
        </div>
        <div className="max-md:hidden flex gap-6 justify-center items-center">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Features
          </a>
          <a href="#" className="hover:text-gray-400">
            Demo
          </a>
        </div>
        <div className="flex gap-6 max-sm:gap-4 justify-end items-center">
          <a href="#" className="hover:text-gray-400">
            Log In
          </a>
          <Link href="#">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
