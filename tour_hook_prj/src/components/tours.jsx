import React from "react";
import Card from "./card";

const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className=" flex justify-center flex-wrap">
        <div className="flex justify-center">
          <span className="border-[7px] border-dashed border-[#0111a0] rounded-[20px] text-[3rem] m-[6vh] px-[5vw] py-[1vh] ">
            Plan Your Place
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
          {tours.map((tours) => {
            return <Card {...tours} key={tours.id} removeTour={removeTour} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
