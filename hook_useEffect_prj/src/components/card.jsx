import React from 'react'
import { FcLike,FcLikePlaceholder } from "react-icons/fc";

import {  toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setlikedCourses = props.setlikedCourses;

  function clickHandler(){
    if(likedCourses.includes(course.id))
    {
      //vo course phle se like hai or phle se pdha hua hai.
      setlikedCourses((prev)=> prev.filter((selectedId)=>  { return selectedId!==course.id}))
      toast.warning("liked removed");
    }
    else{
      //khali pdha hai, or phle se kuch pdha hai humko new insert krna hai.
      if(likedCourses.length===0)
      {
        setlikedCourses([course.id]);
      }
      else{
        setlikedCourses((prev)=>{return [...prev,course.id]});
      }
      toast.success("Liked successful")
    }
  }

  return (
    <>
     <div className="w-[300px] bg-white shadow-lg rounded-xl overflow-hidden m-4 flex flex-col">
      <img
        src={course.image.url}
        alt={course.image.alt}
        className="w-full h-48 object-cover p-2"
      />

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="mb-3">
          <p className="text-lg font-semibold text-gray-800 mb-1">{course.title}</p>
          <p className="text-sm text-gray-600">{course.description}</p>
        </div>

       <div>
           <button onClick={clickHandler}>
                        {
                            likedCourses.includes(props.course.id) ? <FcLike fontSize="1.75rem" />  : <FcLikePlaceholder fontSize="1.75rem" /> 
                        }
                    </button>
       </div>
      </div>
    </div>
    </>
  )
}

export default Card