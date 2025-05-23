import { useState } from "react";
import Tours from "./components/tours";
import data from "./data/data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){
    const updatedTours = tours.filter((tours)=>{ return tours.id !== id})
     setTours(updatedTours);
  }

  return (
    <>
      <Tours tours={tours} removeTour= {removeTour}/>
    </>
  );
}

export default App;
