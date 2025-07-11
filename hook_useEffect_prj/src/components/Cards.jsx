import React from 'react'
import Card from './card';

const Cards = (props) => {
   
  let courses = props.courses;
  
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
    <div>
     {
      getData().map((course)=>{
        return(
           <Card key={course.id} course={course}/>
        )
      })
     }
    </div>
  )
}

export default Cards