import React, { useState } from 'react'
import Card from './card';

const Cards = (props) => {
   
  let courses = props.courses;
  let category = props.category;
  const[likedCourses,setlikedCourses] = useState([]);
  
  function getData()
    {
       if(category==="All")
       {
         let allcourses = [];
        Object.values(courses).forEach(array=>{
          array.forEach(courseData => {
            allcourses.push(courseData);
          });
        })
        return allcourses;
       }
       else{
        return courses[category]
       }
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