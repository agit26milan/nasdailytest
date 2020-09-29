import React from 'react'

const CardComponent = (props) => {
  const { data } = props
  return (
    <div >
      <p>{data && data.title} </p>
      <p>type: {data && data.type} </p>
      <p>score: {data && data.type} </p>
      <p>Comments: {data && data.kids && data.kids.length} </p>
    </div>
  )
}

export default CardComponent
