import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [array, setArray] = useState([]);
  const [disabledFlag, setDisabledFlag] = useState(false);
  useEffect(() => {
    reset();
  }, []);

  function reset() {
    setDisabledFlag(false);
    let newArray = [];
    let elements = 8;
    for (let i = 0; i < elements; i++) {
      let value = Math.floor(Math.random() * 24);

      newArray = [...newArray, { idx: i, value: value, status: "UNVISITED" }];
    }
    setArray(newArray);
  }

  function linearSearch() {
    setDisabledFlag(true);
    console.log("clicked");
    const element = array[Math.floor(Math.random() * 8)].value;
    for (let i = 0; i < array.length; i++) {
      // console.log(array);
      setTimeout(() => {
        let newArray = array;
        newArray[i].status = "PROCESSING";
        setArray((prev) => [...newArray]);
      }, 1000 * i);

      if (array[i].value == element) {
        setTimeout(() => {
          let newArray = array;
          newArray[i].status = "MATCHED";
          setArray((prev) => [...newArray]);
        }, 1000 * (i + 1));
        break;
      } else {
        setTimeout(() => {
          let newArray = array;
          newArray[i].status = "UNMATCHED";
          setArray((prev) => [...newArray]);
        }, 1000 * (i + 1));
      }
    }
  }
  function binarySearch() {}
  return (
    <>
      <div className="bg-[url(./assets/bg-image-3.jpg)] bg-cover h-screen w-screen">
        <div className="bg-white/50 backdrop-blur-xs h-full w-full">
          <Header></Header>
          <Main array={array}></Main>
          <Footer
            reset={reset}
            linearSearch={linearSearch}
            binarySearch={binarySearch}
            disabledFlag={disabledFlag}
          ></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
