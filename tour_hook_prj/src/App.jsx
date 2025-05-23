import { useState } from "react";
import Tours from "./components/tours";
import data from "./data/data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const updatedTours = tours.filter((tours) => {
      return tours.id !== id;
    });
    setTours(updatedTours);
  }

  if (tours.length === 0) {
    function refreshHandler() {
      setTours(data);
    }
    return (
      <>
        <div className="flex flex-col justify-center items-center mt-20">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">
            No Tours Left
          </h2>
          <button
            onClick={refreshHandler}
            className="bg-blue-600 text-white text-lg px-6 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300"
          >
            Refresh
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  );
}

export default App;
