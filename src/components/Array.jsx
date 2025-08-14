import { ArrayElement } from "./ArrayElement";

export function Array({ array }) {
  return (
    <div className="flex justify-evenly">
      {array.map((el) => {
        return <ArrayElement key={el.idx} element={el}></ArrayElement>;
      })}
    </div>
  );
}
