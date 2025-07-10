import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Filter from "./components/filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data/data";

function App() {
 
  const[courses,Setcourses]=useState(null);
  const[loading,Setloading]=useState(true);

  async function getData(params)
  {
    Setloading(true);
     try {
         const res = await fetch (apiUrl);
         const output = await res.json();
         Setcourses(output);
         
     } catch (error) {
       console.log("Error is there");
       
     }
     Setloading(false);
  }

  useEffect(()=>{
    getData();
  },[]);



  return (
  <>
      <div>
       <Navbar/>
       <Filter filterData={filterData} />
       <Cards courses={courses}/>
      </div>
  </>
  );
}

export default App;
