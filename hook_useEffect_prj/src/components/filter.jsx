import React from "react";

const Filter = (props) => {

    let filterData = props.filterData;
  return (
    <div className=" flex justify-center">
      {filterData.map((data) => {
        return (
          
               <button key={data.id} className="px-5 py-2 mx-5 my-2 text-center  bg-amber-700 text-white rounded hover:bg-amber-900 transition ">{data.title}</button>
         
        ) ;
      })}
    </div>
  );
};

export default Filter;
