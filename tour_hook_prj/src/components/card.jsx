import React, { useState } from "react";

const Card = ({ id, name, info, image, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0,200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
     
  }
  return (
    <>
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img src={image} alt="card-image" />
        </div>
        <div className="p-4">
          <h6 className="mb-2 text-yellow-700 text-xl font-semibold">₹ {price}</h6>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold">{name}</h6>
          <p className="text-slate-600 leading-normal font-light">
            {description}
           
             <span  className="inline-flex items-center px-4 py-2 ml-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  onClick={readmoreHandler}> 
                 {readmore ? `showless` : `read more`}
          
            </span>



          </p>
        </div>
        <div className="px-4 pb-4 pt-0 mt-2">
          <button
            className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button" onClick={()=>{removeTour(id)}}
          >
             Not intrested
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
