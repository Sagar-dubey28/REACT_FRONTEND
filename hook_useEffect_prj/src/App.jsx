import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Filter from "./components/filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data/data";
import Spinner from "./components/spinner";

function App() {
 
  const[courses,Setcourses]=useState([]);
  const[loading,Setloading]=useState(true);

  async function getData(params)
  {
    Setloading(true);
     try {
         const res = await fetch (apiUrl);
         const output = await res.json();
         Setcourses(output.data);
         
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
       <div className="w-[1200px]    ml-6">
         <div className="">
           {
          (loading)? <Spinner/> : <Cards courses={courses}/>
          }
         </div>
       </div>
      </div>
  </>
  );
}

export default App;
