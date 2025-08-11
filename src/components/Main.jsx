import { Array } from "./Array";

export function Main({ array }) {
  console.log("Inside main", array);
  return (
    <>
      <div className="h-[74%] py-60">
        <Array array={array}></Array>
      </div>
    </>
  );
}
