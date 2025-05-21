import { useState } from "react";
import Tours from "./components/tours";
import data from "./data/data";

function App() {
  const [tours, setTours] = useState(data);

  return (
    <>
      <Tours tours={tours} />
    </>
  );
}

export default App;
