import React from 'react'
import Card from './card'

const Tours = ({tours}) => {
  return (
    <>
      <div>Plan Your Place</div>
      <div>
        {tours.map((tours)=>{
           return <Card {...tours}  key={tours.id}/>
        })}
      </div>
    </>
  )
}

export default Tours