/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 170 1440 150">
        <path
          fill="#161616"
          fill-opacity="1"
          d="M0,256L360,192L720,224L1080,256L1440,320L1440,320L1080,320L720,320L360,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#161616] py-8 px-6 md:px-20 lg:px-40">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:basis-2/5 justify-between">
            <h2 className="text-3xl font-medium text-white">
              Term<span className="text-[#3ECF99]">AI</span>
            </h2>
            <p className="pt-4 text-gray-400">
              With the power of our AI-based Web Terminal, you can code from
              anywhere at anytime whether it's your mobile, browser or any other
              device
            </p>
          </div>
          <div className="flex gap-24 basis-3/5 justify-end max-md:flex-wrap max-md:justify-start pt-8 max-md:pt-4 max-md:gap-8 ">
            <div>
              <h2 className="text-lg font-bold text-white">PAGES</h2>
              <ul className="pt-4 text-gray-400 space-y-2">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">SOCIALS</h2>
              <ul className="pt-4 text-gray-400 space-y-2">
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">LEGALS</h2>
              <ul className="pt-4 text-gray-400 space-y-2">
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#">Cookie Settings</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          Copyright © 2023. Made by Team Bengal Devs for the purpose of Hack 4
          Bengal 3.0
        </div>
      </div>
    </div>
  );
}
