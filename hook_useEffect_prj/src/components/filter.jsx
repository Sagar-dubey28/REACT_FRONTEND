import React from "react";

const Filter = (props) => {

    let filterData = props.filterData;
    let category = props.category;
    let setCategory= props.setCategory;
    
    function filterSelector(title){
      setCategory(title);
    }

  return (
    <div className=" flex justify-center">
      {filterData.map((data) => {
        return (
          
               <button 
               onClick={()=>{filterSelector(data.title)}}
               key={data.id} 
               className={`px-5 py-2 mx-5 my-2 text-center  bg-amber-700 text-white rounded hover:bg-amber-900 transition
                            ${category===data.title ? "bg-amber-900 border-white" :" bg-amber-700"} `}>
                {data.title}</button>
         
        ) ;
      })}
    </div>
  );
};

export default Filter;
