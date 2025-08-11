import { useState } from "react";

export function Footer({ reset, linearSearch, binarySearch, disabledFlag }) {
  return (
    <>
      <div className="h-[16%] bg-slate-100 py-5">
        <div className="flex justify-center mb-4">
          <button onClick={reset} className="cursor-pointer">
            <svg
              width="40px"
              height="40px"
              viewBox="-7.44 -7.44 38.88 38.88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0">
                <rect
                  x="-7.44"
                  y="-7.44"
                  width="38.88"
                  height="38.88"
                  rx="19.44"
                  fill="#377A7B"
                  strokeWidth="0"
                ></rect>
              </g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21C9.69494 21 7.59227 20.1334 6 18.7083L3 16M3 12C3 7.02944 7.02944 3 12 3C14.3051 3 16.4077 3.86656 18 5.29168L21 8M3 21V16M3 16H8M21 3V8M21 8H16"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="flex justify-center">
          <button
            disabled={disabledFlag}
            onClick={linearSearch}
            className="cursor-pointer border rounded-full px-5 text-xl border-[#377A7B] text-[#377A7B] m-2 hover:bg-[#377A7B] hover:text-slate-100"
          >
            Linear Search
          </button>
          <button
            disabled={disabledFlag}
            onClick={binarySearch}
            className="cursor-pointer border rounded-full px-5 text-xl border-[#377A7B] text-[#377A7B] m-2 hover:bg-[#377A7B] hover:text-slate-100"
          >
            Binary Search
          </button>
        </div>
      </div>
    </>
  );
}
