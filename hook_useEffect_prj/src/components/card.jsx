import React from 'react'

const Card = (props) => {
  let course = props.course;
  return (
    <>
       <div>
          <div>
            <img src={course.image.url} alt={course.image.alt} />
          </div>
          <div>
            <button>
               like
            </button>
          </div>
          <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
          </div>
       </div>
    </>
  )
}

export default Card