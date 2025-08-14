import { useEffect, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [array, setArray] = useState([]);
  const [searching, setSearching] = useState(false);
  const [disabledFlag, setDisabledFlag] = useState(false);
  const [searchElement, setSearchElement] = useState(0);
  const [selectedAlgo, setSelectedAlgo] = useState({});

  useEffect(() => {
    reset();
  }, []);

  function reset() {
    setDisabledFlag(false);

    let newArray = [];
    let elements = 8;
    for (let i = 0; i < elements; i++) {
      let value = Math.floor(Math.random() * 50);

      newArray = [...newArray, { idx: i, value: value, status: "UNVISITED" }];
    }
    setArray(newArray);
  }

  function linearSearch() {
    const elementToSearch = array[Math.floor(Math.random() * 8)].value;
    setSearchElement(elementToSearch);
    setSearching(true);
    setDisabledFlag(true);
    setSelectedAlgo({
      algoName: "Linear Search",
      algoUrl: "https://www.geeksforgeeks.org/dsa/linear-search/",
    });

    for (let i = 0; i < array.length; i++) {
      // console.log(array);
      setTimeout(() => {
        let newArray = array;
        newArray[i].status = "PROCESSING";
        setArray((prev) => [...newArray]);
      }, 1000 * i);

      if (array[i].value == elementToSearch) {
        setTimeout(() => {
          let newArray = array;
          newArray[i].status = "MATCHED";
          setArray((prev) => [...newArray]);
          setSearching(false);
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

  function binarySearch() {
    let newArray = array;
    newArray.sort((a, b) => a.value - b.value);
    for (let i = 0; i < 8; i++) {
      newArray[i].idx = i;
    }
    setArray((prev) => [...newArray]);
    const elementToSearch = array[Math.floor(Math.random() * 8)].value;
    setSearchElement(elementToSearch);
    setSearching(true);
    setDisabledFlag(true);
    setSelectedAlgo({
      algoName: "Binary Search",
      algoUrl: "https://cp-algorithms.com/num_methods/binary_search.html",
    });

    let start = 0;
    let end = array.length - 1;
    let counter = 0;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      console.log(array);
      console.log(mid);
      setTimeout(() => {
        let newArray = array;
        newArray[mid].status = "PROCESSING";
        setArray((prev) => [...newArray]);
      }, 1000 * counter);

      if (array[mid].value == elementToSearch) {
        setTimeout(() => {
          let newArray = array;
          newArray[mid].status = "MATCHED";
          setArray((prev) => [...newArray]);
          setSearching(false);
        }, 1000 * (counter + 1));
        break;
      } else if (array[mid].value < elementToSearch) {
        for (let i = start; i <= mid; i++) {
          setTimeout(() => {
            let newArray = array;
            newArray[i].status = "UNMATCHED";

            setArray((prev) => [...newArray]);
          }, 1000 * (counter + 1) + 5 * i);
        }
        start = mid + 1;
      } else if (array[mid].value > elementToSearch) {
        for (let i = mid; i <= end; i++) {
          setTimeout(() => {
            let newArray = array;
            newArray[i].status = "UNMATCHED";
            setArray((prev) => [...newArray]);
          }, 1000 * (counter + 1) + 5 * i);
        }
        end = mid - 1;
      }
      counter++;
    }
  }

  return (
    <>
      <div className="h-screen w-screen">
        <Header></Header>
        <Main
          array={array}
          element={searchElement}
          url={selectedAlgo.algoUrl}
          algorithmName={selectedAlgo.algoName}
          show={disabledFlag}
        ></Main>
        <Footer
          reset={reset}
          linearSearch={linearSearch}
          binarySearch={binarySearch}
          searching={searching}
          disabledFlag={disabledFlag}
        ></Footer>
      </div>
    </>
  );
}

export default App;
