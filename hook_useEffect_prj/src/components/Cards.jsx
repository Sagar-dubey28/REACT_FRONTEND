import React, { useState } from 'react'
import Card from './card';

const Cards = (props) => {
   
  let courses = props.courses;
  const[likedCourses,setlikedCourses] = useState([]);
  
  function getData()
    {
        let allcourses = [];
        Object.values(courses).forEach(array=>{
          array.forEach(courseData => {
            allcourses.push(courseData);
          });
        })
        return allcourses;
    }
  
  return (
    <div className='flex  flex-wrap items-center justify-center'>
     {
      getData().map((course)=>{
        return(
           <Card key={course.id} course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses}  />
        )
      })
     }
    </div>
  )
}

export default Cards