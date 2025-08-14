import { Array } from "./Array";

export function Main({ array, element, url, algorithmName, show }) {
  return (
    <>
      <div className="h-[74%] bg-[url(./assets/bg-image-4.jpg)] bg-cover">
        <div className="bg-white/40 backdrop-blur-xs h-[100%] w-full  py-50 ">
          <div
            className={`${
              show ? "visible" : "invisible"
            } flex justify-center text-xl font-semibold mb-3 text-teal-700`}
          >
            Searching for <span className="font-extrabold px-2">{element}</span>{" "}
            in the array
          </div>
          <div
            className={`${
              show ? "visible" : "invisible"
            } flex justify-center text-xl font-semibold mb-8  text-teal-700 `}
          >
            Read more about
            <a
              target="_blank"
              href={url}
              className="px-2 underline italic text-cyan-600 hover:text-cyan-700"
            >
              {algorithmName}
            </a>
          </div>
          <Array array={array}></Array>
        </div>
      </div>
    </>
  );
}
