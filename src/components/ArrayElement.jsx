import { useState } from "react";

export function ArrayElement({ element }) {
  const bgColors = {
    processing: "bg-purple-100",
    matched: "bg-green-100",
    unmatched: "bg-red-100",
    unvisited: "bg-slate-100",
  };
  // console.log(value, status);
  return (
    <>
      <div>
        <div className="flex justify-center text-l text-red-500 font-semibold">
          {element.idx}
        </div>
        <div
          className={`${
            bgColors[element.status.toLowerCase()]
          } flex justify-center w-10 py-2 px-3 rounded-sm shadow-amber-200 text-xl`}
        >
          {element.value}
        </div>
      </div>
    </>
  );
}
