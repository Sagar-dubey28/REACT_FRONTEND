import React from "react";
import Card from "./card";

const Tours = ({ tours }) => {
  return (
    <>
      <div className="" flex justify-center flex-wrap>
        <div className="flex justify-center">
          <span className="border-[7px] border-dashed border-[#0111a0] rounded-[20px] text-[3rem] m-[6vh] px-[5vw] py-[1vh] ">
            Plan Your Place
          </span>
        </div>
        <div className="flex justify-center flex-wrap max-w-[1300px] mx-auto">
          {tours.map((tours) => {
            return <Card {...tours} key={tours.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Tours;
